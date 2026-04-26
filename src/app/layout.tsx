import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Kubera Innovations | Electronics Product Development',
  description: '20+ years of expertise in end-to-end electronics product development. From concept to manufacturing-ready hardware solutions. Zero design re-spins guaranteed.',
    icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },

  keywords: ['electronics product development', 'PCB design', 'hardware design', 'FPGA', 'embedded systems', 'signal integrity', 'power integrity', 'manufacturing support'],
  authors: [{ name: 'Kubera Innovations' }],
  openGraph: {
    title: 'Kubera Innovations | Engineering the Future. Today.',
    description: 'Accelerating ideas into scalable electronics. End-to-end product development with zero design re-spins.',
    url: 'https://kuberainnovations.com',
    siteName: 'Kubera Innovations',

    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubera Innovations | Electronics Product Development',
    description: 'Accelerating ideas into scalable electronics. 20+ years of expertise.',
  },
  robots: {
    index: true,
    follow: true,
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
  
}

  // rest of your existing code unchanged
}
