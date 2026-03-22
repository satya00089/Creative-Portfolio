// ============================================================
// PORTFOLIO DATA — Edit this file to customize all content
// ============================================================

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  year: string
  description: string
  longDescription: string
  role: string
  tools: string[]
  coverImage: string
  images: string[]
  accentColor: string
  featured: boolean
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  company: string
}

export interface Experience {
  year: string
  role: string
  company: string
}

// ── Site-wide configuration ────────────────────────────────
export const siteConfig = {
  name: 'Satya',
  fullName: 'Satya Kumar',
  title: 'Product Designer & Visual Storyteller',
  tagline: 'Crafting digital experiences\nthat inspire and matter.',
  bio: `I'm a product designer with a passion for creating digital experiences that sit at the intersection of beauty and function. With over 6 years of experience spanning brand identity, product design, and motion design, I collaborate with startups and global brands to bring meaningful visions to life.\n\nEvery pixel has intent. Every interaction has purpose.`,
  location: 'Hyderabad, India',
  email: 'hello@satyakumar.co',
  availability: 'Available for new projects',
  // Replace with your actual photo path (place in /public/images/)
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  // Leave heroImage empty for gradient background, or set a path/URL
  heroImage: 'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  social: {
    dribbble: 'https://dribbble.com',
    behance: 'https://behance.net',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
  },
  skills: [
    'UI/UX Design',
    'Brand Identity',
    'Motion Design',
    'Design Systems',
    'Prototyping',
    'Web Design',
    'Product Strategy',
    'Visual Design',
    'Typography',
    'Illustration',
  ],
  experience: [
    { year: '2022 – Now', role: 'Senior Product Designer', company: 'Moonwalker Studio' },
    { year: '2020 – 2022', role: 'UI/UX Lead', company: 'Vertex Digital' },
    { year: '2018 – 2020', role: 'Visual Designer', company: 'Brandcraft Agency' },
  ] as Experience[],
}

// ── Projects ───────────────────────────────────────────────
// Replace coverImage and images with your own (place in /public/images/projects/)
export const projects: Project[] = [
  {
    id: 1,
    slug: 'nexus-brand-identity',
    title: 'Nexus Brand Identity',
    category: 'Branding',
    year: '2024',
    description: 'Complete visual identity system for a next-gen AI company',
    longDescription: `Nexus approached us with a clear vision: to become the most trusted name in enterprise AI. The challenge was to create a brand that felt both cutting-edge and approachable—powerful without being intimidating.\n\nThe identity system was built around the concept of "connected intelligence"—how data points, nodes, and networks form something greater than the sum of their parts. The logotype uses a custom geometric typeface with variable weight, allowing the mark to breathe and adapt across all touchpoints.\n\nThe color system balances deep space-inspired darks with electric accent tones, evoking both depth and energy. The result is a brand system that scales from a single business card to a full-bleed billboard.`,
    role: 'Lead Brand Designer',
    tools: ['Figma', 'Illustrator', 'After Effects', 'Cinema 4D'],
    coverImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&q=85',
      'https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=1400&q=85',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=85',
    ],
    accentColor: '#6366f1',
    featured: true,
  },
  {
    id: 2,
    slug: 'pulse-mobile-app',
    title: 'Pulse — Health App',
    category: 'Product Design',
    year: '2024',
    description: 'A mindful health tracking app built for the modern user',
    longDescription: `Pulse is a health and wellness app designed for people who want to stay in tune with their body—without the noise of overcrowded feature sets. The design philosophy was radical simplicity: remove every element that doesn't serve the user's core goal.\n\nThe onboarding flow uses progressive disclosure to ease users into habit formation. Data visualizations were custom-designed to be beautiful at a glance and insightful on deeper inspection. The design system is built on an 8pt grid with a warm, accessible color palette.\n\nThe result is an app that feels like a trusted companion rather than a productivity tool.`,
    role: 'Product Designer & UX Lead',
    tools: ['Figma', 'Principle', 'Zeplin', 'Lottie'],
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=85',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&q=85',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1400&q=85',
    ],
    accentColor: '#22c55e',
    featured: true,
  },
  {
    id: 3,
    slug: 'atlas-web-platform',
    title: 'Atlas Web Platform',
    category: 'Web Design',
    year: '2023',
    description: 'A premium SaaS dashboard with a razor-sharp design system',
    longDescription: `Atlas is a geographic data intelligence platform used by urban planners, real estate developers, and city governments. The challenge was to present massive datasets in a way that was humanly comprehensible and visually compelling.\n\nThe design system underpinning Atlas was built with over 400 components, covering every state, variant, and edge case. Dark mode was designed first—reflecting the domain's preference for low-light environments—with light mode as an equal partner.\n\nInteractive map layers, data overlays, and drill-down panels were all prototyped in high fidelity before development, resulting in zero revision cycles on the core UX.`,
    role: 'Lead UI Designer & Design Systems',
    tools: ['Figma', 'Storybook', 'Framer', 'Illustrator'],
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&q=85',
    ],
    accentColor: '#0ea5e9',
    featured: true,
  },
  {
    id: 4,
    slug: 'solstice-motion-titles',
    title: 'Solstice Motion Titles',
    category: 'Motion Design',
    year: '2023',
    description: 'Kinetic typography & title sequences for a documentary series',
    longDescription: `Solstice is a six-part documentary series about climate migration. The title sequences and motion typography had to convey both the urgency of the subject and the quiet, human dignity of the people at its center.\n\nEach episode's title treatment used different visual metaphors—dissolving borders, rising waterlines, shifting sands—all executed through layered typographic animation. The system was built in After Effects and Rive for interactive moments.\n\nThe project won a regional Emmy nomination for Outstanding Main Title Design.`,
    role: 'Motion Designer & Art Director',
    tools: ['After Effects', 'Cinema 4D', 'Illustrator', 'Rive'],
    coverImage: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1400&q=85',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1400&q=85',
      'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=1400&q=85',
    ],
    accentColor: '#f97316',
    featured: false,
  },
  {
    id: 5,
    slug: 'forma-typeface',
    title: 'Forma — Custom Typeface',
    category: 'Typography',
    year: '2023',
    description: 'A geometric display typeface designed for editorial and branding',
    longDescription: `Forma is a geometric sans-serif typeface designed for high-impact editorial and brand applications. Inspired by the modernist typographic tradition and Bauhaus principles, it marries mathematical precision with subtle humanist warmth.\n\nDrawn across four weights (Light, Regular, Bold, Black), Forma includes 340 glyphs with full Latin character support. Optical sizing adjustments ensure it reads clearly at both 8pt body text and 200pt billboard scale.\n\nForma has been licensed by over 30 design studios and used in national advertising campaigns.`,
    role: 'Type Designer',
    tools: ['Glyphs App', 'Illustrator', 'FontLab', 'Python'],
    coverImage: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1400&q=85',
      'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1400&q=85',
      'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1400&q=85',
    ],
    accentColor: '#ec4899',
    featured: false,
  },
  {
    id: 6,
    slug: 'vanta-e-commerce',
    title: 'Vanta E-Commerce',
    category: 'Web Design',
    year: '2022',
    description: 'Premium fashion retail experience — elevated digital storefront',
    longDescription: `Vanta is a luxury fashion brand that needed a digital storefront worthy of their physical boutique experience. The brief was unambiguous: "Make it feel like walking into a flagship store on a quiet Tuesday morning."\n\nThe experience is built around slowness and intention. Full-bleed product photography, generous whitespace, and measured micro-animations guide the visitor through an editorial-style journey before any transactional moment.\n\nConversion rate improved by 34% in the first quarter post-launch.`,
    role: 'UX Designer & Creative Director',
    tools: ['Figma', 'Framer', 'Webflow', 'GSAP'],
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=85',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&q=85',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1400&q=85',
    ],
    accentColor: '#a855f7',
    featured: false,
  },
]

// ── Services ───────────────────────────────────────────────
export const services: Service[] = [
  {
    id: 1,
    title: 'UI/UX Design',
    description:
      'End-to-end product design — from research and wireframes to pixel-perfect high-fidelity interfaces and interactive prototypes.',
    icon: 'monitor',
  },
  {
    id: 2,
    title: 'Brand Identity',
    description:
      'Strategic visual identity systems — logotype, color, typography, and brand guidelines built to last and scale.',
    icon: 'layers',
  },
  {
    id: 3,
    title: 'Motion Design',
    description:
      'Kinetic typography, UI animation, and video title sequences that bring brands to life in time and space.',
    icon: 'play-circle',
  },
  {
    id: 4,
    title: 'Web Design',
    description:
      'Premium, high-performance website design — from landing pages to complex web applications with design system foundations.',
    icon: 'globe',
  },
]

// ── Testimonials ───────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Working with Satya fundamentally changed how we think about our brand. The identity system he created is versatile, timeless, and genuinely communicates who we are at the deepest level.',
    name: 'Marcus Chen',
    role: 'CEO',
    company: 'Nexus AI',
  },
  {
    id: 2,
    quote:
      'The attention to detail is extraordinary. Every interaction in the Pulse app was considered from both a user psychology and aesthetic standpoint. Our retention rates speak for themselves.',
    name: 'Priya Sharma',
    role: 'Head of Product',
    company: 'Pulse Health',
  },
  {
    id: 3,
    quote:
      'Satya delivered a design system that our entire engineering team fell in love with. Clear, elegant, and logical—exactly what we needed to scale to enterprise.',
    name: 'James Okafor',
    role: 'CTO',
    company: 'Atlas Digital',
  },
]
