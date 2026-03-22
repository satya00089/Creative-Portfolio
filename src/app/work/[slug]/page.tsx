import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects, siteConfig } from '@/data/portfolio'
import ProjectDetailClient from './ProjectDetailClient'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === params.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return <ProjectDetailClient project={project} nextProject={nextProject} />
}
