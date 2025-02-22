// app/services/page.tsx
'use client'

import RootLayout from '@/components/layout/RootLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from './[slug]/servicesData'

export default function ServicesPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive solutions for digital transformation, automation, and professional growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(services).map(([slug, service], index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-50 p-3 rounded-full">
                        <IconComponent className="w-8 h-8 text-[#f2aa40]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <feature.icon className="w-5 h-5 text-[#f2aa40] mt-1 mr-2 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{feature.title}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services/${slug}`}
                      className="mt-6 inline-flex items-center text-[#f2aa40] hover:text-amber-600"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Why Choose DigiEvolve Hub</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Comprehensive Solutions</h3>
                <p className="text-gray-600">
                  End-to-end support for your digital transformation journey
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Expert-Led Training</h3>
                <p className="text-gray-600">
                  Learn from industry professionals with current experience
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                <p className="text-gray-600">
                  Support and solutions available across multiple countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and stay ahead in today's digital landscape.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-block bg-[#f2aa40] hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}