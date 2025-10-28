'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-scroll'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaHeart, FaMusic } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            <Link
              to="donate"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <button className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                <FaHeart />
                Donate Now
              </button>
            </Link>
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
              A charitable initiative by PEAK Financial Group, featuring Grammy-winning artist
              Alan Parsons. Raising funds for brain cancer research at The Neuro through the
              healing power of music.
            </p>
            <p className="text-gray-400 text-sm">
              All proceeds benefit The Neuro (Montreal Neurological Institute-Hospital),
              part of McGill University Health Centre.
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
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent-purple text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 text-center"
        >
          <h5 className="text-sm font-semibold text-gray-400 mb-4">
            Proud Partners & Sponsors
          </h5>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['National Bank', 'Air Canada', 'TD Bank', 'CN', 'Sun Life', 'LANDR', 'The Neuro'].map((partner, index) => (
              <span key={index} className="text-gray-500 font-semibold text-sm">
                {partner}
              </span>
            ))}
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
