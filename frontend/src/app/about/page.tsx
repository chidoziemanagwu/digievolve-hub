// frontend/src/app/about/page.tsx
'use client'

import { useState } from 'react';
import RootLayout from '@/components/layout/RootLayout';
import { FiTarget, FiBook, FiAward, FiUsers, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src="/about-us.jpg" // Add an image showing a modern office or tech workspace
            alt="Contact Us"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 30%' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DigiEvolve Hub</h1>
            <p className="text-xl text-gray-300">
              Pioneering solutions in digital transformation, data analytics, and artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DigiEvolve Hub Limited is a pioneering solution addressing the dynamic challenges within 
              the realm of digital transformation, data analytics, and artificial intelligence. Our 
              comprehensive suite of services is tailored to meet the diverse needs of aspiring data 
              professionals, seasoned experts, academia, businesses, career transitioners, and decision-makers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Value Propositions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-amber-500 mb-4">{prop.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6 hover:border-amber-500 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Global Presence</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FiGlobe className="text-amber-500 text-2xl mx-auto mb-3" />
                <p className="font-medium">{country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 text-center rounded-lg border border-gray-200 hover:border-amber-500 transition-colors"
              >
                <p className="font-medium text-gray-700">{tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us on our mission to empower individuals and businesses with the skills and knowledge needed to thrive in the digital age.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </RootLayout>
  );
}

const valueProps = [
  {
    icon: <FiTarget className="text-3xl" />,
    title: "Comprehensive Digital Transformation",
    description: "End-to-end solutions from cloud migration to AI integration, tailored specifically for your business's unique challenges."
  },
  {
    icon: <FiBook className="text-3xl" />,
    title: "Project-Based Learning",
    description: "Transform your career with hands-on, project-based learning and comprehensive career support tailored to your industry."
  },
  {
    icon: <FiAward className="text-3xl" />,
    title: "Expert-Led Training",
    description: "Unlock your potential with expert-led, customisable training programmes across all facets of digital technology."
  },
  {
    icon: <FiUsers className="text-3xl" />,
    title: "Innovation and Adaptability",
    description: "Stay at the cutting edge with our continuous innovation and adaptable solutions in a tech-driven market."
  },
  {
    icon: <FiGlobe className="text-3xl" />,
    title: "Global Reach with Local Expertise",
    description: "Leverage our global expertise and local insights to efficiently navigate your digital transformation journey."
  }
];

const services = [
  {
    title: "Digital Transformation",
    points: [
      "Strategic Digital Planning",
      "Technology Implementation",
      "Data Analytics Solutions",
      "Customer Experience Design"
    ]
  },
  {
    title: "Automation Solutions",
    points: [
      "Robotic Process Automation",
      "Intelligent Automation",
      "Workflow Optimization",
      "Business Process Automation"
    ]
  },
  {
    title: "Technical Training",
    points: [
      "Data Analytics & Science",
      "Machine Learning & AI",
      "Business Automation",
      "Hands-on Projects"
    ]
  },
  {
    title: "Research Support",
    points: [
      "AI & ML Research",
      "NLP Development",
      "Computer Vision",
      "Quantum Computing"
    ]
  },
  {
    title: "Career Development",
    points: [
      "Professional Mentorship",
      "Career Coaching",
      "Global Talent Solutions",
      "Interview Preparation"
    ]
  },
  {
    title: "Tools & Technologies",
    points: [
      "Python & SQL",
      "Power BI & Tableau",
      "Cloud Platforms",
      "Advanced Analytics Tools"
    ]
  }
];

const countries = [
  "United Kingdom",
  "United States",
  "Australia",
  "Canada",
  "Sweden",
  "Finland",
  "Portugal",
  "Croatia"
];

const tools = [
  "Python",
  "BigML",
  "Tableau",
  "Power Platforms",
  "PowerBI",
  "Microsoft Fabrics",
  "Alteryx",
  "SQL",
  "SaS Enterprise Miner",
  "SaS Enterprise Guide",
  "Microsoft Office",
  "SaS Vidya",
  "Looker Studio"
];