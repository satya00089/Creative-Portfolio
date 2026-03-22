'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { EASE_OUT_EXPO } from '@/lib/animations'

interface SectionHeaderProps {
  number?: string
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  number,
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={cn(
        'mb-16 md:mb-24',
        align === 'center' && 'text-center',
        className
      )}
    >
      {/* Number + label row */}
      <motion.div
        className={cn(
          'mb-6 flex items-center gap-4',
          align === 'center' && 'justify-center'
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        {number && (
          <span className="font-display text-sm font-bold tracking-widest text-accent">
            {number}
          </span>
        )}
        <div className="h-px w-10 bg-border-dark/60" />
        <span className="font-body text-xs uppercase tracking-[0.25em] text-text-secondary">
          {label}
        </span>
      </motion.div>

      {/* Title */}
      <div className="overflow-hidden">
        <motion.h2
          className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-text-primary"
          initial={{ y: '100%', opacity: 0 }}
          animate={inView ? { y: '0%', opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.1 }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Description */}
      {description && (
        <motion.p
          className={cn(
            'mt-5 max-w-xl font-body text-base leading-relaxed text-text-secondary',
            align === 'center' && 'mx-auto'
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
