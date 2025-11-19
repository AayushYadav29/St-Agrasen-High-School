import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
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
                      className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium"
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
                {[
                  { Icon: Facebook, color: 'hover:bg-blue-600', link: 'https://www.facebook.com/p/St-Agrasen-High-School-Jr-College-Kalwa-100067052979705/', label: 'Facebook' },
                  { Icon: Twitter, color: 'hover:bg-sky-500', link: '#', label: 'Twitter' },
                  { Icon: Instagram, color: 'hover:bg-pink-600', link: '#', label: 'Instagram' },
                  { Icon: Linkedin, color: 'hover:bg-blue-700', link: '#', label: 'LinkedIn' },
                ].map(({ Icon, color, link, label }, index) => (
                  <a
                    key={index}
                    href={link}
                    target={link !== '#' ? '_blank' : undefined}
                    rel={link !== '#' ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className={`p-2 rounded-xl bg-teal-100 text-gray-700 ${color} hover:text-white transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
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
