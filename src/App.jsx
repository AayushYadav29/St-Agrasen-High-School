import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Admissions from './pages/Admissions'
import Fees from './pages/Fees'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-white via-teal-50 to-teal-100">
          <Navbar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActionButton />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
