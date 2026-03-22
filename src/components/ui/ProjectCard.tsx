'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '@/data/portfolio'
import { EASE_OUT_EXPO } from '@/lib/animations'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="group block" data-cursor="pointer">
        {/* Image container */}
        <div className="relative mb-5 overflow-hidden rounded-lg bg-surface-2">
          <div className="aspect-[4/3] w-full">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.07]"
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-bg-dark/0 transition-all duration-500 group-hover:bg-bg-dark/50" />

          {/* Hover CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
              <ArrowUpRight className="h-6 w-6 text-bg-dark" />
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-bg-dark/60 px-3 py-1 backdrop-blur-sm">
            <span className="font-body text-xs uppercase tracking-widest text-text-primary">
              {project.category}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-1 font-body text-sm text-text-secondary">{project.description}</p>
          </div>
          <span className="shrink-0 font-body text-sm text-text-muted">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  )
}
