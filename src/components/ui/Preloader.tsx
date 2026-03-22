'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE_OUT_EXPO, EASE_IN_OUT_EXPO } from '@/lib/animations'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Animate counter 0 → 100
    const duration = 1800
    const interval = 18
    const steps = duration / interval
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      // Ease the count so it doesn't feel linear
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * 100))

      if (step >= steps) {
        clearInterval(timer)
        setTimeout(() => setLoading(false), 300)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-end justify-between bg-bg-dark p-8 md:p-12"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE_IN_OUT_EXPO, delay: 0.15 }}
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.p
              className="font-display text-lg font-bold tracking-widest text-text-primary"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.2 }}
            >
              PORTFOLIO
            </motion.p>
          </motion.div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.p
              className="font-display text-6xl font-extrabold tabular-nums tracking-tight text-text-primary md:text-8xl"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.2 }}
            >
              {count}
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.05, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
