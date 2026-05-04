'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'
import { MapPin, Briefcase, Clock, Users, ChevronDown, ArrowRight } from 'lucide-react'
import { careers } from '@/data/careers'

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')

  const departments = ['all', ...Array.from(new Set(careers.map((job) => job.department)))]
  const filteredJobs = selectedDepartment === 'all' 
    ? careers 
    : careers.filter((job) => job.department === selectedDepartment)

  // SEO Schema for Careers
  const careerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at Kubera Innovations",
    "description": "Join our team of talented engineers. Explore career opportunities at Kubera Innovations.",
    "url": "https://kuberaio.com/careers",
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careerSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-mono-green-100/40 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build the future of electronics with passionate engineers and innovators. We&apos;re looking for talented individuals to join our growing team.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Users, label: 'Team Members', value: '50+' },
              { icon: MapPin, label: 'Locations', value: '2' },
              { icon: Briefcase, label: 'Open Positions', value: `${careers.length}` },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-mono-green-100 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-mono-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-mono-green-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-mono-green-300'
                }`}
              >
                {dept.charAt(0).toUpperCase() + dept.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Open Positions
            </h2>
            <p className="text-gray-600">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <StaggerItem key={job.id}>
                  <motion.div
                    layout
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Job Header */}
                    <button
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {job.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              job.type === 'Full-time'
                                ? 'bg-blue-50 text-blue-700'
                                : job.type === 'Contract'
                                ? 'bg-purple-50 text-purple-700'
                                : 'bg-green-50 text-green-700'
                            }`}>
                              {job.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.experience}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                              {job.department}
                            </span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Job Details */}
                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200 px-6 py-6 bg-gray-50"
                        >
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">About the Role</h4>
                              <p className="text-gray-600 leading-relaxed">{job.description}</p>
                            </div>

                            {job.responsibilities && (
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp, i) => (
                                    <li key={i} className="flex gap-3 text-gray-600">
                                      <span className="text-mono-green-600 flex-shrink-0 mt-1">•</span>
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {job.requirements && (
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Required Qualifications</h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, i) => (
                                    <li key={i} className="flex gap-3 text-gray-600">
                                      <span className="text-mono-green-600 flex-shrink-0 mt-1">✓</span>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {job.benefits && (
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">What We Offer</h4>
                                <ul className="grid sm:grid-cols-2 gap-2">
                                  {job.benefits.map((benefit, i) => (
                                    <li key={i} className="flex gap-2 text-gray-600">
                                      <span className="text-mono-green-600 flex-shrink-0">★</span>
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="pt-4 border-t border-gray-200">
                              <Link
                                href={`/apply?job=${job.id}`}
                                className="inline-flex items-center gap-2 btn-primary"
                              >
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </StaggerItem>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 mb-4">No positions available in this department at the moment.</p>
                <p className="text-sm text-gray-500">Check back soon or subscribe to job alerts.</p>
              </motion.div>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Kubera Innovations?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to creating an environment where brilliant minds can do their best work.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cutting-Edge Technology',
                description: 'Work with latest tools and technologies in electronics, FPGA, and embedded systems.',
                icon: '⚡',
              },
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning, certifications, and career advancement pathways.',
                icon: '📈',
              },
              {
                title: 'Collaborative Culture',
                description: 'Work with passionate engineers who are excited about solving complex problems.',
                icon: '🤝',
              },
              {
                title: 'Competitive Compensation',
                description: 'Competitive salaries, benefits, and perks to match your talent.',
                icon: '💰',
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements and support for your personal growth.',
                icon: '⚖️',
              },
              {
                title: 'Impact',
                description: 'Build products that power innovations in healthcare, automotive, and more.',
                icon: '🚀',
              },
            ].map((benefit, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mono-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don&apos;t see your perfect role?
            </h2>
            <p className="text-xl text-mono-green-50 mb-8">
              Send us your resume and tell us what interests you. We&apos;re always looking for talented people.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-mono-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
