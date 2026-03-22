import Link from 'next/link'
import { Dribbble, Linkedin, Instagram, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/data/portfolio'

const socialLinks = [
  { label: 'Dribbble', href: siteConfig.social.dribbble, Icon: Dribbble },
  { label: 'Behance', href: siteConfig.social.behance, Icon: ExternalLink },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: Instagram },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-dark bg-bg-dark px-6 py-10 md:px-12">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-display text-sm font-extrabold uppercase tracking-widest text-text-primary transition-colors hover:text-accent"
          >
            {siteConfig.name}
          </Link>
          <span className="font-body text-xs text-text-muted">
            © {year} All rights reserved.
          </span>
        </div>

        {/* Center — availability */}
        <div className="hidden items-center gap-2 sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="font-body text-xs text-text-secondary">{siteConfig.availability}</span>
        </div>

        {/* Social links */}
        <div className="flex gap-3">
          {socialLinks.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-dark text-text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
              aria-label={label}
            >
              <Icon className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
