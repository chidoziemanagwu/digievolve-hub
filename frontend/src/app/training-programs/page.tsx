// app/training-programs/page.tsx
'use client'

import RootLayout from '@/components/layout/RootLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiBarChart, FiClock, FiBook } from 'react-icons/fi'
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa'
import { trainingPrograms } from './[slug]/programData'
import { IconType } from 'react-icons'

// Add TypeScript interface for program
interface Program {
  icon: IconType;
  title: string;
  description: string;
  duration: string;
  courses: any[]; // Replace 'any' with proper type if available
}

interface TrainingPrograms {
  [key: string]: Program;
}

export default function TrainingProgramsPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Training Programs</h1>
            <p className="text-xl text-gray-300">
              Transform your career with our comprehensive training programs in data analytics, 
              artificial intelligence, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">Our Training Programs</h2>
            <p className="text-lg text-gray-600">
              Choose from our range of industry-leading programs designed to equip you 
              with the skills needed in today&apos;s digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(trainingPrograms as TrainingPrograms).map(([slug, program]) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-amber-50 p-6">
                  <div className="flex items-center justify-center mb-4">
                    {program.icon && <program.icon size={24} className="text-[#f2aa40]" />}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {program.description}
                  </p>
                </div>
                <div className="p-6 border-t">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FiClock className="text-[#f2aa40] mr-2" />
                      <span className="text-gray-600">{program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaGraduationCap className="text-[#f2aa40] mr-2" />
                      <span className="text-gray-600">Industry Certification</span>
                    </div>
                    <div className="flex items-center">
                      <FiBook className="text-[#f2aa40] mr-2" />
                      <span className="text-gray-600">
                        {program.courses.length} Modules
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/training-programs/${slug}`}
                    className="mt-6 block text-center bg-[#f2aa40] text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Why Choose Our Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-[#f2aa40] mb-4">
                <FaLaptopCode className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hands-on Experience</h3>
              <p className="text-gray-600">
                Gain practical experience through real-world projects and industry partnerships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-[#f2aa40] mb-4">
                <FaGraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Certification</h3>
              <p className="text-gray-600">
                Earn recognized certifications that validate your skills and boost your career prospects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-[#f2aa40] mb-4">
                <FiBarChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
              <p className="text-gray-600">
                Get comprehensive career support including mentorship and job placement assistance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your career with our comprehensive training programs.
            Join thousands of successful graduates who have taken their careers to the next level.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#f2aa40] hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </RootLayout>
  )
}