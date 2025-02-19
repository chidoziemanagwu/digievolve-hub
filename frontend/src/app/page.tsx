// src/app/page.tsx
import RootLayout from "@/components/layout/RootLayout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartBar,
  faBullhorn,
  faCloud,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <div className='grid grid-cols-2 py-8 mx-auto text-center lg:py-16'>
          <div>
              <h1 className="text-5xl font-bold mb-4 text-blue-800">
                Welcome to DigiEvolve Hub
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your digital skills with our expert-led courses and
                consulting services.
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <Link
                  href="/courses"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/services"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-red-500">04</div>
              <div className="bg-blue-500">05</div>
              <div className="bg-green-500">06</div>
              <div className="col-span-2 bg-purple-500">07</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <FontAwesomeIcon
                icon={faLaptopCode}
                size="2x"
                className="text-blue-500 mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Web Development
              </h2>
              <p className="text-gray-600">
                Master the art of building websites and web applications with
                our comprehensive web development courses.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <FontAwesomeIcon
                icon={faChartBar}
                size="2x"
                className="text-green-500 mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Data Science
              </h2>
              <p className="text-gray-600">
                Unlock the power of data with our data science courses, covering
                everything from statistics to machine learning.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <FontAwesomeIcon
                icon={faBullhorn}
                size="2x"
                className="text-orange-500 mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Digital Marketing
              </h2>
              <p className="text-gray-600">
                Reach your target audience and grow your business with our
                digital marketing courses.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <FontAwesomeIcon
                icon={faCloud}
                size="2x"
                className="text-purple-500 mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Cloud Solutions
              </h2>
              <p className="text-gray-600">
                Migrate and optimize your business with our cloud solutions and
                expert guidance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <FontAwesomeIcon
                icon={faRobot}
                size="2x"
                className="text-teal-500 mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                AI & Automation
              </h2>
              <p className="text-gray-600">
                Implement AI and automation to streamline your workflows and
                reduce operational costs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <FontAwesomeIcon
                icon={faChartBar}
                size="2x"
                className="text-pink-500 mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Business Analytics
              </h2>
              <p className="text-gray-600">
                Make data-driven decisions with our advanced business analytics
                solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
