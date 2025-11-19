import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Nirmala Devi Dighe Nagar, Waghoba Nagar Kalwa East Thane 400605, Maharashtra',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 (022) 2768-XXXX',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@stagrasen.edu.in',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon - Sat: 8:00 AM - 4:00 PM',
      color: 'from-green-500 to-teal-500',
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
            Contact Us
          </h1>
          <p className="text-xl text-teal-600 font-semibold">
            St. Agrasen High School & Jr. College
          </p>
          <p className="text-sm text-gray-700 mt-2 font-medium">
            Kamlabai Education Trust (KECT) | Thane, Maharashtra
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 text-center h-full">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-gray-800 font-medium">
                  {info.content}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Send us a Message
            </h2>
            
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center shadow-lg shadow-teal-600/25">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-800 font-medium">
                  We'll get back to you soon
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-700 to-teal-500 hover:from-teal-600 hover:to-teal-400 text-white rounded-xl font-bold shadow-lg shadow-teal-600/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </GlassCard>

          {/* Map */}
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Find Us
            </h2>
            <div className="rounded-2xl overflow-hidden h-[450px] bg-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d530.0855869720631!2d73.00644193460246!3d19.190234408445242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bed155555557%3A0x7b1fbbae8f9ed358!2sSt.%20Agrasen%20High%20School%20%26%20Jr.%20College%20of%20Arts%2C%20Commerce%20%26%20Science!5e0!3m2!1sen!2sin!4v1763568717553!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. Agrasen High School & Jr. College of Arts, Commerce & Science"
              />
            </div>
            
            {/* Direct Link to Google Maps */}
            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/bQeWENZrrrxadKU39"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white rounded-xl font-bold shadow-lg shadow-teal-600/20 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </a>
            </div>

            {/* School Timings */}
            <div className="mt-6 p-6 rounded-2xl bg-teal-50 border-2 border-teal-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                School Timings
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Nursery - KG</span>
                  <span className="text-gray-900 font-semibold">8:30 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Class 1-5</span>
                  <span className="text-gray-900 font-semibold">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Class 6-8</span>
                  <span className="text-gray-900 font-semibold">7:45 AM - 2:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Class 9-12</span>
                  <span className="text-gray-900 font-semibold">7:30 AM - 3:00 PM</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}

export default Contact
