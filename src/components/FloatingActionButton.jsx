import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import GlassCard from './GlassCard'

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message sent: ${message}`)
    setMessage('')
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 md:right-8 z-40 w-80 md:w-96"
          >
            <GlassCard className="p-6" hover={false}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Quick Contact
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-teal-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full h-32 px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none font-medium"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-teal-700 to-teal-500 hover:from-teal-600 hover:to-teal-400 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-teal-600/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-teal-700 to-teal-500 text-white shadow-lg shadow-teal-600/30 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-teal-600/35"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </>
  )
}

export default FloatingActionButton
