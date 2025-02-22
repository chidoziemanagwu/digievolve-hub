'use client'
// src/app/page.tsx
import RootLayout from "@/components/layout/RootLayout";
import Link from "next/link";
import { ImEnter } from "react-icons/im";
import {
  FiUser,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiCloud,
  FiDatabase,
  FiShield,
  FiTarget,
  FiBook,
  FiArrowRight,
  FiCheck,
  FiCommand,
  FiGlobe,
  FiGrid,
  FiSearch,
  FiBookOpen,
} from "react-icons/fi";
import { PiBuildingApartment, PiCertificateLight } from "react-icons/pi";
import { GiArchiveResearch } from "react-icons/gi";
import { FaGlobeAfrica, FaRegArrowAltCircleRight } from "react-icons/fa";
import { CiMonitor } from "react-icons/ci";
import { Suspense, useState, useEffect } from "react";
import {
  FcAcceptDatabase,
  FcDataProtection,
  FcDataSheet,
  FcEngineering,
  FcGraduationCap,
  FcSerialTasks,
} from "react-icons/fc";
import dynamic from 'next/dynamic';
import { Carousel } from 'flowbite-react';


const CountUp = dynamic(() => import('@/components/CountUp'), {
  ssr: false,
  loading: () => <span>0</span>
});

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Data Scientist at TechCorp",
    image: "/testimonials/testimonial1.jpg",
    quote: "The training program at DigiEvolve transformed my career. The hands-on projects and expert mentorship gave me the confidence to transition into data science successfully. Their comprehensive approach to learning made complex concepts accessible and practical.",
    icon: <FiCommand className="text-amber-500/20 text-4xl ml-auto" />
  },
  {
    name: "Michael Chen",
    position: "CTO at InnovateNow",
    image: "/testimonials/testimonial2.jpg",
    quote: "DigiEvolve's digital transformation consulting helped us modernize our entire operation. Their expertise in automation and AI implementation was invaluable. The team's understanding of our business needs made the transition seamless.",
    icon: <FiDatabase className="text-amber-500/20 text-4xl ml-auto" />
  },
  {
    name: "Emma Thompson",
    position: "HR Director at GlobalTech",
    image: "/testimonials/testimonial3.jpg",
    quote: "The career development services provided by DigiEvolve were exceptional. Their guidance helped our team acquire crucial digital skills and advance their careers. The personalized approach to professional development made all the difference.",
    icon: <FiGrid className="text-amber-500/20 text-4xl ml-auto" />
  },
  {
    name: "David Kumar",
    position: "Research Lead at DataCorp",
    image: "/testimonials/testimonial4.jpg",
    quote: "The research support and mentorship from DigiEvolve were instrumental in our AI project success. Their expertise in cutting-edge technologies and practical approach to implementation helped us achieve our goals faster.",
    icon: <FiSearch className="text-amber-500/20 text-4xl ml-auto" />
  },
  {
    name: "Sofia Rodriguez",
    position: "Global Talent Manager",
    image: "/testimonials/testimonial5.jpg",
    quote: "DigiEvolve's global talent solutions made our international expansion seamless. Their understanding of different markets and cultures was crucial to our success. The comprehensive support in talent development and placement was outstanding.",
    icon: <FiGlobe className="text-amber-500/20 text-4xl ml-auto" />
  }
];

export default function Home() {
  const [activeService, setActiveService] = useState(1);
  return (
    <RootLayout>
      <div>
        <div className="container px-8 mx-auto">
          <section className="text-center py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 px-2 text-center lg:py-16">
              {" "}
              {/* Changed grid-cols-2 to grid-cols-1 with md:grid-cols-2 */}
              {/* Left section with welcome text */}
              <div className="flex flex-col justify-center h-full order-1">
                {" "}
                {/* Added order-1 */}
                <div className="text-left">
                  <p className="border px-3 py-2 mb-4 text-xs w-fit rounded-full">
                    Employee Training and Consultant
                  </p>
                  <h1 className="text-4xl md:text-5xl mb-4 font-normal">
                    Welcome to DigiEvolve Hub. Empowering Excelence through
                    Consulting and Training.
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 font-light mt-6">
                    Our expert training and consulting solutions pave the way
                    for your oganizations success by driving continous
                    improvement, innovation and exceptional performance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
                    <Link
                      href="/courses"
                      className="bg-[#f2aa40] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2"
                    >
                      Start Your Transformation <ImEnter />
                    </Link>
                    <Link
                      href="/services"
                      className="border border-[#f2aa40] text-[#f2aa40] px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
              {/* Right section with images */}
              <div className="grid grid-cols-3 gap-4 h-[400px] md:h-[500px] lg:h-[600px] order-2">
                {" "}
                {/* Added order-2 and responsive heights */}
                <div className="col-span-2 rounded-lg overflow-hidden">
                  <img
                    src="/images/consulting-meeting.jpg"
                    alt="Digital Transformation Consulting"
                    className="w-full h-full object-cover"
                    loading="eager" // Critical above-the-fold image
                    decoding="async"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/ai-visualization.jpg"
                    alt="AI and Machine Learning"
                    className="w-full h-full object-cover"
                    loading="eager" // Critical above-the-fold image
                    decoding="async"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/digital-success.jpg"
                    alt="Global Training Solutions"
                    className="w-full h-full object-cover"
                    loading="eager" // Critical above-the-fold image
                    decoding="async"
                  />
                </div>
                <div className="col-span-2 rounded-lg overflow-hidden">
                  <img
                    src="/images/virtual-training.jpg"
                    alt="Business Innovation"
                    className="w-full h-full object-cover"
                    loading="eager" // Critical above-the-fold image
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <Suspense
              fallback={<div className="animate-pulse h-20 bg-gray-100" />}
            >
              <ul className="flex flex-col md:flex-row justify-between text-base md:text-lg font-medium text-white bg-[#f2aa40] border border-[#f2aa40] my-4 w-full">
                <li className="flex items-center justify-center flex-1 px-6 py-10 border-b md:border-b-0 md:border-r border-[#ffffff40]">
                  <FiUser className="mr-2 text-2xl md:text-3xl" />
                  Career Professionals
                </li>
                <li className="flex items-center justify-center flex-1 px-6 py-10 border-b md:border-b-0 md:border-r border-[#ffffff40]">
                  <FiTrendingUp className="mr-3 text-2xl md:text-3xl" />
                  Business Solutions
                </li>
                <li className="flex items-center justify-center flex-1 px-6 py-10 border-b md:border-b-0 md:border-r border-[#ffffff40]">
                  <PiBuildingApartment className="mr-3 text-2xl md:text-3xl" />
                  Enterprise
                </li>
                <li className="flex items-center justify-center flex-1 px-6 py-10 border-b md:border-b-0 md:border-r border-[#ffffff40]">
                  <GiArchiveResearch className="mr-3 text-2xl md:text-3xl" />
                  Research Hub
                </li>
                <li className="flex items-center justify-center flex-1 px-6 py-10">
                  <FaGlobeAfrica className="mr-3 text-2xl md:text-3xl" />
                  Global Talent
                </li>
              </ul>
            </Suspense>

            <Suspense
              fallback={<div className="animate-pulse h-20 bg-gray-100" />}
            >
              <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                  {/* Main heading and subtext */}
                  <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 container">
                      Comprehensive Training and Consulting Solutions Tailored
                      to Your Needs
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-light">
                      With a focus on individual attention, we are committed to
                      delivering customized strategies, empowering your
                      workforce and guiding your business to sustainable growth
                      and excellence
                    </p>
                  </div>

                  {/* Grid section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* First card */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-6">
                        <FiUsers className="text-[#f2aa40] text-4xl" />
                        <h2 className="text-xl md:text-2xl font-light text-left">
                          Our Approach to Leadership Development
                        </h2>
                      </div>
                      <div className="flex flex-col gap-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiTarget className="text-[#f2aa40]" />
                          <span className="text-sm">Strategic Planning</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiTrendingUp className="text-[#f2aa40]" />
                          <span className="text-sm">Growth Focus</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiAward className="text-[#f2aa40]" />
                          <span className="text-sm">Excellence Driven</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-8 min-h-[80px] font-light text-left">
                        We foster transformative leadership through personalized
                        coaching, strategic mentorship, and hands-on experience.
                        Our comprehensive approach ensures leaders are equipped
                        to drive innovation.
                      </p>
                      <Link
                        href=""
                        className="inline-flex items-center gap-2 border border-[#f2aa40] text-[#f2aa40] px-5 py-2 rounded-lg transition-all hover:bg-[#f2aa40] hover:text-white group text-sm"
                      >
                        See More
                        <FaRegArrowAltCircleRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Second card */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-6">
                        <CiMonitor className="text-[#f2aa40] text-4xl" />
                        <h2 className="text-xl md:text-2xl font-light text-left">
                          Digital Transformation Excellence
                        </h2>
                      </div>
                      <div className="flex flex-col gap-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiCloud className="text-[#f2aa40]" />
                          <span className="text-sm">Cloud Solutions</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiDatabase className="text-[#f2aa40]" />
                          <span className="text-sm">Data Analytics</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiShield className="text-[#f2aa40]" />
                          <span className="text-sm">Cybersecurity</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-8 min-h-[80px] font-light text-left">
                        Navigate the digital landscape with confidence through
                        our expert-led transformation services. We combine
                        cutting-edge technology with strategic insights for
                        evolution.
                      </p>
                      <Link
                        href=""
                        className="inline-flex items-center gap-2 border border-[#f2aa40] text-[#f2aa40] px-5 py-2 rounded-lg transition-all hover:bg-[#f2aa40] hover:text-white group text-sm"
                      >
                        Learn More
                        <FaRegArrowAltCircleRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Third card */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-6">
                        <PiCertificateLight className="text-[#f2aa40] text-4xl" />
                        <h2 className="text-xl md:text-2xl font-light text-left">
                          Technical Training & Certification
                        </h2>
                      </div>
                      <div className="flex flex-col gap-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiBook className="text-[#f2aa40]" />
                          <span className="text-sm">Customized Programs</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiAward className="text-[#f2aa40]" />
                          <span className="text-sm">
                            Industry Certifications
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiUsers className="text-[#f2aa40]" />
                          <span className="text-sm">Expert Mentorship</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-8 min-h-[80px] font-light text-left">
                        Advance your career with our comprehensive technical
                        training programs. Get hands-on experience and
                        industry-recognized certifications with expert guidance.
                      </p>
                      <Link
                        href=""
                        className="inline-flex items-center gap-2 border border-[#f2aa40] text-[#f2aa40] px-5 py-2 rounded-lg transition-all hover:bg-[#f2aa40] hover:text-white group text-sm"
                      >
                        Explore Programs
                        <FaRegArrowAltCircleRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </Suspense>
          </section>
        </div>

        <Suspense fallback={<div className="animate-pulse h-20" />}>
          <section className="py-16 px-4 bg-amber-400/80">
            {" "}
            {/* Lighter background */}
            <div className="max-w-7xl mx-auto text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-normal mb-4">
                Training Programs
              </h3>
              <p className=" text-lg max-w-2xl mx-auto">
                Transform your career with our industry-leading programs,
                combining hands-on experience with expert guidance.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Data Analytics Card */}
              <div className="group [perspective:1000px]">
                <div className="relative h-[180px] w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 [backface-visibility:hidden]">
                    <FcDataSheet className="text-4xl mb-3" />
                    <h4 className="text-base font-semibold  ">
                      Data Analytics
                    </h4>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                    <ul className="text-xs text-amber-900 space-y-2.5 w-full px-2">
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Data Visualization</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Statistical Analysis</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Power BI & Tableau</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Real Projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Science Card */}
              <div className="group [perspective:1000px]">
                <div className="relative h-[180px] w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 [backface-visibility:hidden]">
                    <FcAcceptDatabase className="text-4xl mb-3" />
                    <h4 className="text-base font-semibold  ">Data Science</h4>
                  </div>
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                    <ul className="text-xs text-amber-900 space-y-2.5 w-full px-2">
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Python & R</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Machine Learning</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Deep Learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>AI Applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Engineering Card */}
              <div className="group [perspective:1000px]">
                <div className="relative h-[180px] w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 [backface-visibility:hidden]">
                    <FcEngineering className="text-4xl mb-3" />
                    <h4 className="text-base font-semibold  ">
                      Data Engineering
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                    <ul className="text-xs text-amber-900 space-y-2.5 w-full px-2">
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Big Data Tech</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Cloud Databases</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>ETL Processes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Data Pipeline</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Governance Card */}
              <div className="group [perspective:1000px]">
                <div className="relative h-[180px] w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 [backface-visibility:hidden]">
                    <FcDataProtection className="text-4xl mb-3" />
                    <h4 className="text-base font-semibold  ">
                      Data Governance
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                    <ul className="text-xs text-amber-900 space-y-2.5 w-full px-2">
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>GDPR & HIPAA</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Data Quality</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Security Best Practices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Risk Assessment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Machine Learning Card */}
              <div className="group [perspective:1000px]">
                <div className="relative h-[180px] w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 [backface-visibility:hidden]">
                    <FcGraduationCap className="text-4xl mb-3" />
                    <h4 className="text-base font-semibold  ">
                      Machine Learning
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                    <ul className="text-xs text-amber-900 space-y-2.5 w-full px-2">
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Deep Learning</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Neural Networks</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>NLP & Computer Vision</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Model Deployment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Business Automation Card */}
              <div className="group [perspective:1000px]">
                <div className="relative h-[180px] w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 [backface-visibility:hidden]">
                    <FcSerialTasks className="text-4xl mb-3" />
                    <h4 className="text-base font-semibold  ">
                      Business Automation
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                    <ul className="text-xs text-amber-900 space-y-2.5 w-full px-2">
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Process Mapping</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>RPA Implementation</span>
                      </li>
                      <li className="flex items-center gap-2 border-b border-amber-100 pb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>Workflow Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                        <span>System Integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/register" // Update this path to your registration or course listing page
                className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-normal rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Begin Your Learning Journey</span>
                <FaRegArrowAltCircleRight className="text-lg" />
              </Link>
            </div>
          </section>
        </Suspense>


{/* Add this after the Training Programs section */}
<Suspense fallback={<div className="animate-pulse h-20" />}>
  <section className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-normal mb-4">
          Our Services
        </h3>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Comprehensive solutions tailored to drive your digital transformation journey
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Service Selection */}
        <div className="lg:w-1/3">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setActiveService(1)}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                activeService === 1
                  ? "bg-white shadow-lg transform translate-x-2"
                  : "hover:bg-white/50"
              }`}
            >
              <FiCommand className="text-3xl text-amber-500" />
              <span className="text-left">
                <h4 className="font-medium">Digital Transformation</h4>
                {activeService === 1 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Guide businesses through digital technology integration
                  </p>
                )}
              </span>
              {activeService === 1 && (
                <FiArrowRight className="ml-auto text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setActiveService(2)}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                activeService === 2
                  ? "bg-white shadow-lg transform translate-x-2"
                  : "hover:bg-white/50"
              }`}
            >
              <FiGrid className="text-3xl text-amber-500" />
              <span className="text-left">
                <h4 className="font-medium">Automation Solutions</h4>
                {activeService === 2 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Streamline operations with intelligent automation
                  </p>
                )}
              </span>
              {activeService === 2 && (
                <FiArrowRight className="ml-auto text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setActiveService(3)}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                activeService === 3
                  ? "bg-white shadow-lg transform translate-x-2"
                  : "hover:bg-white/50"
              }`}
            >
              <FiSearch className="text-3xl text-amber-500" />
              <span className="text-left">
                <h4 className="font-medium">Research & Development</h4>
                {activeService === 3 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Innovation through cutting-edge research
                  </p>
                )}
              </span>
              {activeService === 3 && (
                <FiArrowRight className="ml-auto text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setActiveService(4)}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                activeService === 4
                  ? "bg-white shadow-lg transform translate-x-2"
                  : "hover:bg-white/50"
              }`}
            >
              <FiTarget className="text-3xl text-amber-500" />
              <span className="text-left">
                <h4 className="font-medium">Career Development</h4>
                {activeService === 4 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Personalized career growth support
                  </p>
                )}
              </span>
              {activeService === 4 && (
                <FiArrowRight className="ml-auto text-amber-500" />
              )}
            </button>

            <button
              onClick={() => setActiveService(5)}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                activeService === 5
                  ? "bg-white shadow-lg transform translate-x-2"
                  : "hover:bg-white/50"
              }`}
            >
              <FiGlobe className="text-3xl text-amber-500" />
              <span className="text-left">
                <h4 className="font-medium">Global Talent Solutions</h4>
                {activeService === 5 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Navigate international opportunities
                  </p>
                )}
              </span>
              {activeService === 5 && (
                <FiArrowRight className="ml-auto text-amber-500" />
              )}
            </button>
          </div>
        </div>

        {/* Service Content */}
        <div className="lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Digital Transformation Content */}
          {activeService === 1 && (
            <div className="h-full">
              <div className="h-64 relative">
                <img
                  src="/images/digital-transform.jpg"
                  alt="Digital Transformation"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager" // Critical above-the-fold image
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-2xl font-semibold p-6">
                    Digital Transformation
                  </h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  We guide businesses through the process of integrating digital technology into all areas of operation, fundamentally changing how they operate and deliver value to customers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Strategic Digital Planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Technology Implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Data Analytics & BI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Cybersecurity Solutions</span>
                  </div>
                </div>
                <Link
                  href="/services/digital-transformation"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Learn More
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* Automation Solutions Content */}
          {activeService === 2 && (
            <div className="h-full">
              <div className="h-64 relative">
                <img
                  src="/images/automation.jpg"
                  alt="Automation Solutions"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager" // Critical above-the-fold image
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-2xl font-semibold p-6">
                    Automation Solutions
                  </h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Design and implement automation systems that enhance efficiency and productivity, using cutting-edge technologies to streamline workflows and reduce operational costs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">RPA Implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Workflow Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Process Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">AI Integration</span>
                  </div>
                </div>
                <Link
                  href="/services/automation"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Learn More
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* Research & Development Content */}
          {activeService === 3 && (
            <div className="h-full">
              <div className="h-64 relative">
                <img
                  src="/images/research.jpg"
                  alt="Research & Development"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager" // Critical above-the-fold image
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-2xl font-semibold p-6">
                    Research & Development
                  </h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Support innovation through cutting-edge research in AI, machine learning, and digital strategies, helping clients stay at the forefront of technological advancement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">AI & ML Research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">NLP Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Ethics & Fairness</span>
                  </div>
                </div>
                <Link
                  href="/services/research"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Learn More
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* Career Development Content */}
          {activeService === 4 && (
            <div className="h-full">
              <div className="h-64 relative">
                <img
                  src="/images/career.jpg"
                  alt="Career Development"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager" // Critical above-the-fold image
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-2xl font-semibold p-6">
                    Career Development
                  </h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Support career growth with personalized coaching, job placement services, and ongoing professional development to ensure continuous learning and adaptation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Career Coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">CV Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Interview Preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">LinkedIn Profile Building</span>
                  </div>
                </div>
                <Link
                  href="/services/career"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Learn More
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* Global Talent Solutions Content */}
          {activeService === 5 && (
            <div className="h-full">
              <div className="h-64 relative">
                <img
                  src="/images/global.jpg"
                  alt="Global Talent Solutions"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager" // Critical above-the-fold image
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h4 className="text-white text-2xl font-semibold p-6">
                    Global Talent Solutions
                  </h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Navigate international opportunities with our comprehensive global talent services, including immigration strategy and relocation support.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Immigration Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Global Job Placement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Cultural Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-amber-500" />
                    <span className="text-gray-700">Relocation Assistance</span>
                  </div>
                </div>
                <Link
                  href="/services/global-talent"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Learn More
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
</Suspense>
        

<Suspense fallback={<div className="animate-pulse h-20" />}>
  <section className="py-16 bg-gray-50/80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-normal mb-4">
          Our Global Impact
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transforming businesses and careers across the globe through digital innovation and excellence
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Countries Served */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-center mb-4">
            <FaGlobeAfrica className="text-4xl text-amber-500" />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            <CountUp value={8} />+
          </div>
          <p className="text-gray-600 text-center">Countries Served</p>
        </div>

        {/* Training Programs */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-center mb-4">
            <FiBook className="text-4xl text-amber-500" />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            <CountUp value={7} />+
          </div>
          <p className="text-gray-600 text-center">Training Programs</p>
        </div>


        {/* Industry Partners */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-center mb-4">
            <PiBuildingApartment className="text-4xl text-amber-500" />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            <CountUp value={50} />+
          </div>
          <p className="text-gray-600 text-center">Industry Partners</p>
        </div>

        {/* Expert Instructors */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-center mb-4">
            <FiUsers className="text-4xl text-amber-500" />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            <CountUp value={25} />+
          </div>
          <p className="text-gray-600 text-center">Expert Instructors</p>
        </div>
      </div>
    </div>
  </section>
</Suspense>

<Suspense fallback={<div className="animate-pulse h-96 bg-gray-100" />}>
  <section className="py-16 bg-gradient-to-b from-amber-400 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-normal mb-4">
          What Our Clients Say
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Success stories from professionals and businesses we've helped transform
        </p>
      </div>

      <div className="h-[32rem] sm:h-[28rem]">
        <Carousel 
          slideInterval={5000}
          indicators={false}
          leftControl={<div className="hidden" />}
          rightControl={<div className="hidden" />}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex h-full items-center justify-center p-4">
              <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-amber-600">{testimonial.position}</p>
                  </div>
                  {testimonial.icon}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </section>
</Suspense>


<Suspense fallback={<div className="animate-pulse h-20" />}>
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h3 className="text-3xl md:text-4xl font-normal mb-4">
        Ready to Transform Your Future?
      </h3>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Take the next step in your digital evolution journey with our expert-led programs
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Training Programs Card */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-amber-100 rounded-lg">
            <FiBookOpen className="text-amber-600 text-3xl" />
          </div>
          <h4 className="text-xl font-semibold ml-4">Training Programs</h4>
        </div>
        <p className="text-gray-600 mb-6">
          Transform your career with our comprehensive training programs in Data Analytics, Data Science, Machine Learning, and more. Get hands-on experience and industry-recognized certification.
        </p>
        <div className="space-y-3">
          <div className="flex items-center">
            <FiCheck className="text-amber-600 mr-2" />
            <span>Expert-led instruction</span>
          </div>
          <div className="flex items-center">
            <FiCheck className="text-amber-600 mr-2" />
            <span>Hands-on projects</span>
          </div>
          <div className="flex items-center">
            <FiCheck className="text-amber-600 mr-2" />
            <span>Career support</span>
          </div>
        </div>
        <button className="mt-8 w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
          <span>Explore Programs</span>
          <FiArrowRight className="ml-2" />
        </button>
      </div>

      {/* Business Solutions Card */}
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-amber-100 rounded-lg">
            <FiGrid className="text-amber-600 text-3xl" />
          </div>
          <h4 className="text-xl font-semibold ml-4">Business Solutions</h4>
        </div>
        <p className="text-gray-600 mb-6">
          Accelerate your business transformation with our digital consulting, automation solutions, and R&D support. Stay ahead in the rapidly evolving digital landscape.
        </p>
        <div className="space-y-3">
          <div className="flex items-center">
            <FiCheck className="text-amber-600 mr-2" />
            <span>Digital transformation</span>
          </div>
          <div className="flex items-center">
            <FiCheck className="text-amber-600 mr-2" />
            <span>Process automation</span>
          </div>
          <div className="flex items-center">
            <FiCheck className="text-amber-600 mr-2" />
            <span>Innovation support</span>
          </div>
        </div>
        <button className="mt-8 w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
          <span>Get Started</span>
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  </div>
</section>
</Suspense>

      </div>
    </RootLayout>
  );
}

