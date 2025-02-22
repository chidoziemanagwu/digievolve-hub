// src/components/layout/Footer.tsx
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white mb-4">DigiEvolve</h3>
                        <p className="text-sm">
                            Empowering digital transformation through comprehensive training, 
                            consulting, and career development services.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <FiLinkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <FiTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <FiFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <FiInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Digital Transformation</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Automation Solutions</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Technical Training</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">R&D Support</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Career Development</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Training Programs</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Success Stories</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Careers</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FiMapPin className="mr-2 text-amber-500" />
                                <span className="text-gray-400">London, United Kingdom</span>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="mr-2 text-amber-500" />
                                <a href="tel:+44123456789" className="text-gray-400 hover:text-amber-500 transition-colors">
                                    +44 123 456 789
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="mr-2 text-amber-500" />
                                <a href="mailto:info@digievolve.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                                    info@digievolve.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

{/* Bottom Bar */}
<div className="mt-12 pt-8 border-t border-gray-800">
    <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} DigiEvolve™. All Rights Reserved.
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Cookie Policy
            </a>
        </div>
    </div>
</div>
            </div>
        </footer>
    );
}