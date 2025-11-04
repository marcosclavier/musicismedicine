'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'
import { Link } from 'react-scroll'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaHeart, FaMusic, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Newsletter signup state
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  // Handle newsletter form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Thank you for subscribing!')
        setEmail('') // Clear the input
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  const socialLinks = [
    { icon: FaFacebook, link: '#', label: 'Facebook' },
    { icon: FaTwitter, link: '#', label: 'Twitter' },
    { icon: FaInstagram, link: '#', label: 'Instagram' },
    { icon: FaLinkedin, link: '#', label: 'LinkedIn' },
    { icon: FaYoutube, link: '#', label: 'YouTube' },
  ]

  const quickLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Visionaries', to: 'visionaries' },
    { label: 'The Singles', to: 'singles' },
    { label: 'Listen & Buy', to: 'listen' },
    { label: 'Donate', to: 'donate' },
    { label: 'Impact', to: 'impact' },
  ]

  return (
    <footer ref={ref} className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-accent-purple to-accent-orange py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Music is Medicine
          </h2>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Listen, Buy, Donate, and Make a Difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="singles"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <button className="flex items-center justify-center gap-3 bg-white text-accent-purple px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                <FaMusic />
                Listen to the First Single
              </button>
            </Link>
            <a
              href="https://btfc.akaraisin.com/ui/musicismedicine/donations/start?it=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                <FaHeart />
                Donate Now
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/MIM-logo-cropped.png"
                alt="Music is Medicine"
                width={150}
                height={72}
                className="h-[72px] w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              A heartfelt Canadian music initiative by PEAK Financial Group and N2O,
              featuring Grammy-winning artist Alan Parsons. Raising funds and awareness for
              brain cancer research through the healing power of music.
            </p>
            <p className="text-gray-400 text-sm">
              Net proceeds donated to the Brain Tumour Foundation of Canada, supporting research,
              education, and patient programs nationwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="text-gray-400 hover:text-accent-purple transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:peakcommunication@peakgroup.com"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-purple transition-colors duration-300"
              >
                <FaEnvelope />
                <span className="text-sm">peakcommunication@peakgroup.com</span>
              </a>
            </div>
            <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-purple transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800 rounded-lg p-6 mb-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-3">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get notified when new singles drop and stay informed about our research impact.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-accent-purple text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            {/* Status Messages */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg flex items-center justify-center gap-2 ${
                  status === 'success'
                    ? 'bg-accent-green/20 text-accent-green border border-accent-green/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {status === 'success' ? (
                  <FaCheckCircle className="flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="flex-shrink-0" />
                )}
                <span className="text-sm">{message}</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 text-center"
        >
          <h5 className="text-sm font-semibold text-gray-400 mb-6">
            Proud Partners & Sponsors
          </h5>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center h-16 px-4">
              <img
                src="/logo/BNC-Logo.png"
                alt="National Bank"
                className="object-contain max-h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-16 px-4">
              <img
                src="/logo/air-canada-logo-black-and-white.png"
                alt="Air Canada"
                className="object-contain max-h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-16 px-4">
              <img
                src="/logo/TD_Bank-logo-png.png"
                alt="TD Bank"
                className="object-contain max-h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-16 px-4">
              <img
                src="/logo/Canadian_National_Railway-Logo.png"
                alt="CN"
                className="object-contain max-h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-16 px-4">
              <img
                src="/logo/sun-life-logo.png"
                alt="Sun Life"
                className="object-contain max-h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-16 px-4">
              <img
                src="/logo/groupe-deschenes-logo.png"
                alt="Groupe Deschenes"
                className="object-contain max-h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-accent-purple transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent-purple transition-colors duration-300">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent-purple transition-colors duration-300">
                Accessibility
              </a>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} PEAK Financial Group. All rights reserved.</p>
              <p className="mt-1">
                Part of the #PEAKWithPurpose initiative
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Final Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-black py-4 text-center"
      >
        <p className="text-sm text-gray-500">
          Made with <FaHeart className="inline text-red-500" /> to support brain cancer research
        </p>
      </motion.div>
    </footer>
  )
}
