// frontend/src/app/about/page.tsx
import RootLayout from '@/components/layout/RootLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">About DigiEvolve Hub</h1>
          <div className="text-gray-600 leading-7">
            <p className="mb-4">
              <FontAwesomeIcon icon={faBook} className="mr-2 text-blue-500" />
              DigiEvolve Hub is a pioneering solution in digital transformation, data analytics, and AI, offering integrated technical training and consulting services.
            </p>
            <p className="mb-4">
              <FontAwesomeIcon icon={faUsers} className="mr-2 text-green-500" />
              Our mission is to empower individuals and businesses with the skills and knowledge needed to thrive in the digital age.
            </p>
            <p className="mb-4">
              <FontAwesomeIcon icon={faHandshake} className="mr-2 text-orange-500" />
              We provide hands-on experience, research consultation, and career development support through mentorship and tailored guidance.
            </p>
            <p className="mb-4">
              Our comprehensive suite of services includes digital transformation consulting, automation solutions, technical training, and research support.
            </p>
            <p>
              Join us on our journey to transform digital education and empower individuals and businesses worldwide.
            </p>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}