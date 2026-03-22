import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-bg-dark px-6 text-center">
      <p className="font-display text-[clamp(6rem,20vw,16rem)] font-extrabold leading-none tracking-tight text-surface-2">
        404
      </p>
      <h1 className="font-display text-2xl font-bold text-text-primary">Page not found</h1>
      <p className="font-body text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 rounded-full border border-border-dark px-6 py-3 font-body text-sm text-text-primary transition-all duration-300 hover:border-accent/50 hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Go home
      </Link>
    </div>
  )
}
