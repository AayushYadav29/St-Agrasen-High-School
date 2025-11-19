import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import leadershipData from '../data/leadership.json'

const LeadershipSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent"
        >
          Our Leadership
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipData.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="p-8 text-center h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-teal-600 shadow-lg shadow-teal-600/25"
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                
                <p className="text-lg font-semibold text-gray-600 mb-3">
                  {leader.position}
                </p>
                
                <p className="text-sm text-gray-700 mb-4 font-medium">
                  {leader.qualifications}
                </p>
                
                {leader.message && (
                  <p className="text-gray-800 italic font-medium">
                    "{leader.message}"
                  </p>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection
