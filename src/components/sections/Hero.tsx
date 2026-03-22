'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { siteConfig } from '@/data/portfolio'
import { EASE_OUT_EXPO } from '@/lib/animations'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.6])
  // Always declare — avoids conditional hook rule violation
  const heroImageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  const titleWords = siteConfig.fullName.split(' ')

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative flex h-screen min-h-[700px] flex-col justify-end overflow-hidden bg-bg-dark"
    >
      {/* Background */}
      {siteConfig.heroImage ? (
        <motion.div
          className="absolute inset-0"
          style={{ opacity: heroImageOpacity }}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-surface-dark to-[#0d0a08]" />
          {/* Radial glow */}
          <div className="absolute left-1/3 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />
          {/* Grain texture */}
          <div className="grain-overlay absolute inset-0 opacity-[0.035]" />
        </div>
      )}

      {/* Scroll darkening overlay */}
      <motion.div
        className="absolute inset-0 bg-bg-dark pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Floating decoration */}
      <motion.div
        className="absolute right-8 top-1/3 hidden h-px w-24 bg-accent/40 md:block"
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT_EXPO, delay: 1.8 }}
      />
      <motion.div
        className="absolute right-8 top-1/3 mt-3 hidden text-right md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white">
          {siteConfig.availability}
        </span>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 px-6 pb-16 md:px-12 lg:px-20"
        style={{ y: titleY }}
      >
        {/* Eye-row: number + role */}
        <motion.div
          className="mb-6 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.3 }}
        >
          <span className="font-display text-xs font-bold tracking-[0.3em] text-accent">01</span>
          <div className="h-px w-8 bg-border-dark/60" />
          <span className="font-body text-xs uppercase tracking-[0.25em] text-white">
            {siteConfig.title}
          </span>
        </motion.div>

        {/* Giant headline */}
        <div className="overflow-hidden">
          <div className="flex flex-wrap">
            {titleWords.map((word, i) => (
              <div key={i} className="overflow-hidden mr-4">
                <motion.h1
                  className="font-display text-[clamp(4rem,14vw,13rem)] font-extrabold leading-[0.88] tracking-[-0.04em] text-white"
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1,
                    ease: EASE_OUT_EXPO,
                    delay: 0.4 + i * 0.12,
                  }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline + CTAs row */}
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            className="max-w-sm font-body text-base leading-relaxed text-text-secondary md:text-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.9 }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 1.05 }}
          >
            <MagneticButton>
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-bg-dark transition-all duration-300 hover:bg-accent-light"
              >
                View Work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-dark px-7 py-3.5 font-body text-sm font-semibold text-text-primary transition-all duration-300 hover:border-accent/60 hover:text-accent"
              >
                Contact
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
