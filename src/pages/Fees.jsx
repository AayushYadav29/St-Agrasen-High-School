import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Filter } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import feesData from '../data/fees.json'

const Fees = () => {
  const [selectedClass, setSelectedClass] = useState('all')

  const classes = ['all', 'Nursery', 'KG', ...Array.from({length: 12}, (_, i) => `Class ${i + 1}`)]

  const filteredFees = selectedClass === 'all' 
    ? feesData 
    : feesData.filter(fee => fee.class === selectedClass)

  const generatePDF = () => {
    alert('PDF generation feature - In production, this would generate a downloadable PDF')
  }

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
            Fees Structure
          </h1>
          <p className="text-xl text-teal-600 font-semibold">
            St. Agrasen High School & Jr. College
          </p>
          <p className="text-sm text-gray-700 mt-2 font-medium">
            Transparent and affordable quality education
          </p>
        </motion.div>

        {/* Filter and Download */}
        <GlassCard className="p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <Filter className="w-5 h-5 text-gray-700" />
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="flex-1 md:w-64 px-4 py-2 rounded-xl bg-white border-2 border-teal-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
              >
                {classes.map(cls => (
                  <option key={cls} value={cls}>
                    {cls === 'all' ? 'All Classes' : cls}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={generatePDF}
              className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-teal-700 to-teal-500 hover:from-teal-600 hover:to-teal-400 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-teal-600/20"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>
          </div>
        </GlassCard>

        {/* Fees Table */}
        <GlassCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-teal-300">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Class
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    Admission Fee
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    Tuition Fee (Annual)
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    Transport Fee
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    Activity Fee
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredFees.map((fee, index) => (
                  <motion.tr
                    key={fee.class}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-teal-200 hover:bg-teal-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      {fee.class}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-800 font-medium">
                      ₹{fee.admissionFee.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-800 font-medium">
                      ₹{fee.tuitionFee.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-800 font-medium">
                      ₹{fee.transportFee.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-800 font-medium">
                      ₹{fee.activityFee.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-gray-600">
                      ₹{fee.total.toLocaleString('en-IN')}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Payment Options
            </h3>
            <ul className="space-y-2 text-sm text-gray-800 font-medium">
              <li>• Annual payment (5% discount)</li>
              <li>• Quarterly installments</li>
              <li>• Monthly installments</li>
              <li>• Online payment available</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Scholarships
            </h3>
            <ul className="space-y-2 text-sm text-gray-800 font-medium">
              <li>• Merit-based scholarships</li>
              <li>• Need-based financial aid</li>
              <li>• Sibling discounts (10%)</li>
              <li>• Sports scholarships</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Important Notes
            </h3>
            <ul className="space-y-2 text-sm text-gray-800 font-medium">
              <li>• Fees subject to annual revision</li>
              <li>• Late payment charges apply</li>
              <li>• Refund policy available</li>
              <li>• Contact office for queries</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}

export default Fees
