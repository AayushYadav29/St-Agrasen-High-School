import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Monitor, 
  FlaskConical, 
  Trophy, 
  BookOpen, 
  Bus, 
  Home,
  Music,
  Palette,
  X
} from 'lucide-react'
import GlassCard from '../components/GlassCard'

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(null)

  const facilities = [
    {
      icon: Monitor,
      title: 'Smart Classrooms',
      description: 'Interactive digital boards and modern teaching aids',
      color: 'from-blue-500 to-cyan-500',
      details: 'Our smart classrooms are equipped with the latest technology including interactive whiteboards, projectors, and high-speed internet connectivity. Each classroom is designed to enhance the learning experience with comfortable seating and optimal lighting.',
      features: ['Interactive Whiteboards', 'High-Speed Internet', 'Audio-Visual Equipment', 'Climate Control']
    },
    {
      icon: FlaskConical,
      title: 'Science Labs',
      description: 'Well-equipped physics, chemistry, and biology labs',
      color: 'from-purple-500 to-pink-500',
      details: 'State-of-the-art laboratories for hands-on scientific exploration. Our labs are equipped with modern instruments and safety equipment, allowing students to conduct experiments and develop practical skills.',
      features: ['Modern Equipment', 'Safety Measures', 'Qualified Lab Assistants', 'Research Facilities']
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities',
      color: 'from-orange-500 to-red-500',
      details: 'Comprehensive sports facilities including basketball courts, football field, cricket ground, and indoor games room. Professional coaches train students in various sports.',
      features: ['Multiple Sports Courts', 'Professional Coaches', 'Indoor Games', 'Fitness Center']
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Extensive collection of books and digital resources',
      color: 'from-green-500 to-teal-500',
      details: 'A vast collection of over 10,000 books, magazines, and digital resources. Quiet reading areas and computer stations for research work.',
      features: ['10,000+ Books', 'Digital Library', 'Reading Rooms', 'Research Support']
    },
    {
      icon: Bus,
      title: 'Transport',
      description: 'Safe and reliable school bus service',
      color: 'from-yellow-500 to-orange-500',
      details: 'GPS-enabled buses with trained drivers and attendants. Multiple routes covering the entire city with door-to-door pickup and drop service.',
      features: ['GPS Tracking', 'Trained Staff', 'Multiple Routes', 'Safety Measures']
    },
    {
      icon: Home,
      title: 'Hostel',
      description: 'Comfortable boarding facilities',
      color: 'from-indigo-500 to-purple-500',
      details: 'Separate hostels for boys and girls with 24/7 security, nutritious meals, and recreational facilities. Experienced wardens ensure student welfare.',
      features: ['24/7 Security', 'Nutritious Meals', 'Study Rooms', 'Medical Care']
    },
    {
      icon: Music,
      title: 'Music Room',
      description: 'Learn various musical instruments',
      color: 'from-pink-500 to-rose-500',
      details: 'Soundproof music rooms with various instruments including piano, guitar, drums, and traditional instruments. Professional music teachers guide students.',
      features: ['Multiple Instruments', 'Soundproof Rooms', 'Professional Teachers', 'Performance Stage']
    },
    {
      icon: Palette,
      title: 'Art Studio',
      description: 'Creative space for artistic expression',
      color: 'from-cyan-500 to-blue-500',
      details: 'Spacious art studio with all necessary materials and equipment. Students can explore various art forms including painting, sculpture, and digital art.',
      features: ['Art Supplies', 'Exhibition Space', 'Digital Art Tools', 'Expert Guidance']
    },
  ]

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
            Our Facilities
          </h1>
          <p className="text-xl text-teal-600 font-semibold">
            St. Agrasen High School & Jr. College
          </p>
          <p className="text-sm text-gray-700 mt-2 font-medium">
            World-class infrastructure for holistic development
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard 
                className="p-6 cursor-pointer h-full"
                onClick={() => setSelectedFacility(facility)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center shadow-lg`}>
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-800 text-center font-medium">
                  {facility.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Facility Detail Modal */}
        <AnimatePresence>
          {selectedFacility && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedFacility(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl"
              >
                <GlassCard className="p-8 relative" hover={false}>
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl hover:bg-teal-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>

                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${selectedFacility.color} flex items-center justify-center shadow-lg`}>
                    <selectedFacility.icon className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                    {selectedFacility.title}
                  </h2>

                  <p className="text-gray-800 mb-6 text-center font-medium">
                    {selectedFacility.details}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedFacility.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 rounded-xl bg-teal-50"
                      >
                        <div className="w-2 h-2 rounded-full bg-teal-600" />
                        <span className="text-sm text-gray-900 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Facilities
