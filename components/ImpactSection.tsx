'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaMicroscope, FaUsers, FaChartLine, FaAward } from 'react-icons/fa'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function ImpactSection() {
  const t = useTranslations('impact')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: t('testimonials.sarah.name'),
      role: t('testimonials.sarah.role'),
      quote: t('testimonials.sarah.quote'),
      image: '/images/testimonial-1.jpg',
    },
    {
      name: t('testimonials.michael.name'),
      role: t('testimonials.michael.role'),
      quote: t('testimonials.michael.quote'),
      image: '/images/testimonial-2.jpg',
    },
    {
      name: t('testimonials.jennifer.name'),
      role: t('testimonials.jennifer.role'),
      quote: t('testimonials.jennifer.quote'),
      image: '/images/testimonial-3.jpg',
    },
    {
      name: t('testimonials.james.name'),
      role: t('testimonials.james.role'),
      quote: t('testimonials.james.quote'),
      image: '/images/testimonial-4.jpg',
    },
  ]

  const achievements = [
    {
      icon: FaAward,
      value: t('achievements.raised.value'),
      label: t('achievements.raised.label'),
      description: t('achievements.raised.description'),
    },
    {
      icon: FaUsers,
      value: t('achievements.supporters.value'),
      label: t('achievements.supporters.label'),
      description: t('achievements.supporters.description'),
    },
    {
      icon: FaChartLine,
      value: t('achievements.proceeds.value'),
      label: t('achievements.proceeds.label'),
      description: t('achievements.proceeds.description'),
    },
    {
      icon: FaMicroscope,
      value: t('achievements.years.value'),
      label: t('achievements.years.label'),
      description: t('achievements.years.description'),
    },
  ]

  const researchAreas = [
    {
      title: t('areas.research.title'),
      description: t('areas.research.description'),
    },
    {
      title: t('areas.education.title'),
      description: t('areas.education.description'),
    },
    {
      title: t('areas.patient.title'),
      description: t('areas.patient.description'),
    },
    {
      title: t('areas.advocacy.title'),
      description: t('areas.advocacy.description'),
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="impact" className="section bg-primary-gray" ref={ref}>
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

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="text-3xl text-white" />
              </div>
              <div className="text-4xl font-bold text-primary-blue mb-2">
                {achievement.value}
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2">
                {achievement.label}
              </h4>
              <p className="text-sm text-text-secondary">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 sm:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">
            {t('supportTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">
                    {area.title}
                  </h4>
                  <p className="text-text-secondary">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-blue to-accent-purple text-white rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            {t('testimonialsTitle')}
          </h3>

          {/* Testimonial Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold">
                {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div className="font-semibold text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-white/80">
                {testimonials[currentTestimonial].role}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label={t('previousTestimonial')}
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`${t('goToTestimonial')} ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label={t('nextTestimonial')}
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Partner Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-6">
            {t('partnerTitle')}
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="p-6 bg-primary-gray rounded-lg text-center">
              <div className="flex items-center justify-center h-24 mb-4">
                <Image
                  src="/logo/brain-tumour-foundation-logo.png"
                  alt="Brain Tumour Foundation of Canada"
                  width={200}
                  height={80}
                  style={{ height: 'auto', width: 'auto', maxHeight: '80px' }}
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-primary-blue mb-2">
                Brain Tumour Foundation of Canada
              </h4>
              <p className="text-text-secondary text-sm mb-4">
                {t('partnerDescription')}
              </p>
              <a
                href="https://www.braintumour.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-blue font-semibold hover:text-accent-purple transition-colors duration-300"
              >
                {t('visitFoundation')}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-3xl font-bold text-text-primary mb-4">
            {t('ctaTitle')}
          </h3>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#singles"
              className="bg-accent-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              {t('listenButton')}
            </a>
            <a
              href="#donate"
              className="bg-accent-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              {t('donateButton')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
