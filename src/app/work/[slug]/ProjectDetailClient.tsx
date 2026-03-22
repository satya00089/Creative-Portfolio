'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Project } from '@/data/portfolio'
import { EASE_OUT_EXPO } from '@/lib/animations'

interface Props {
  project: Project
  nextProject: Project
}

export default function ProjectDetailClient({ project, nextProject }: Props) {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const inView = useInView(contentRef, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <div className="bg-bg-dark">
      {/* ── Back link ────────────────────────────────────────── */}
      <div className="fixed left-6 top-24 z-50 md:left-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.3 }}
        >
          <Link
            href="/#work"
            className="flex items-center gap-2 font-body text-xs uppercase tracking-widest text-text-secondary transition-colors duration-300 hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
        </motion.div>
      </div>

      {/* ── Hero image ──────────────────────────────────────── */}
      <div ref={heroRef} className="relative h-[65vh] min-h-[480px] overflow-hidden md:h-[80vh]">
        <motion.div className="h-full w-full" style={{ y: heroY, scale: heroScale }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-transparent to-bg-dark" />
        </motion.div>
      </div>

      {/* ── Header info ─────────────────────────────────────── */}
      <div className="relative z-10 -mt-28 px-6 pb-20 md:px-12 lg:px-20">
        {/* Category + Year */}
        <motion.div
          className="mb-5 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 }}
        >
          <span
            className="rounded-full border px-4 py-1 font-body text-xs uppercase tracking-widest"
            style={{ borderColor: project.accentColor + '55', color: project.accentColor }}
          >
            {project.category}
          </span>
          <span className="font-body text-xs text-text-secondary">{project.year}</span>
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(2.5rem,7vw,7rem)] font-extrabold leading-[0.92] tracking-tight text-text-primary"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.95, ease: EASE_OUT_EXPO, delay: 0.2 }}
          >
            {project.title}
          </motion.h1>
        </div>

        {/* Meta row */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 border-t border-border-dark pt-8 sm:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.5 }}
        >
          <div>
            <p className="mb-1 font-body text-xs uppercase tracking-[0.2em] text-text-muted">
              Role
            </p>
            <p className="font-display text-base font-semibold text-text-primary">{project.role}</p>
          </div>
          <div>
            <p className="mb-1 font-body text-xs uppercase tracking-[0.2em] text-text-muted">
              Tools
            </p>
            <p className="font-display text-base font-semibold text-text-primary">
              {project.tools.join(', ')}
            </p>
          </div>
          <div>
            <p className="mb-1 font-body text-xs uppercase tracking-[0.2em] text-text-muted">
              Year
            </p>
            <p className="font-display text-base font-semibold text-text-primary">{project.year}</p>
          </div>
        </motion.div>
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div
        ref={contentRef}
        className="border-t border-border-dark px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr]">
          {/* Sidebar label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <p className="sticky top-28 font-body text-xs uppercase tracking-[0.25em] text-text-muted">
              Overview
            </p>
          </motion.div>

          {/* Long description */}
          <motion.div
            className="prose-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
          >
            {project.longDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Image gallery ──────────────────────────────────── */}
      <div className="space-y-4 px-6 pb-20 md:px-12 lg:px-20">
        {project.images.slice(1).map((src, i) => (
          <motion.div
            key={i}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: i * 0.1 }}
          >
            <Image
              src={src}
              alt={`${project.title} — image ${i + 2}`}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </motion.div>
        ))}
      </div>

      {/* ── Next project ───────────────────────────────────── */}
      <Link
        href={`/work/${nextProject.slug}`}
        className="group block border-t border-border-dark px-6 py-20 transition-colors duration-500 hover:bg-surface-dark md:px-12 lg:px-20"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-[0.25em] text-text-muted">
              Next Project
            </p>
            <h2 className="font-display text-[clamp(2rem,6vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
              {nextProject.title}
            </h2>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border-dark transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
            <ArrowUpRight className="h-6 w-6 text-text-secondary transition-colors duration-300 group-hover:text-bg-dark" />
          </div>
        </div>
      </Link>
    </div>
  )
}
