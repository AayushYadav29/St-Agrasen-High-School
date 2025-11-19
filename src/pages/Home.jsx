import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, Award, BookOpen, ArrowRight } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import AnnouncementTicker from '../components/AnnouncementTicker'
import TestimonialCarousel from '../components/TestimonialCarousel'
import LeadershipSection from '../components/LeadershipSection'

const Home = () => {
  const quickLinks = [
    { title: 'Admissions', path: '/admissions', icon: GraduationCap, color: 'from-teal-600 to-teal-400' },
    { title: 'Fees Structure', path: '/fees', icon: BookOpen, color: 'from-teal-700 to-teal-500' },
    { title: 'Facilities', path: '/facilities', icon: Award, color: 'from-teal-600 to-teal-400' },
    { title: 'Contact Us', path: '/contact', icon: Users, color: 'from-teal-700 to-teal-500' },
  ]

  const features = [
    { icon: GraduationCap, title: 'Expert Faculty', description: 'Highly qualified and experienced teachers' },
    { icon: Award, title: 'Excellence', description: '100% pass rate with top grades' },
    { icon: Users, title: 'Small Classes', description: 'Personalized attention for every student' },
    { icon: BookOpen, title: 'Modern Curriculum', description: 'Updated syllabus with practical learning' },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src="/school.jpg" 
              alt="School Campus" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-teal-50/30 to-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent"></div>
        </div>
        
        {/* Animated Accent Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.25, 0.15, 0.25],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-primary">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/school2.jpg" 
                  alt="St. Agrasen High School Campus" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/75 to-white/70"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-16">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg text-gray-800 font-bold mb-4 uppercase tracking-wide"
                >
                  Kamlabai Educational and Charitable Trust | Agrawal Group of Institute (AGI)
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 bg-clip-text text-transparent leading-tight"
                >
                  St. Agrasen High School & Jr. College of Arts, Commerce & Science
                </motion.h1>
                <div className="teal-accent"></div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base md:text-lg text-gray-900 mb-10 font-semibold"
                >
                  Nirmala Devi Dighe Nagar, Waghoba Nagar Kalwa East Thane 400605, Maharashtra
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Link to="/admissions">
                    <button className="btn-teal flex items-center space-x-2 w-full sm:w-auto justify-center">
                      <span>Apply Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link to="/facilities">
                    <button className="btn-teal-outline w-full sm:w-auto">
                      Explore Campus
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Announcement Ticker */}
      <AnnouncementTicker />

      {/* Quick Navigation Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-teal-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header">Quick Access</h2>
            <p className="text-lg text-gray-900 font-semibold">
              Everything you need, just a click away
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <Link to={link.path}>
                  <GlassCard className="p-8 text-center group cursor-pointer h-full">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-teal-600/25 transition-all duration-300`}
                    >
                      <link.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-black text-gray-900 mb-3">
                      {link.title}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-bold">Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header">Why Choose Us</h2>
            <div className="teal-accent"></div>
            <p className="text-lg text-gray-900 font-semibold max-w-2xl mx-auto">
              Excellence in education with a commitment to holistic development
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <GlassCard className="p-8 text-center h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center shadow-xl group-hover:shadow-teal-600/25"
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="relative text-xl font-black text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="relative text-gray-800 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-teal-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header">What Parents Say</h2>
            <div className="teal-accent"></div>
            <p className="text-lg text-gray-900 font-semibold">
              Hear from our satisfied parents and students
            </p>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  )
}

export default Home
