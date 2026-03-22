'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import { EASE_OUT_EXPO } from '@/lib/animations'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  variant?: 'word' | 'line' | 'char'
  delay?: number
  once?: boolean
  threshold?: number
}

const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: EASE_OUT_EXPO,
      delay: i * 0.06,
    },
  }),
}

const lineVariants: Variants = {
  hidden: { y: '105%' },
  visible: (i: number) => ({
    y: '0%',
    transition: {
      duration: 0.9,
      ease: EASE_OUT_EXPO,
      delay: i * 0.12,
    },
  }),
}

export default function AnimatedText({
  text,
  className,
  as: Tag = 'p',
  variant = 'word',
  delay = 0,
  once = true,
  threshold = 0.2,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once, amount: threshold })

  if (variant === 'line') {
    const lines = text.split('\n')
    return (
      <Tag ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>} className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              variants={lineVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i}
              style={{ transitionDelay: `${delay}s` }}
            >
              {line || '\u00A0'}
            </motion.span>
          </span>
        ))}
      </Tag>
    )
  }

  const words = text.split(' ')
  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={cn('flex flex-wrap gap-x-[0.25em]', className)}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden">
          <motion.span
            className="inline-block"
            variants={wordVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={i}
            style={{ transitionDelay: `${delay}s` }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
