'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Hardware Architecture', href: '#services' },
    { name: 'PCB Layout Design', href: '#services' },
    { name: 'SI/PI Analysis', href: '#services' },
    { name: 'Compliance & Certification', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Training', href: '#training' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Insights', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Support', href: '#contact' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/kuberaio' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/kubera-innovations' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/kuberaio' },
  { name: 'Email', icon: Mail, href: 'mailto:info@kuberaio.com' },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Kubera Innovations Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg text-gray-900">
                Kubera <span className="text-mono-green-600">Innovations</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              Accelerating ideas into scalable electronics. 20+ years of expertise in end-to-end product development with zero design re-spins.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white hover:bg-mono-green-50 border border-gray-200 hover:border-mono-green-300 flex items-center justify-center text-gray-500 hover:text-mono-green-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-mono-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-mono-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-mono-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kubera Innovations. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
