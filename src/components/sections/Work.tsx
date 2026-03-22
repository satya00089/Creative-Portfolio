'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/portfolio'

const CATEGORIES = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="work" className="bg-bg-dark px-6 py-28 md:px-12 lg:px-20 lg:py-36">
      <SectionHeader
        number="02"
        label="Selected Work"
        title="Recent Projects"
        description="A curated selection of brand, product, and motion work — each one a story worth telling."
      />

      {/* Category filter */}
      <div className="mb-12 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-5 py-2 font-body text-sm transition-all duration-300 ${
              activeCategory === cat
                ? 'border-accent bg-accent text-bg-dark'
                : 'border-border-dark text-text-secondary hover:border-accent/40 hover:text-text-primary'
            }`}
            whileTap={{ scale: 0.97 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={activeCategory}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
