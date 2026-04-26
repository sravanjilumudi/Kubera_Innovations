import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ---------------- Fonts ---------------- */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

/* ---------------- SEO Metadata ---------------- */
export const metadata: Metadata = {
  title: 'Kubera Innovations | Electronics Product Development',
  icons: {
    icon: '/favicon.ico',  
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  description: '20+ years of expertise in end-to-end electronics product development. From concept to manufacturing-ready hardware solutions. Zero design re-spins guaranteed.',
  keywords: ['electronics product development', 'PCB design', 'hardware design', 'FPGA', 'embedded systems', 'signal integrity', 'power integrity', 'manufacturing support'],
  authors: [{ name: 'Kubera Innovations' }],
  openGraph: {
    title: 'Kubera Innovations | Engineering the Future. Today.',
    description:
      'Accelerating ideas into scalable electronics. End-to-end product development with zero design re-spins.',
    url: 'https://kuberaio.com',
    siteName: 'Kubera Innovations',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kubera Innovations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  /* ---------------- Twitter ---------------- */
  twitter: {
    card: 'summary_large_image',
    title: 'Kubera Innovations | Electronics Product Development',
    description:
      'Accelerating ideas into scalable electronics. 20+ years of expertise.',
    images: ['/og-image.png'],
  },

  /* ---------------- Robots ---------------- */
  robots: {
    index: true,
    follow: true,
  },
}

/* ---------------- Root Layout ---------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased bg-white text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
