'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaPlay, FaHeart } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function HeroBanner() {
  const t = useTranslations('hero')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 max-w-full px-4"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-full text-xs sm:text-sm font-semibold border border-white/30 inline-block text-center leading-relaxed">
              {t('badge')}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t('title')}
            <br />
            <span className="text-accent-orange">{t('subtitle')}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 max-w-4xl mx-auto"
          >
            {t('description')}
          </motion.p>

          {/* Release Info */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/80 mb-12"
          >
            {t('firstRelease')} <span className="font-bold text-accent-orange">{t('radioTitle')}</span> {t('producedBy')}
            <br />
            {t('availableDate')} <span className="font-bold text-accent-orange">{t('releaseDate')}</span>
            <br />
            {t('releaseSchedule')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              to="singles"
              smooth={true}
              duration={500}
              className="cursor-pointer group"
            >
              <button className="flex items-center gap-3 bg-accent-purple text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-2xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50">
                <FaPlay className="group-hover:scale-110 transition-transform" />
                {t('listenNowButton')}
              </button>
            </Link>
            <a
              href="https://btfc.akaraisin.com/ui/musicismedicine/donations/start?it=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="flex items-center gap-3 bg-accent-orange text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-2xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/50">
                <FaHeart className="group-hover:scale-110 transition-transform" />
                {t('donateNowButton')}
              </button>
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 text-white/70 text-sm sm:text-base"
          >
            <p>{t('netProceeds')}</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
