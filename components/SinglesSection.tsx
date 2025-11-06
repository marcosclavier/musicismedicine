'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaSpotify, FaCalendar, FaClock } from 'react-icons/fa'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function SinglesSection() {
  const t = useTranslations('singles')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const singles = [
    {
      title: t('radio.title'),
      subtitle: t('radio.subtitle'),
      releaseDate: t('radio.releaseDate'),
      status: 'available',
      description: t('radio.description'),
      themes: [t('radio.themes.0'), t('radio.themes.1'), t('radio.themes.2')],
      artwork: '/Radio-Final-RGB-1500.jpeg',
      audioSnippet: '/audio/single-1-snippet.mp3',
      spotifyLink: 'https://open.spotify.com/track/6e81ngILs9n5EeMQJIUVK3?si=eyUeMGfvS9uINyRPFLQ_8w&nd=1&dlsi=dc22e2de078c4929',
    },
    {
      title: t('youAndI.title'),
      subtitle: t('youAndI.subtitle'),
      releaseDate: t('youAndI.releaseDate'),
      status: 'upcoming',
      description: t('youAndI.description'),
      themes: [t('youAndI.themes.0'), t('youAndI.themes.1'), t('youAndI.themes.2')],
      artwork: '/images/single-2.jpg',
      audioSnippet: '/audio/single-2-snippet.mp3',
    },
    {
      title: t('courage.title'),
      subtitle: t('courage.subtitle'),
      releaseDate: t('courage.releaseDate'),
      status: 'upcoming',
      description: t('courage.description'),
      themes: [t('courage.themes.0'), t('courage.themes.1'), t('courage.themes.2')],
      artwork: '/images/single-3.jpg',
      audioSnippet: '/audio/single-3-snippet.mp3',
    },
    {
      title: t('whereToGo.title'),
      subtitle: t('whereToGo.subtitle'),
      releaseDate: t('whereToGo.releaseDate'),
      status: 'upcoming',
      description: t('whereToGo.description'),
      themes: [t('whereToGo.themes.0'), t('whereToGo.themes.1'), t('whereToGo.themes.2')],
      artwork: '/images/single-4.jpg',
      audioSnippet: '/audio/single-4-snippet.mp3',
    },
  ]

  return (
    <section id="singles" className="section bg-white" ref={ref}>
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-accent-purple to-accent-orange text-white rounded-2xl p-6 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaCalendar className="text-2xl" />
            <h3 className="text-2xl font-bold">{t('scheduleTitle')}</h3>
          </div>
          <p className="text-lg opacity-90">
            {t('scheduleDescription')}
          </p>
        </motion.div>

        {/* Singles Grid */}
        <div className="space-y-8">
          {singles.map((single, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="card hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Artwork */}
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden relative bg-gray-100">
                    {/* Artwork Image or Placeholder */}
                    {single.status === 'available' ? (
                      <Image
                        src={single.artwork}
                        alt={`${single.title} cover art`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple to-accent-orange flex items-center justify-center text-white text-6xl font-bold">
                        #{index + 1}
                      </div>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    {single.status === 'upcoming' && (
                      <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <FaClock /> {t('statusUpcoming')}
                      </span>
                    )}
                    {single.status === 'available' && (
                      <span className="bg-accent-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {t('statusAvailable')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">
                      {single.title}: {single.subtitle}
                    </h3>
                    <p className="text-accent-purple font-semibold flex items-center gap-2">
                      <FaCalendar />
                      {t('releaseLabel')} {single.releaseDate}
                    </p>
                  </div>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {single.description}
                  </p>

                  {/* Themes */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {single.themes.map((theme, themeIndex) => (
                      <span
                        key={themeIndex}
                        className="bg-primary-gray text-text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {single.status === 'upcoming' ? (
                      <button className="flex items-center gap-2 bg-primary-gray text-text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
                        {t('preSave')}
                      </button>
                    ) : (
                      <a
                        href={single.spotifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#1DB954] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1ed760] transition-colors duration-300"
                      >
                        <FaSpotify /> {t('listenSpotify')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collection Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-primary-gray rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            {t('collectionTitle')}
          </h3>
          <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            {t('collectionDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-purple transition-colors duration-300">
              {t('notificationsButton')}
            </button>
            <a
              href="#listen"
              className="bg-accent-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              {t('howToListenButton')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
