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
      title: 'Founder',
      organization: 'CEO, PEAK Financial Group & Member of N2O',
      image: '/robert-frances.jpg',
      quote: 'After losing a friend and bandmate to brain cancer, I wanted to turn emotion into something meaningful. Music Is Medicine is our way to give back and help others through the power of music.',
      bio: 'After losing a close bandmate to brain cancer, Robert Frances turned that loss into purpose. As CEO of PEAK Financial Group and member of the band N2O, he launched Music Is Medicine to use the power of music to raise awareness, support research, and offer hope to families across Canada.',
    },
    {
      name: 'Alan Parsons',
      title: 'Grammy-Winning Artist & Producer',
      organization: 'Featured Artist',
      image: '/alan-parsons.jpg',
      quote: 'Music connects people in moments that words alone can\'t reach. This project reminded me that creativity and compassion can change lives.',
      bio: 'World-renowned musician, engineer, and producer known for his legendary work with Pink Floyd, The Beatles, and his own Alan Parsons Project. Alan Parsons brings his iconic sound and vision to Music Is Medicine, producing and mixing the debut single "Radio", capturing emotion, connection, and remembrance in every note.',
    },
  ]

  const partners = [
    {
      name: 'PEAK Financial Group',
      description: 'Montreal-based independent financial services firm driving community impact through the #PEAKWithPurpose initiative.',
      logo: '/logo/peak-logo-transparent.png',
    },
    {
      name: 'LANDR',
      description: 'Leading audio mastering and distribution platform distributing all four charity singles globally.',
      logo: '/logo/LANDR_Blue_Logo-png.png',
    },
    {
      name: 'Brain Tumour Foundation of Canada',
      description: 'Leading the way in research, education, and community support for Canadians affected by brain tumours. All net proceeds benefit their programs.',
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
                {/* Logo */}
                <div className="bg-primary-gray rounded-lg h-32 flex items-center justify-center mb-4 p-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="object-contain max-h-20"
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
