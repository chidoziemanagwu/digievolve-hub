// frontend/src/app/contact/page.tsx
'use client'

import RootLayout from '@/components/layout/RootLayout'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock, FiGlobe } from 'react-icons/fi'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src="/contact-hero.jpg" // Add an image showing a modern office or tech workspace
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Have questions about our services? We're here to help you transform your digital journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#f2aa40] focus:ring-[#f2aa40]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#f2aa40] focus:ring-[#f2aa40]"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#f2aa40] focus:ring-[#f2aa40]"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <select
                    id="subject"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#f2aa40] focus:ring-[#f2aa40]"
                  >
                    <option value="">Select a subject</option>
                    <option value="training">Training Programs</option>
                    <option value="consulting">Digital Transformation</option>
                    <option value="automation">Automation Solutions</option>
                    <option value="career">Career Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#f2aa40] focus:ring-[#f2aa40]"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f2aa40] text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FiMapPin className="w-6 h-6 text-[#f2aa40] mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-gray-800">Office Address</h3>
                      <p className="text-gray-600 mt-1">123 Innovation Hub, Tech District<br />London, UK EC1A 1BB</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiMail className="w-6 h-6 text-[#f2aa40] mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-gray-800">Email Us</h3>
                      <a href="mailto:info@digievolve.com" className="text-gray-600 hover:text-[#f2aa40] mt-1 block">
                        info@digievolve.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiPhone className="w-6 h-6 text-[#f2aa40] mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-gray-800">Call Us</h3>
                      <a href="tel:+442012345678" className="text-gray-600 hover:text-[#f2aa40] mt-1 block">
                        +44 20 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiClock className="w-6 h-6 text-[#f2aa40] mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-gray-800">Business Hours</h3>
                      <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Connect With Us</h2>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-[#f2aa40] transition-colors">
                    <FaLinkedin className="w-8 h-8" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-[#f2aa40] transition-colors">
                    <FaTwitter className="w-8 h-8" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-[#f2aa40] transition-colors">
                    <FaInstagram className="w-8 h-8" />
                  </Link>
                </div>
              </div>

              {/* Global Presence */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Global Presence</h2>
                <div className="flex items-center">
                  <FiGlobe className="w-6 h-6 text-[#f2aa40] mr-4" />
                  <p className="text-gray-600">
                    Serving clients across UK, USA, Australia, Canada, Sweden, Finland, Portugal, and Croatia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2889612073466!2d-0.08777492341297075!3d51.51744097169591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cab00000001%3A0x442d40a0c390750!2sLondon%20EC1A%201BB%2C%20UK!5e0!3m2!1sen!2s!4v1708633546736!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}