// app/services/[slug]/page.tsx
'use client'

import RootLayout from '@/components/layout/RootLayout'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { services } from './servicesData'

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const service = services[slug]

  if (!service) {
    return (
      <RootLayout>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl text-gray-600">Service not found</h1>
        </div>
      </RootLayout>
    )
  }

  const IconComponent = service.icon

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
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <IconComponent className="w-12 h-12 text-[#f2aa40]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-300 mb-8">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Overview</h2>
            <p className="text-lg text-gray-600 mb-12">
              {service.longDescription}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {service.features.map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-[#f2aa40] mb-4 flex justify-center">
                      <FeatureIcon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiArrowRight className="text-[#f2aa40] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start p-4"
              >
                <FiCheck className="text-[#f2aa40] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage Section (Only for Global Talent) */}
      {service.countries && (
        <section className="bg-amber-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-center">Global Coverage</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {service.countries.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg text-center shadow-md"
                >
                  <span className="text-gray-700">{country}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title} can help you achieve your goals and stay ahead in today's digital landscape.
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