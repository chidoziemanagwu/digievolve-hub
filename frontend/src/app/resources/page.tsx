// app/resources/page.tsx
'use client'

import RootLayout from '@/components/layout/RootLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FiBook, FiDownload, FiFileText, FiTool, 
  FiVideo, FiBriefcase, FiGlobe, FiAward 
} from 'react-icons/fi'

const resourceCategories = [
  {
    title: "Learning Materials",
    icon: FiBook,
    items: [
      {
        title: "Technical Documentation",
        description: "Comprehensive guides for data analytics, science, engineering, and AI tools",
        links: ["Python", "BigML", "Tableau", "Power Platforms", "PowerBI", "Microsoft Fabrics"]
      },
      {
        title: "Tutorial Libraries",
        description: "Step-by-step tutorials for various tools and technologies",
        links: ["Alteryx", "SQL", "SAS Enterprise Miner", "SAS Enterprise Guide"]
      },
      {
        title: "Practice Datasets",
        description: "Real-world datasets for hands-on learning and project work",
        links: ["Sample Projects", "Case Studies", "Practice Problems"]
      }
    ]
  },
  {
    title: "Career Resources",
    icon: FiBriefcase,
    items: [
      {
        title: "Career Guides",
        description: "Comprehensive guides for career planning and development",
        links: ["Career Pathways", "Industry Insights", "Salary Guides"]
      },
      {
        title: "CV Templates",
        description: "ATS-optimized templates for different tech roles",
        links: ["Data Analyst CV", "Data Scientist CV", "Data Engineer CV"]
      },
      {
        title: "Interview Preparation",
        description: "Resources for technical and behavioral interviews",
        links: ["Technical Questions", "Mock Interviews", "Presentation Tips"]
      }
    ]
  },
  {
    title: "Research Materials",
    icon: FiFileText,
    items: [
      {
        title: "Research Papers",
        description: "Latest publications in AI, ML, and data science",
        links: ["AI Ethics", "Machine Learning", "Data Governance"]
      },
      {
        title: "Industry Reports",
        description: "Market analysis and technology trends",
        links: ["Market Trends", "Technology Updates", "Industry Standards"]
      }
    ]
  },
  {
    title: "Tools & Software",
    icon: FiTool,
    items: [
      {
        title: "Software Guides",
        description: "Installation and setup guides for essential tools",
        links: ["Python Setup", "PowerBI Installation", "Tableau Guide"]
      },
      {
        title: "Tool Comparisons",
        description: "Detailed comparisons of popular tools and platforms",
        links: ["Analytics Tools", "Visualization Tools", "Database Systems"]
      }
    ]
  },
  {
    title: "Global Opportunities",
    icon: FiGlobe,
    items: [
      {
        title: "Immigration Guides",
        description: "Information about global talent opportunities",
        links: ["UK", "USA", "Australia", "Canada", "Sweden", "Finland", "Portugal", "Croatia"]
      },
      {
        title: "Market Insights",
        description: "Job market analysis for different regions",
        links: ["Salary Trends", "Skills Demand", "Industry Growth"]
      }
    ]
  },
  {
    title: "Certification Paths",
    icon: FiAward,
    items: [
      {
        title: "Certification Guides",
        description: "Preparation materials for professional certifications",
        links: ["Data Analytics", "Data Science", "Machine Learning", "Business Automation"]
      },
      {
        title: "Study Materials",
        description: "Comprehensive study guides and practice tests",
        links: ["Practice Tests", "Study Plans", "Exam Tips"]
      }
    ]
  }
]

export default function ResourcesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Resources</h1>
            <p className="text-xl text-gray-300">
              Comprehensive educational materials, tools, and guides to support your learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-50 p-3 rounded-full">
                        <IconComponent className="w-8 h-8 text-[#f2aa40]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    {category.items.map((item, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-medium mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.links.map((link, linkIdx) => (
                            <Link
                              key={linkIdx}
                              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-sm text-[#f2aa40] hover:text-amber-600"
                            >
                              {link}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Access our comprehensive collection of resources and begin your journey towards mastering digital technologies.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/training-programs"
              className="inline-block bg-[#f2aa40] hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Explore Training Programs
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}