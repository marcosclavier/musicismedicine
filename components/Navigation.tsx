'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LanguageToggle from './LanguageToggle'

export default function Navigation() {
  const t = useTranslations('navigation')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Throttle function to limit scroll event frequency
    let throttleTimer: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (throttleTimer) return

      throttleTimer = setTimeout(() => {
        setIsScrolled(window.scrollY > 50)
        throttleTimer = null
      }, 100) // Fire at most once per 100ms instead of 60+ times/second
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (throttleTimer) clearTimeout(throttleTimer)
    }
  }, [])

  const navLinks = [
    { to: 'hero', label: t('home') },
    { to: 'about', label: t('about') },
    { to: 'visionaries', label: t('visionaries') },
    { to: 'singles', label: t('singles') },
    { to: 'listen', label: t('listen') },
    { to: 'donate', label: t('donate') },
    { to: 'impact', label: t('impact') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 pt-5 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <Image
                src={isScrolled ? "/images/MIM-logo-cropped-orange.png" : "/images/MIM-logo-cropped.png"}
                alt="Music is Medicine"
                width={150}
                height={72}
                priority
                style={{ height: '72px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className={`cursor-pointer font-medium transition-colors duration-300 hover:text-accent-purple ${
                  isScrolled ? 'text-text-primary' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="singles"
              smooth={true}
              duration={500}
              className="cursor-pointer px-6 py-2 bg-accent-purple text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              {t('listenNow')}
            </Link>
            <Link
              to="donate"
              smooth={true}
              duration={500}
              className="cursor-pointer px-6 py-2 bg-accent-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              {t('donateButton')}
            </Link>
            <div className="pl-4">
              <LanguageToggle isScrolled={isScrolled} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle isScrolled={isScrolled} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-text-primary' : 'text-white'
              }`}
              aria-label={t('toggleMenu')}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="block px-4 py-2 text-text-primary hover:bg-primary-gray rounded-lg cursor-pointer font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="singles"
                smooth={true}
                duration={500}
                className="block px-4 py-2 bg-accent-purple text-white rounded-lg font-semibold text-center cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('listenNow')}
              </Link>
              <Link
                to="donate"
                smooth={true}
                duration={500}
                className="block px-4 py-2 bg-accent-orange text-white rounded-lg font-semibold text-center cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('donateButton')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
