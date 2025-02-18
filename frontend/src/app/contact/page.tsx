// frontend/src/app/contact/page.tsx
import RootLayout from '@/components/layout/RootLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="john.doe@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
              <div className="text-gray-600 space-y-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500" />
                  <span>123 Main Street, Anytown, CA 12345</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" />
                  <a href="mailto:info@digievolve.com">info@digievolve.com</a>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 text-orange-500" />
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}