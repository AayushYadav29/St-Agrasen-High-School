import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, CheckCircle, Search } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    selectedClass: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [applicationId, setApplicationId] = useState('')
  const [searchId, setSearchId] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = 'APP' + Math.random().toString(36).substr(2, 9).toUpperCase()
    setApplicationId(id)
    
    // Save to localStorage (mock API)
    const applications = JSON.parse(localStorage.getItem('applications') || '[]')
    applications.push({ ...formData, id, status: 'Pending', date: new Date().toISOString() })
    localStorage.setItem('applications', JSON.stringify(applications))
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        studentName: '',
        dateOfBirth: '',
        gender: '',
        fatherName: '',
        motherName: '',
        email: '',
        phone: '',
        address: '',
        previousSchool: '',
        selectedClass: '',
      })
    }, 5000)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const applications = JSON.parse(localStorage.getItem('applications') || '[]')
    const result = applications.find(app => app.id === searchId)
    setSearchResult(result || { notFound: true })
  }

  const criteria = [
    { class: 'Nursery - KG', age: '3-5 years', requirements: 'Birth certificate, Immunization records' },
    { class: 'Class 1-5', age: '6-10 years', requirements: 'Transfer certificate, Previous report cards' },
    { class: 'Class 6-8', age: '11-13 years', requirements: 'Transfer certificate, Report cards, Character certificate' },
    { class: 'Class 9-12', age: '14-17 years', requirements: 'Transfer certificate, Report cards, Character certificate, Entrance test' },
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
            Admissions
          </h1>
          <p className="text-xl font-semibold">
            Join <span className="text-teal-600">St. Agrasen High School & Jr. College</span>
          </p>
          <p className="text-sm text-gray-700 mt-2 font-medium">
            Kamlabai Education Trust (KECT) | Agrawal Group of Institute (AGI)
          </p>
        </motion.div>

        {/* Admission Criteria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Admission Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {criteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    {item.class}
                  </h3>
                  <p className="text-gray-900 mb-2 font-medium">
                    <span className="font-semibold">Age:</span> {item.age}
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    <span className="font-semibold">Requirements:</span> {item.requirements}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-16">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Online Admission Form
            </h2>
            
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-800 mb-4 font-medium">
                  Your application ID is:
                </p>
                <p className="text-3xl font-bold text-gray-600 mb-4">
                  {applicationId}
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  Please save this ID to check your application status
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-600"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Class Applying For *
                    </label>
                    <select
                      name="selectedClass"
                      value={formData.selectedClass}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary"
                    >
                      <option value="">Select Class</option>
                      {['Nursery', 'KG', ...Array.from({length: 12}, (_, i) => `Class ${i + 1}`)].map(cls => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mother's Name *
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/70 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Upload Documents
                  </label>
                  <div className="border-2 border-dashed border-teal-300 rounded-xl p-8 text-center hover:border-teal-600 hover:bg-teal-50 transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-2 text-gray-600" />
                    <p className="text-gray-800 font-medium">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-700 mt-1 font-medium">
                      PDF, JPG, PNG (Max 5MB)
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-700 to-teal-500 hover:from-teal-600 hover:to-teal-400 text-white rounded-xl font-bold shadow-lg shadow-teal-600/25 transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
            )}
          </GlassCard>
        </section>

        {/* Status Checker */}
        <section>
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Check Application Status
            </h2>
            <form onSubmit={handleSearch} className="flex gap-4">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Application ID"
                className="flex-1 px-4 py-3 rounded-xl bg-white border-2 border-teal-300 text-gray-900 placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-600 font-medium"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-teal-700 to-teal-500 hover:from-teal-600 hover:to-teal-400 text-white rounded-xl font-bold flex items-center space-x-2 transition-all duration-300 shadow-lg shadow-teal-600/20"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </form>

            {searchResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 rounded-xl bg-teal-50 border-2 border-teal-300"
              >
                {searchResult.notFound ? (
                  <p className="text-center text-red-600 font-semibold">Application not found</p>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Application Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 font-medium">Student Name</p>
                        <p className="text-gray-900 font-semibold">{searchResult.studentName}</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Class</p>
                        <p className="text-gray-900 font-semibold">{searchResult.selectedClass}</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Status</p>
                        <p className="text-yellow-600 font-semibold">{searchResult.status}</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Applied On</p>
                        <p className="text-gray-900 font-semibold">
                          {new Date(searchResult.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </GlassCard>
        </section>
      </div>
    </div>
  )
}

export default Admissions
