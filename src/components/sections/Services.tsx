'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, Layers, PlayCircle, Globe } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/data/portfolio'
import { EASE_OUT_EXPO } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  layers: Layers,
  'play-circle': PlayCircle,
  globe: Globe,
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="bg-bg-dark px-6 py-28 md:px-12 lg:px-20 lg:py-36">
      <SectionHeader
        number="04"
        label="Services"
        title="What I Do"
        description="Specialised design disciplines, applied with precision and craft."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 gap-px border border-border-dark sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Monitor
          return (
            <motion.div
              key={service.id}
              className="group relative overflow-hidden bg-bg-dark p-8 transition-colors duration-500 hover:bg-surface-dark"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: i * 0.1 }}
            >
              {/* Accent glow on hover */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/0 blur-[60px] transition-all duration-700 group-hover:bg-accent/10" />

              <div className="relative z-10">
                {/* Number */}
                <span className="mb-6 block font-display text-xs font-bold tracking-widest text-accent/60">
                  0{service.id}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-border-dark bg-surface-2 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-surface-dark">
                  <Icon className="h-5 w-5 text-text-secondary transition-colors duration-300 group-hover:text-accent" />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-display text-lg font-bold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
