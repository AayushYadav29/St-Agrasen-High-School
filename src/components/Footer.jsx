import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import XIcon from './XIcon'
import GlassCard from './GlassCard'

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <GlassCard className="mx-4 mb-4 p-8 md:p-12" hover={false}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                St. Agrasen High School
              </h3>
              <p className="text-gray-900 text-sm leading-relaxed font-medium">
                Under Kamlabai Education Trust (KECT). Empowering minds, shaping futures with quality education in Arts, Commerce & Science.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Admissions', 'Fees', 'Facilities', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-gray-800 hover:text-teal-600 transition-colors duration-300 text-sm font-medium inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">Nirmala Devi Dighe Nagar, Waghoba Nagar Kalwa East Thane 400605</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">+91 (022) 2768-XXXX</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">info@stagrasen.edu.in</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h4>
              <div className="flex space-x-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/p/St-Agrasen-High-School-Jr-College-Kalwa-100067052979705/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group relative p-3 rounded-xl bg-white border-2 border-teal-200 text-gray-700 hover:border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-600/30"
                >
                  <Facebook className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                {/* X (Twitter) */}
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="group relative p-3 rounded-xl bg-white border-2 border-teal-200 text-gray-700 hover:border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-600/30"
                >
                  <XIcon className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="group relative p-3 rounded-xl bg-white border-2 border-teal-200 text-gray-700 hover:border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-600/30"
                >
                  <Instagram className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="group relative p-3 rounded-xl bg-white border-2 border-teal-200 text-gray-700 hover:border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-600/30"
                >
                  <Linkedin className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-teal-300 text-center">
            <p className="text-sm text-gray-900 font-medium">
              © 2024 <span className="text-teal-600 font-bold">St. Agrasen High School & Jr. College</span>. Managed by Kamlabai Education Trust (KECT). All rights reserved.
            </p>
          </div>
        </div>
      </GlassCard>
    </footer>
  )
}

export default Footer
