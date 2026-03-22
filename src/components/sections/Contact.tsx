'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Mail, Dribbble, Linkedin, ExternalLink, Instagram } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import MagneticButton from '@/components/ui/MagneticButton'
import { siteConfig } from '@/data/portfolio'
import { EASE_OUT_EXPO } from '@/lib/animations'

const socialLinks = [
  { label: 'Dribbble', href: siteConfig.social.dribbble, Icon: Dribbble },
  { label: 'Behance', href: siteConfig.social.behance, Icon: ExternalLink },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: Instagram },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="bg-bg-dark px-6 py-28 md:px-12 lg:px-20 lg:py-36">
      <div ref={ref} className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left */}
        <div>
          <SectionHeader number="06" label="Contact" title="Let's Work\nTogether." />

          <motion.p
            className="mb-10 max-w-sm font-body text-base leading-relaxed text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.3 }}
          >
            Have a project in mind? I&apos;d love to hear about it. Send me a message and
            let&apos;s create something remarkable together.
          </motion.p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.45 }}
          >
            <MagneticButton>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-3 rounded-full border border-border-dark px-8 py-4 font-body text-sm font-semibold text-text-primary transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4 transition-colors duration-300 group-hover:text-accent" />
                {siteConfig.email}
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="mt-10 flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.6 }}
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-dark text-text-secondary transition-all duration-300 hover:border-accent/50 hover:text-accent"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Right — Contact form */}
        <motion.form
          className="space-y-5"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.2 }}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            // Replace with your form submission logic (e.g., Resend, Formspree, etc.)
            alert('Message sent! (Wire up your preferred email service.)')
          }}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="font-body text-xs uppercase tracking-widest text-text-muted">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border-dark bg-surface-2 px-4 py-3.5 font-body text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors duration-200"
              />
            </div>
            <div className="space-y-2">
              <label className="font-body text-xs uppercase tracking-widest text-text-muted">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border-dark bg-surface-2 px-4 py-3.5 font-body text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors duration-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-widest text-text-muted">
              Project type
            </label>
            <input
              type="text"
              placeholder="e.g. Brand Identity, Web Design..."
              className="w-full rounded-lg border border-border-dark bg-surface-2 px-4 py-3.5 font-body text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors duration-200"
            />
          </div>

          <div className="space-y-2">
            <label className="font-body text-xs uppercase tracking-widest text-text-muted">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-border-dark bg-surface-2 px-4 py-3.5 font-body text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors duration-200"
            />
          </div>

          <MagneticButton className="w-full">
            <button
              type="submit"
              className="w-full rounded-full bg-accent py-4 font-body text-sm font-semibold text-bg-dark transition-all duration-300 hover:bg-accent-light active:scale-[0.98]"
            >
              Send Message
            </button>
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  )
}
