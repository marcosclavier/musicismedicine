'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function VisionariesSection() {
  const t = useTranslations('visionaries')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const visionaries = [
    {
      name: t('robertFrances.name'),
      title: t('robertFrances.title'),
      organization: t('robertFrances.organization'),
      image: '/robert-frances.jpg',
      quote: t('robertFrances.quote'),
      bio: t('robertFrances.bio'),
    },
    {
      name: t('alanParsons.name'),
      title: t('alanParsons.title'),
      organization: t('alanParsons.organization'),
      image: '/alan-parsons.jpg',
      quote: t('alanParsons.quote'),
      bio: t('alanParsons.bio'),
    },
  ]

  const partners = [
    {
      name: t('partners.peak.name'),
      description: t('partners.peak.description'),
      logo: '/logo/peak-logo-transparent.png',
    },
    {
      name: t('partners.landr.name'),
      description: t('partners.landr.description'),
      logo: '/logo/LANDR_Blue_Logo-png.png',
    },
    {
      name: t('partners.foundation.name'),
      description: t('partners.foundation.description'),
      logo: '/logo/brain-tumour-foundation-logo.png',
    },
  ]

  return (
    <section id="visionaries" className="section bg-primary-gray" ref={ref}>
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

        {/* Visionaries */}
        <div className="space-y-16 mb-20">
          {visionaries.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-3xl font-bold text-text-primary mb-2">
                    {person.name}
                  </h3>
                  <p className="text-lg text-accent-purple font-semibold mb-1">
                    {person.title}
                  </p>
                  <p className="text-text-secondary mb-6">
                    {person.organization}
                  </p>

                  {/* Quote */}
                  <div className="bg-primary-gray rounded-lg p-6 mb-6 relative">
                    <FaQuoteLeft className="text-accent-purple text-2xl mb-3 opacity-50" />
                    <p className="text-lg text-text-primary italic leading-relaxed">
                      "{person.quote}"
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-text-secondary leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">
            {t('partnersTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                {/* Logo */}
                <div className="bg-primary-gray rounded-lg h-32 flex items-center justify-center mb-4 p-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    style={{ height: 'auto', width: 'auto', maxHeight: '80px' }}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-2">
                  {partner.name}
                </h4>
                <p className="text-text-secondary">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PEAK #PEAKWithPurpose Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary-blue to-accent-purple text-white rounded-2xl p-8 text-center"
        >
          <h4 className="text-2xl font-bold mb-3">
            {t('peakTitle')}
          </h4>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {t('peakDescription')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
