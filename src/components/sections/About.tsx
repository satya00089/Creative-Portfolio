'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { siteConfig } from '@/data/portfolio'
import { EASE_OUT_EXPO, staggerContainer, fadeUp } from '@/lib/animations'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="about" className="bg-surface-dark px-6 py-28 md:px-12 lg:px-20 lg:py-36">
      <SectionHeader
        number="03"
        label="About"
        title="The Designer"
      />

      <div ref={ref} className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        {/* Left — Photo */}
        <div className="space-y-6">
          <motion.div
            className="relative aspect-[3/4] max-w-md overflow-hidden rounded-lg bg-surface-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          >
            <Image
              src={siteConfig.photo}
              alt={siteConfig.fullName}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            {/* Accent border overlay */}
            <div className="absolute inset-0 rounded-lg ring-1 ring-accent/20" />
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center gap-2 text-text-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.3 }}
          >
            <MapPin className="h-4 w-4 text-accent" />
            <span className="font-body text-sm">{siteConfig.location}</span>
          </motion.div>
        </div>

        {/* Right — Bio & Skills */}
        <div className="flex flex-col justify-center">
          {/* Bio */}
          <div className="mb-12">
            {siteConfig.bio.split('\n\n').map((para, i) => (
              <motion.p
                key={i}
                className="mb-5 font-body text-base leading-[1.8] text-text-secondary md:text-lg"
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 + i * 0.15 }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Skills */}
          <motion.div
            className="mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className="mb-5 font-body text-xs uppercase tracking-[0.25em] text-text-muted">
              Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeUp}
                  className="rounded-full border border-border-dark px-4 py-1.5 font-body text-sm text-text-secondary transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <div>
            <h3 className="mb-6 font-body text-xs uppercase tracking-[0.25em] text-text-muted">
              Experience
            </h3>
            <div className="space-y-5">
              {siteConfig.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-[1fr_auto] items-start border-t border-border-dark pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.5 + i * 0.1 }}
                >
                  <div>
                    <p className="font-display text-base font-bold text-text-primary">{exp.role}</p>
                    <p className="mt-0.5 font-body text-sm text-text-secondary">{exp.company}</p>
                  </div>
                  <span className="font-body text-xs text-text-muted">{exp.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
