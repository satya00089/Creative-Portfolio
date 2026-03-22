'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/data/portfolio'
import { EASE_OUT_EXPO } from '@/lib/animations'

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  return (
    <section id="testimonials" className="bg-surface-dark px-6 py-28 md:px-12 lg:px-20 lg:py-36">
      <SectionHeader
        number="05"
        label="Testimonials"
        title="Kind Words"
        align="center"
      />

      <div ref={ref} className="mx-auto max-w-4xl">
        {/* Quote card */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border-dark bg-surface-2 p-8 md:p-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
        >
          {/* Background accent */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-[80px]" />

          {/* Quote icon */}
          <Quote className="mb-8 h-8 w-8 text-accent/40" />

          {/* Testimonial body */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            >
              <blockquote className="mb-10 font-display text-xl font-semibold leading-[1.5] tracking-tight text-text-primary md:text-2xl lg:text-3xl">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-base font-bold text-bg-dark">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-base font-bold text-text-primary">
                    {testimonials[active].name}
                  </p>
                  <p className="font-body text-sm text-text-secondary">
                    {testimonials[active].role}, {testimonials[active].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="mt-8 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-accent' : 'w-3 bg-border-dark'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-dark text-text-secondary transition-all duration-300 hover:border-accent/40 hover:text-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-dark text-text-secondary transition-all duration-300 hover:border-accent/40 hover:text-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
