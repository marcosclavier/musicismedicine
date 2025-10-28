'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'

export default function VisionariesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const visionaries = [
    {
      name: 'Robert Frances',
      title: 'Founder & Brain Cancer Survivor',
      organization: 'President & CEO, PEAK Financial Group',
      image: '/robert-frances.jpg',
      quote: 'Music healed me during my darkest hours. Now, through Music is Medicine, it\'s healing others by funding the research that saved my life.',
      bio: 'As a brain cancer survivor diagnosed with glioblastoma around 2020, Robert found solace and healing in music during his treatment. This personal journey inspired him to launch Music is Medicine, transforming his passion for music into a purposeful movement for research funding under PEAK\'s #PEAKWithPurpose banner.',
    },
    {
      name: 'Alan Parsons',
      title: 'Grammy-Winning Artist & Producer',
      organization: 'Featured Artist',
      image: '/alan-parsons.jpg',
      quote: 'Music has the power to inspire, heal, and bring people together. I\'m honored to contribute to such an important cause that turns sound into hope.',
      bio: 'Legendary producer and musician known for his groundbreaking work with Pink Floyd, The Beatles, and his own Alan Parsons Project. His productions have shaped the sound of modern music, and now he\'s lending his talent to save lives through these exclusive charity singles.',
    },
  ]

  const partners = [
    {
      name: 'PEAK Financial Group',
      description: 'Montreal-based independent financial services firm driving community impact through the #PEAKWithPurpose initiative.',
      logo: '/images/peak-logo.png',
    },
    {
      name: 'LANDR',
      description: 'Leading audio mastering and distribution platform handling the production and distribution of all five charity singles.',
      logo: '/images/landr-logo.png',
    },
    {
      name: 'The Neuro',
      description: 'Montreal Neurological Institute-Hospital, part of McGill University Health Centre, where all proceeds fund brain cancer research.',
      logo: '/images/neuro-logo.png',
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
            Meet the <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The inspiring individuals behind this life-changing initiative
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
            Key Partners & Collaborators
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
                {/* Logo Placeholder */}
                <div className="bg-primary-gray rounded-lg h-32 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-blue">
                    {partner.name}
                  </span>
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
            Part of PEAK's #PEAKWithPurpose Initiative
          </h4>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            PEAK Financial Group is committed to making a positive impact in the community,
            supporting causes that matter and creating lasting change.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
