'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiSearch, FiShield, FiTarget, FiTool } from 'react-icons/fi';
import { FiCommand, FiGrid, FiBook, FiBarChart, FiShuffle, FiUsers, FiFile, FiMail } from 'react-icons/fi';
import { FaRobot, FaGraduationCap } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isTrainingMenuOpen, setIsTrainingMenuOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close services dropdown if click is outside
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesMenuOpen(false);
      }
      
      // Close training dropdown if click is outside
      if (trainingRef.current && !trainingRef.current.contains(event.target as Node)) {
        setIsTrainingMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo with Image */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png"
              alt="DigiEvolve Hub Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center space-x-8 flex-grow">
            <Link href="/about" className="text-gray-600 hover:text-[#f2aa40]">
              About Us
            </Link>

            {/* Training Programs Dropdown */}
            <div className="relative" ref={trainingRef}>
              <button
                className="flex items-center space-x-2 text-gray-600 hover:text-[#f2aa40]"
                onClick={() => {
                  setIsTrainingMenuOpen(!isTrainingMenuOpen);
                  setIsServicesMenuOpen(false);
                }}
              >
                <span>Training Programs</span>
                <FiChevronDown className="inline-block w-4 h-4" />
              </button>
              {isTrainingMenuOpen && (
                <div className="absolute top-8 left-0 w-72 bg-white shadow-lg rounded-md py-1">
                  <ul className="space-y-1">
                    <li>
                      <Link 
                        href="/training-programs/data-analytics" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiBarChart className="inline-block w-5 h-5 mr-2" />
                        Data Analytics & Visualization
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/training-programs/data-science" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiUsers className="inline-block w-5 h-5 mr-2" />
                        Data Science & Engineering
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/training-programs/ai-machine-learning" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FaRobot className="inline-block w-5 h-5 mr-2" />
                        AI & Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/training-programs/business-automation" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiShuffle className="inline-block w-5 h-5 mr-2" />
                        Business Automation & RPA
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/training-programs/data-governance" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiShield className="inline-block w-5 h-5 mr-2" />
                        Data Governance & Security
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/training-programs/tools-certification" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiTool className="inline-block w-5 h-5 mr-2" />
                        Tools & Certification
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className="flex items-center space-x-2 text-gray-600 hover:text-[#f2aa40]"
                onClick={() => {
                  setIsServicesMenuOpen(!isServicesMenuOpen);
                  setIsTrainingMenuOpen(false);
                }}
              >
                <span>Services</span>
                <FiChevronDown className="inline-block w-4 h-4" />
              </button>
              {isServicesMenuOpen && (
                <div className="absolute top-8 left-0 w-72 bg-white shadow-lg rounded-md py-1">
                  <ul className="space-y-1">
                    <li>
                      <Link 
                        href="/services/digital-transformation" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiCommand className="inline-block w-5 h-5 mr-2" />
                        Digital Transformation
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services/automation-solutions" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiGrid className="inline-block w-5 h-5 mr-2" />
                        Automation Solutions
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services/research-development" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiSearch className="inline-block w-5 h-5 mr-2" />
                        Research & Development
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services/career-development" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiTarget className="inline-block w-5 h-5 mr-2" />
                        Career Development
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services/global-talent" 
                        className="flex items-center space-x-2 block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
                      >
                        <FiGlobe className="inline-block w-5 h-5 mr-2" />
                        Global Talent Solutions
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/resources" className="text-gray-600 hover:text-[#f2aa40]">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#f2aa40]">
              Contact Us
            </Link>
          </div>

          {/* Login/Register Buttons */}
          <div className="flex space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-600 hover:text-[#f2aa40] hover:border-[#f2aa40] rounded-md"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-[#f2aa40] text-white rounded-md hover:bg-[#d99936]"
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
            <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-[#f2aa40]">
              About Us
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-600 hover:text-[#f2aa40]">
              Services
            </Link>
            <Link
              href="/training-programs"
              className="block px-3 py-2 text-gray-600 hover:text-[#f2aa40]"
            >
              Training Programs
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-gray-600 hover:text-[#f2aa40]">
              Resources
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-[#f2aa40]">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}