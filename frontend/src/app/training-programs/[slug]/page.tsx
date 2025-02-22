// app/training-programs/[slug]/page.tsx
'use client'

import RootLayout from '@/components/layout/RootLayout'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiClock, FiBook, FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaGraduationCap, FaLaptopCode, FaUserGraduate } from 'react-icons/fa'
import { trainingPrograms } from './programData'

export default function TrainingProgramPage() {
  const params = useParams()
  const slug = params.slug as string
  const program = trainingPrograms[slug]

  if (!program) {
    return (
      <RootLayout>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl text-gray-600">Program not found</h1>
        </div>
      </RootLayout>
    )
  }

  const IconComponent = program.icon

  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-400 to-white text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0  opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400 to-white opacity-75"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full">
                <IconComponent className="w-12 h-12 text-[#f2aa40]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-normal mb-6 text-black">{program.title}</h1>
            <p className="text-xl text-black mb-8">
              {program.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center bg-white rounded-full px-3 py-2">
                <FiClock className="text-[#f2aa40] mr-2 font-bold" />
                <span className='text-black'>{program.duration}</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-3 py-2">
                <FaGraduationCap className="text-[#f2aa40] mr-2" />
                <span className='text-black'>Industry Certification</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-3 py-2">
                <FaLaptopCode className="text-[#f2aa40] mr-2" />
                <span className='text-black'>Hands-on Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Program Overview</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                {program.longDescription}
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {program.highlights.map((highlight, index) => {
                  const HighlightIcon = highlight.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-[#f2aa40] mb-4 flex justify-center">
                        <HighlightIcon className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Course Curriculum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {program.courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                <ul className="space-y-3">
                  {course.items.map((item, idx) => (
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

      {/* Tools & Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Tools You'll Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {program.tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 text-center rounded-lg border border-gray-200 hover:border-[#f2aa40] transition-colors"
              >
                <p className="font-medium text-gray-700">{tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Career Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {program.careerOpportunities.map((opportunity, index) => {
              const OpportunityIcon = opportunity.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-[#f2aa40] mb-4">
                    <OpportunityIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600">{opportunity.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Program Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <FaGraduationCap className="text-[#f2aa40] w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold mb-2">Industry Certification</h3>
                <p className="text-gray-600">Earn recognized certifications that validate your expertise</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <FaLaptopCode className="text-[#f2aa40] w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold mb-2">Hands-on Projects</h3>
                <p className="text-gray-600">Work on real-world projects with industry partners</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <FaUserGraduate className="text-[#f2aa40] w-8 h-8 mr-4" />
              <div>
                <h3 className="font-semibold mb-2">Career Support</h3>
                <p className="text-gray-600">Get placement assistance and career guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your career with our comprehensive {program.title} program.
            Join thousands of successful graduates who have taken their careers to the next level.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-block bg-[#f2aa40] hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Enroll Now
            </Link>
            <button 
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors border border-gray-200"
            >
              <FiDownload className="mr-2" />
              Download Syllabus
            </button>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}