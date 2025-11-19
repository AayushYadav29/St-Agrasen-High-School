import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import GlassCard from './GlassCard'
import testimonials from '../data/testimonials.json'

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative max-w-4xl mx-auto">
      <GlassCard className="p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-900 mb-6 italic font-medium">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="font-bold text-gray-900">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-gray-700 font-medium">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </GlassCard>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-teal-100 border-2 border-teal-600 hover:bg-teal-200 transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-teal-100 border-2 border-teal-600 hover:bg-teal-200 transition-all duration-300 shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-teal-600 w-8'
                : 'bg-teal-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel
