'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaPlay, FaPause, FaSpotify, FaApple, FaYoutube, FaCalendar, FaClock } from 'react-icons/fa'

export default function SinglesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [playingSingle, setPlayingSingle] = useState<number | null>(null)

  const singles = [
    {
      title: 'Single #1',
      subtitle: 'Hope Rising',
      releaseDate: 'October 30, 2025',
      status: 'upcoming',
      description: 'An uplifting progressive rock anthem blending inspirational themes with Alan Parsons\' signature sound. This powerful opening track sets the tone for the journey ahead.',
      themes: ['Hope', 'Resilience', 'New Beginnings'],
      artwork: '/images/single-1.jpg',
      audioSnippet: '/audio/single-1-snippet.mp3',
    },
    {
      title: 'Single #2',
      subtitle: 'Echoes of Strength',
      releaseDate: 'November 30, 2025',
      status: 'upcoming',
      description: 'A hauntingly beautiful composition that explores the inner strength found in facing life\'s greatest challenges. Features ethereal vocals and intricate instrumentation.',
      themes: ['Courage', 'Perseverance', 'Inner Peace'],
      artwork: '/images/single-2.jpg',
      audioSnippet: '/audio/single-2-snippet.mp3',
    },
    {
      title: 'Single #3',
      subtitle: 'Light Through Darkness',
      releaseDate: 'December 30, 2025',
      status: 'upcoming',
      description: 'An emotional journey through adversity towards hope. This mid-series release showcases Parsons\' mastery of sonic landscapes.',
      themes: ['Hope', 'Transformation', 'Healing'],
      artwork: '/images/single-3.jpg',
      audioSnippet: '/audio/single-3-snippet.mp3',
    },
    {
      title: 'Single #4',
      subtitle: 'Together We Rise',
      releaseDate: 'January 30, 2026',
      status: 'upcoming',
      description: 'A celebration of community, support, and collective strength. Features uplifting melodies that remind us we\'re never alone in the fight.',
      themes: ['Unity', 'Community', 'Support'],
      artwork: '/images/single-4.jpg',
      audioSnippet: '/audio/single-4-snippet.mp3',
    },
    {
      title: 'Single #5',
      subtitle: 'Tomorrow\'s Promise',
      releaseDate: 'February 28, 2026',
      status: 'upcoming',
      description: 'The inspiring finale that looks toward a future of breakthrough treatments and hope. A powerful conclusion to this musical journey of healing.',
      themes: ['Future', 'Innovation', 'Victory'],
      artwork: '/images/single-5.jpg',
      audioSnippet: '/audio/single-5-snippet.mp3',
    },
  ]

  const handlePlayPause = (index: number) => {
    if (playingSingle === index) {
      setPlayingSingle(null)
    } else {
      setPlayingSingle(index)
    }
  }

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
            Five exclusive tracks releasing monthly from October 2025 through February 2026
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
            New single every month • October 30, 2025 - February 28, 2026
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
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent-purple to-accent-orange relative group">
                    {/* Placeholder artwork */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                      #{index + 1}
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => handlePlayPause(index)}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        aria-label={playingSingle === index ? 'Pause' : 'Play'}
                      >
                        {playingSingle === index ? (
                          <FaPause className="text-accent-purple text-2xl" />
                        ) : (
                          <FaPlay className="text-accent-purple text-2xl ml-1" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    {single.status === 'upcoming' && (
                      <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <FaClock /> Coming Soon
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
                    <button
                      onClick={() => handlePlayPause(index)}
                      className="flex items-center gap-2 bg-accent-purple text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                    >
                      {playingSingle === index ? <FaPause /> : <FaPlay />}
                      {playingSingle === index ? 'Pause' : 'Play'} Preview
                    </button>

                    {single.status === 'upcoming' ? (
                      <button className="flex items-center gap-2 bg-primary-gray text-text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
                        Pre-Save
                      </button>
                    ) : (
                      <>
                        <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                          <FaSpotify /> Spotify
                        </button>
                        <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                          <FaApple /> Apple Music
                        </button>
                        <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                          <FaYoutube /> YouTube
                        </button>
                      </>
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
            All singles feature Alan Parsons' production and performances, recorded in Montreal.
            Distributed by LANDR with 100% of proceeds benefiting brain cancer research at The Neuro.
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
