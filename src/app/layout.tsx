import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import Preloader from '@/components/ui/Preloader'
import { siteConfig } from '@/data/portfolio'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: `Portfolio of ${siteConfig.fullName} — ${siteConfig.title} based in ${siteConfig.location}.`,
  keywords: ['designer', 'product design', 'UI UX', 'brand identity', 'portfolio'],
  authors: [{ name: siteConfig.fullName }],
  openGraph: {
    type: 'website',
    title: `${siteConfig.fullName} — ${siteConfig.title}`,
    description: `Portfolio of ${siteConfig.fullName}`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <body>
        <Preloader />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
