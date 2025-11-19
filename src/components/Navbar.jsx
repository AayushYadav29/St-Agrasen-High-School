import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Fees', path: '/fees' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/school.jpg" 
          alt="School Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-teal-50/90"></div>
      </div>
      
      {/* Border */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-600 transition-all duration-300 z-5 ${
        isScrolled ? 'h-1.5' : 'h-1'
      }`}></div>
      
      <div className="relative z-10 w-full px-2 sm:px-4">
        <div className="flex justify-between items-center h-24 gap-2">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink min-w-0">
            <motion.img 
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logo.png" 
              alt="St. Agrasen High School Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 object-cover rounded-full shadow-xl border-2 sm:border-3 xl:border-4 border-teal-primary group-hover:border-teal-light transition-all duration-300 flex-shrink-0"
            />
            <div className="flex flex-col justify-center min-w-0">
              {/* Mobile & Tablet: Responsive text */}
              <span className="xl:hidden text-[0.5rem] sm:text-xs text-gray-800 font-bold uppercase tracking-wide truncate">
                Kamlabai Educational and Charitable Trust
              </span>
              <span className="xl:hidden text-xs sm:text-sm md:text-base font-black text-teal-600 leading-tight truncate">
                St. Agrasen High School & Jr. College
              </span>
              <span className="xl:hidden text-[0.5rem] sm:text-xs text-gray-700 font-medium truncate">
                Waghoba Nagar Kalwa East, Thane 400605
              </span>
              
              {/* Desktop: Full text (unchanged) */}
              <span className="hidden xl:block text-xs text-gray-800 font-bold uppercase tracking-wide whitespace-nowrap">
                Kamlabai Educational and Charitable Trust
              </span>
              <span className="hidden xl:block text-lg md:text-xl font-black text-teal-600 leading-tight whitespace-nowrap">
                St. Agrasen High School & Jr. College of Arts, Commerce & Science
              </span>
              <span className="hidden xl:block text-xs text-gray-700 font-medium whitespace-nowrap">
                Nirmala Devi Dighe Nagar, Waghoba Nagar Kalwa East Thane 400605, Maharashtra, India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-bold text-sm uppercase tracking-wide ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg shadow-teal-600/20 scale-105'
                    : 'text-gray-900 hover:bg-teal-100 hover:text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex-shrink-0 relative z-20">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-teal-100 border-2 border-teal-600/40 hover:bg-teal-200 hover:border-teal-600 relative z-20"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="relative z-20 xl:hidden bg-white border-t-4 border-teal-600 shadow-2xl"
        >
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl transition-all duration-300 font-bold text-center ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg shadow-teal-600/20'
                      : 'bg-teal-50 text-gray-900 hover:bg-teal-100 border-2 border-teal-300'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
