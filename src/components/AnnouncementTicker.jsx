import { motion } from 'framer-motion'
import { Bell } from 'lucide-react'
import GlassCard from './GlassCard'
import announcements from '../data/announcements.json'

const AnnouncementTicker = () => {
  return (
    <div className="px-4 -mt-10 relative z-20">
      <GlassCard className="max-w-7xl mx-auto p-4" neon>
        <div className="flex items-center space-x-4 overflow-hidden">
          <div className="flex-shrink-0 flex items-center space-x-2 bg-gradient-to-r from-teal-700 to-teal-500 px-4 py-2 rounded-xl shadow-lg shadow-teal-600/20">
            <Bell className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-bold">Announcements</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex space-x-8 whitespace-nowrap"
            >
              {announcements.map((announcement, index) => (
                <span
                  key={index}
                  className="text-gray-900 font-semibold"
                >
                  • {announcement.text}
                </span>
              ))}
              {announcements.map((announcement, index) => (
                <span
                  key={`duplicate-${index}`}
                  className="text-gray-900 font-semibold"
                >
                  • {announcement.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}

export default AnnouncementTicker
