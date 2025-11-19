'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FaMusic, FaHeart, FaDrum } from 'react-icons/fa'
import { GiMusicalKeyboard, GiDrumKit, GiGuitarBassHead, GiGuitarHead } from 'react-icons/gi'
import { useTranslations } from 'next-intl'

export default function BandStorySection() {
  const t = useTranslations('bandStory')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const bandMembers = [
    { name: "Morris Dascal", role: t('members.morris.role'), icon: GiGuitarBassHead },
    { name: "Shawn Dascal", role: t('members.shawn.role'), icon: FaDrum },
    { name: "Rob Frances", role: t('members.rob.role'), icon: GiMusicalKeyboard },
    { name: "David Tondino", role: t('members.david.role'), inMemory: true, icon: GiDrumKit },
    { name: "Peter Winternitz", role: t('members.peter.role'), icon: GiGuitarHead }
  ]

  return (
    <section id="band-story" className="section bg-gradient-to-b from-white to-primary-gray" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent-purple/10 rounded-full mb-4">
            <span className="text-accent-purple font-semibold text-sm uppercase tracking-wide">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Band Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl mb-16"
        >
          <Image
            src="/N2O_band.jpg"
            alt="N2O Band - Morris Dascal, Shawn Dascal, Rob Frances, and Peter Winternitz"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-1 sm:mb-2">N2O</h3>
            <p className="text-white/90 text-base sm:text-lg">{t('photoCaption')}</p>
          </div>
        </motion.div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - The Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaHeart className="text-accent-orange text-2xl" />
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                {t('story.friendshipTitle')}
              </h3>
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                {t.rich('story.paragraph1', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
              <p>
                {t('story.paragraph2')}
              </p>
              <p>
                {t.rich('story.paragraph3', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
            </div>
          </motion.div>

          {/* Right Column - The Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaMusic className="text-primary-blue text-2xl" />
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                {t('mission.title')}
              </h3>
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                {t('mission.paragraph1')}
              </p>
              <p>
                {t.rich('mission.paragraph2', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
              <p>
                {t('mission.paragraph3')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Band Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary text-center mb-8">
            {t('bandTitle')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {bandMembers.map((member, index) => {
              const IconComponent = member.icon
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className={`text-center p-6 rounded-xl ${
                    member.inMemory
                      ? 'bg-gradient-to-br from-accent-purple/20 to-primary-blue/20 border-2 border-accent-purple/30'
                      : 'bg-white shadow-md hover:shadow-lg transition-shadow'
                  }`}
                >
                  <IconComponent className={`mx-auto mb-3 text-3xl ${
                    member.inMemory ? 'text-accent-purple' : 'text-primary-blue'
                  }`} />
                  <h4 className="font-heading font-bold text-text-primary mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">{member.role}</p>
                  {member.inMemory && (
                    <p className="text-xs italic text-accent-purple font-semibold">
                      {t('inMemory')}
                    </p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* David Tondino Tribute */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-blue/10 to-accent-purple/10 rounded-2xl p-8 md:p-12 mb-16 border-l-4 border-accent-purple"
        >
          <div className="max-w-3xl mx-auto text-center">
            <FaHeart className="text-accent-orange text-4xl mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
              {t('tribute.title')}
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed italic mb-6">
              "{t('tribute.quote')}"
            </p>
            <p className="text-text-secondary font-semibold">
              {t('tribute.attribution')}
            </p>
          </div>
        </motion.div>

        {/* Current Work & Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
            {t('currentWork.title')}
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('currentWork.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.reverbnation.com/never2old"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white rounded-full font-semibold hover:bg-primary-blue/90 transition-colors"
            >
              <FaMusic />
              {t('currentWork.button')}
            </a>
          </div>
          <p className="text-text-secondary mt-6 text-sm">
            {t('currentWork.followText')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
