'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaSpotify, FaCalendar, FaClock } from 'react-icons/fa'
import Image from 'next/image'

export default function SinglesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const singles = [
    {
      title: 'Radio',
      subtitle: 'by N2O featuring Alan Parsons',
      releaseDate: 'November 4, 2025',
      status: 'available',
      description: 'Produced and Mixed by Alan Parsons — a song about connection, memory, and finding light after loss. This powerful opening track sets the tone for the journey ahead.',
      themes: ['Connection', 'Memory', 'Hope'],
      artwork: '/Radio-Final-RGB-1500.jpeg',
      audioSnippet: '/audio/single-1-snippet.mp3',
      spotifyLink: 'https://open.spotify.com/track/6e81ngILs9n5EeMQJIUVK3?si=eyUeMGfvS9uINyRPFLQ_8w&nd=1&dlsi=dc22e2de078c4929',
    },
    {
      title: 'You & I',
      subtitle: 'by N2O featuring Alan Parsons',
      releaseDate: 'November 30, 2025',
      status: 'upcoming',
      description: 'A tribute to love, resilience, and unity. This heartfelt composition celebrates the bonds that give us strength through life\'s greatest challenges.',
      themes: ['Love', 'Resilience', 'Unity'],
      artwork: '/images/single-2.jpg',
      audioSnippet: '/audio/single-2-snippet.mp3',
    },
    {
      title: 'Courage',
      subtitle: 'by N2O featuring Alan Parsons',
      releaseDate: 'December 30, 2025',
      status: 'upcoming',
      description: 'A song about strength, healing, and perseverance. This powerful track explores the courage we find within ourselves when facing adversity.',
      themes: ['Strength', 'Healing', 'Perseverance'],
      artwork: '/images/single-3.jpg',
      audioSnippet: '/audio/single-3-snippet.mp3',
    },
    {
      title: 'Where to Go',
      subtitle: 'by N2O featuring Alan Parsons',
      releaseDate: 'February 28, 2026',
      status: 'upcoming',
      description: 'A reflection on purpose, hope, and moving forward. The inspiring finale that looks toward a future filled with possibility and promise.',
      themes: ['Purpose', 'Hope', 'Future'],
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
            The <span className="text-gradient">Singles</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Four original singles by N2O featuring Alan Parsons, releasing from November 2025 through February 2026
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
            <h3 className="text-2xl font-bold">Release Schedule</h3>
          </div>
          <p className="text-lg opacity-90">
            One new single every month • November 4, 2025 - February 28, 2026
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
                        <FaClock /> Coming Soon
                      </span>
                    )}
                    {single.status === 'available' && (
                      <span className="bg-accent-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Available Now
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
                      Release Date: {single.releaseDate}
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
                        Pre-Save
                      </button>
                    ) : (
                      <a
                        href={single.spotifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#1DB954] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1ed760] transition-colors duration-300"
                      >
                        <FaSpotify /> Listen on Spotify
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
            Exclusive Charity Collection
          </h3>
          <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            All singles by N2O featuring Alan Parsons, distributed globally by LANDR.
            Net proceeds donated to the Brain Tumour Foundation of Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-purple transition-colors duration-300">
              Get Notifications
            </button>
            <a
              href="#listen"
              className="bg-accent-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              How to Listen & Buy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
