'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaHeart, FaCalendarAlt, FaBuilding, FaCheck, FaReceipt, FaUniversity } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function DonateSection() {
  const t = useTranslations('donate')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const donationTiers = [
    {
      amount: t('tiers.single.amount'),
      title: t('tiers.single.title'),
      description: t('tiers.single.description'),
      impact: t('tiers.single.impact'),
      icon: '🎵',
      link: 'https://btfc.akaraisin.com/ui/musicismedicine/donations/start?it=1&amt=10',
    },
    {
      amount: t('tiers.advocate.amount'),
      title: t('tiers.advocate.title'),
      description: t('tiers.advocate.description'),
      impact: t('tiers.advocate.impact'),
      icon: '🎸',
      popular: true,
      link: 'https://btfc.akaraisin.com/ui/musicismedicine/donations/start?it=1&amt=25',
    },
    {
      amount: t('tiers.master.amount'),
      title: t('tiers.master.title'),
      description: t('tiers.master.description'),
      impact: t('tiers.master.impact'),
      icon: '🎼',
      link: 'https://btfc.akaraisin.com/ui/musicismedicine/donations/start?it=1&amt=50',
    },
    {
      amount: t('tiers.builder.amount'),
      title: t('tiers.builder.title'),
      description: t('tiers.builder.description'),
      impact: t('tiers.builder.impact'),
      icon: '🏆',
      link: 'https://btfc.akaraisin.com/ui/musicismedicine/donations/start?it=1&amt=100',
    },
    {
      amount: t('tiers.visionary.amount'),
      title: t('tiers.visionary.title'),
      description: t('tiers.visionary.description'),
      impact: t('tiers.visionary.impact'),
      icon: '💫',
      link: 'https://btfc.akaraisin.com/ui/musicismedicine/donations/start?it=1',
    },
  ]

  const benefits = [
    { text: t('benefits.receipt'), icon: FaReceipt },
    { text: t('benefits.secure'), icon: FaCheck },
    { text: t('benefits.direct'), icon: FaHeart },
    { text: t('benefits.community'), icon: FaCalendarAlt },
  ]

  return (
    <section id="donate" className="section bg-white" ref={ref}>
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
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-blue to-accent-purple text-white rounded-2xl p-8 sm:p-12 text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('impactTitle')}
          </h3>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-6">
            {t('impactDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-left sm:text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">$600K+</div>
              <div className="text-sm opacity-90">{t('stats.totalRaised')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">1000s</div>
              <div className="text-sm opacity-90">{t('stats.supporters')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">{t('stats.netProceeds')}</div>
            </div>
          </div>
        </motion.div>

        {/* Donation Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">
            {t('tiersTitle')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className={`card relative hover:shadow-2xl transition-all duration-300 group ${
                  tier.popular ? 'ring-2 ring-accent-orange' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-orange text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {t('tiers.advocate.popular')}
                  </div>
                )}
                <div className="text-center">
                  <div className="text-5xl mb-3">{tier.icon}</div>
                  <div className="text-3xl font-bold text-primary-blue mb-2">
                    {tier.amount}
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">
                    {tier.title}
                  </h4>
                  <p className="text-sm text-text-secondary mb-3">
                    {tier.description}
                  </p>
                  <div className="bg-primary-gray rounded-lg p-3 mb-4">
                    <p className="text-xs text-text-primary font-medium">
                      {tier.impact}
                    </p>
                  </div>
                  <a
                    href={tier.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-purple transition-colors duration-300 group-hover:scale-105 text-center"
                  >
                    {t('selectButton')}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Donation Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          {/* One-Time Donation */}
          <div className="card bg-primary-gray">
            <div className="text-center">
              <FaHeart className="text-5xl text-accent-orange mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-text-primary mb-3">
                {t('oneTimeTitle')}
              </h4>
              <p className="text-text-secondary mb-6">
                {t('oneTimeDescription')}
              </p>
              <a
                href="https://btfc.akaraisin.com/ui/musicismedicine/donations/start?it=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                {t('donateNowButton')}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            {t('benefitsTitle')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-accent-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-accent-green text-xl" />
                </div>
                <p className="text-text-primary font-medium">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* McGill/The Neuro Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="card bg-primary-gray mb-12 text-center"
        >
          <FaUniversity className="text-5xl text-primary-blue mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            {t('foundationTitle')}
          </h3>
          <p className="text-text-secondary mb-4 max-w-2xl mx-auto leading-relaxed">
            {t('foundationDescription')}
          </p>
          <a
            href="https://www.braintumour.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary-blue font-semibold hover:text-accent-purple transition-colors duration-300"
          >
            {t('learnMoreLink')}
          </a>
        </motion.div>

        {/* Corporate Matching */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-accent-orange to-accent-purple text-white rounded-2xl p-8 text-center"
        >
          <FaBuilding className="text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            {t('corporateTitle')}
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            {t('corporateDescription')}
          </p>
          <a
            href="mailto:peakcommunication@peakgroup.com"
            className="inline-block bg-white text-accent-purple px-8 py-3 rounded-lg font-semibold hover:bg-primary-gray transition-colors duration-300"
          >
            {t('corporateButton')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
