'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FiCommand, FiGrid, FiBook, FiBarChart, FiShuffle, FiUsers, FiFile, FiMail } from 'react-icons/fi';
import { FaRobot, FaGraduationCap } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isTrainingMenuOpen, setIsTrainingMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo with Image */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" // Replace with your logo path
              alt="DigiEvolve Hub Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center space-x-8 flex-grow">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
              >
                Services
                <FiChevronDown className="inline-block w-4 h-4" />
              </button>
              {isServicesMenuOpen && (
                <div className="absolute top-8 left-0 w-64 bg-white shadow-lg rounded-md py-1">
                  <ul className="space-y-1">
                    <li>
                      <Link 
                        href="/services/digital-transformation" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-blue-600"
                      >
                        <FiCommand className="inline-block w-5 h-5 mr-2" />
                        Digital Transformation Consulting
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services/automation" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-blue-600"
                      >
                        <FiGrid className="inline-block w-5 h-5 mr-2" />
                        Automation Solutions
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services/training" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-blue-600"
                      >
                        <FaGraduationCap className="inline-block w-5 h-5 mr-2" />
                        Technical Training
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services/research" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-blue-600"
                      >
                        <FiFile className="inline-block w-5 h-5 mr-2" />
                        Research & Development
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Training Programs Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsTrainingMenuOpen(!isTrainingMenuOpen)}
              >
                Training Programs
                <FiChevronDown className="inline-block w-4 h-4" />
              </button>
              {isTrainingMenuOpen && (
                <div className="absolute top-8 left-0 w-64 bg-white shadow-lg rounded-md py-1">
                  <ul className="space-y-1">
                    <li>
                      <Link 
                        href="/training-programs/data-analytics" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-blue-600"
                      >
                        <FiBarChart className="inline-block w-5 h-5 mr-2" />
                        Data Analytics
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/training-programs/data-science" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-blue-600"
                      >
                        <FiUsers className="inline-block w-5 h-5 mr-2" />
                        Data Science
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/training-programs/ai-machine-learning" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-blue-600"
                      >
                        <FaRobot className="inline-block w-5 h-5 mr-2" />
                        AI & Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/training-programs/business-automation" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-blue-600"
                      >
                        <FiShuffle className="inline-block w-5 h-5 mr-2" />
                        Business Automation
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/resources" className="text-gray-600 hover:text-blue-600">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact Us
            </Link>
          </div>

          {/* Login/Register Buttons */}
          <div className="flex space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:border-blue-500 rounded-md"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link
              href="/training-programs"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Training Programs
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
              Resources
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
              Contact Us
            </Link>
            <Link href="/login" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
              Login
            </Link>
            <Link href="/register" className="block px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}