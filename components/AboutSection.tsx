'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMusic, FaBrain, FaHeart, FaMicroscope } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function AboutSection() {
  const t = useTranslations('about')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: '4', label: t('stats.singlesLabel'), icon: FaMusic },
    { value: '$600K+', label: t('stats.raisedLabel'), icon: FaHeart },
    { value: '1000s', label: t('stats.supportersLabel'), icon: FaBrain },
    { value: '100%', label: t('stats.proceedsLabel'), icon: FaMicroscope },
  ]

  const features = [
    {
      title: t('features.musicHeals.title'),
      description: t('features.musicHeals.description'),
      icon: FaMusic,
    },
    {
      title: t('features.research.title'),
      description: t('features.research.description'),
      icon: FaMicroscope,
    },
    {
      title: t('features.hope.title'),
      description: t('features.hope.description'),
      icon: FaHeart,
    },
  ]

  return (
    <section id="about" className="section bg-white" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {t('title')} <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-primary-gray rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <stat.icon className="text-4xl text-accent-purple mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-bold text-primary-blue mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-text-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-text-primary mb-6">
              {t('contentTitle')}
            </h3>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              {t('paragraph1')}
            </p>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              {t('paragraph2')} <span className="font-bold text-primary-blue">{t('amountRaised')}</span> {t('paragraph2Continue')}
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              {t('paragraph3')}
            </p>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="card flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-orange rounded-lg flex items-center justify-center">
                    <feature.icon className="text-2xl text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-blue to-accent-purple text-white rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('ctaTitle')}
          </h3>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto opacity-90">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#singles"
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-primary-gray transition-colors duration-300"
            >
              {t('listenButton')}
            </a>
            <a
              href="#donate"
              className="bg-accent-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              {t('supportButton')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
