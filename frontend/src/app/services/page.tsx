// frontend/src/app/services/page.tsx
import RootLayout from '@/components/layout/RootLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faRoute, faComments, faBriefcase, faCertificate } from '@fortawesome/free-solid-svg-icons';

export default function ServicesPage() {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">Our Services</h1>
          <div className="text-gray-600 leading-7">
            <p className="mb-4">
              At DigiEvolve Hub, we offer a range of services designed to help you succeed in your digital learning journey:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2 text-blue-500" />
                <strong>Expert-Led Courses:</strong> Learn from industry experts with hands-on, project-based courses.
              </li>
              <li>
                <FontAwesomeIcon icon={faRoute} className="mr-2 text-green-500" />
                <strong>Personalized Learning Paths:</strong> Tailor your learning experience to your specific goals and interests.
              </li>
              <li>
                <FontAwesomeIcon icon={faComments} className="mr-2 text-orange-500" />
                <strong>Community Support:</strong> Connect with fellow learners and instructors in our vibrant online community.
              </li>
              <li>
                <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-purple-500" />
                <strong>Career Guidance:</strong> Get advice and support to help you launch or advance your digital career.
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="mr-2 text-teal-500" />
                <strong>Certificate Programs:</strong> Earn certificates to showcase your skills and knowledge to employers.
              </li>
            </ul>
            <p>
              Whether you're just starting out or looking to take your skills to the next level, DigiEvolve Hub has the resources and support you need to succeed.
            </p>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}