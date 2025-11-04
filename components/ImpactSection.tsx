'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaMicroscope, FaUsers, FaChartLine, FaAward } from 'react-icons/fa'

export default function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Lead Researcher, The Neuro',
      quote: 'The funding from Music is Medicine has enabled us to pursue innovative research paths we couldn\'t have explored otherwise. We\'re making real breakthroughs in understanding glioblastoma thanks to this support.',
      image: '/images/testimonial-1.jpg',
    },
    {
      name: 'Michael Thompson',
      role: 'Brain Cancer Survivor',
      quote: 'When I was diagnosed, I felt hopeless. But knowing that initiatives like Music is Medicine are funding research gives me and my family real hope for better treatments and ultimately, a cure.',
      image: '/images/testimonial-2.jpg',
    },
    {
      name: 'Jennifer Lee',
      role: 'Family Member',
      quote: 'My husband is fighting glioblastoma. The research funded by Music is Medicine directly impacts our lives. Every dollar raised brings us closer to more effective treatments and extends precious time with loved ones.',
      image: '/images/testimonial-3.jpg',
    },
    {
      name: 'Dr. James Rodriguez',
      role: 'Neurosurgeon, McGill University',
      quote: 'Clinical trials funded by Music is Medicine are generating valuable data that\'s changing how we approach brain cancer treatment. This community support translates directly into medical advances.',
      image: '/images/testimonial-4.jpg',
    },
  ]

  const achievements = [
    {
      icon: FaAward,
      value: '$600K+',
      label: 'Funds Raised',
      description: 'Supporting research and patient programs',
    },
    {
      icon: FaUsers,
      value: '1000s',
      label: 'Supporters',
      description: 'Brought together nationwide',
    },
    {
      icon: FaChartLine,
      value: '100%',
      label: 'Net Proceeds',
      description: 'Donated to the Foundation',
    },
    {
      icon: FaMicroscope,
      value: '40+',
      label: 'Years of Impact',
      description: 'Brain Tumour Foundation\'s legacy',
    },
  ]

  const researchAreas = [
    {
      title: 'Research & Innovation',
      description: 'Funding groundbreaking research to advance brain tumour treatment and find new cures.',
    },
    {
      title: 'Education & Awareness',
      description: 'Building national awareness about brain cancer and its effects on families across Canada.',
    },
    {
      title: 'Patient & Family Support',
      description: 'Providing education, resources, and support for patients and caregivers throughout their journey.',
    },
    {
      title: 'Advocacy & Policy',
      description: 'Working to improve outcomes through advocacy and policy changes at the national level.',
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
            Our <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real results from your support – advancing research, creating hope, and saving lives
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
            How Your Support Helps
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
            Stories of Hope & Impact
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
              aria-label="Previous testimonial"
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
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Next testimonial"
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
            Supporting the Brain Tumour Foundation of Canada
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="p-6 bg-primary-gray rounded-lg text-center">
              <div className="flex items-center justify-center h-24 mb-4">
                <img
                  src="/logo/brain-tumour-foundation-logo.png"
                  alt="Brain Tumour Foundation of Canada"
                  className="object-contain max-h-20 max-w-full"
                />
              </div>
              <h4 className="text-xl font-bold text-primary-blue mb-2">
                Brain Tumour Foundation of Canada
              </h4>
              <p className="text-text-secondary text-sm mb-4">
                For over four decades, the Brain Tumour Foundation of Canada has led the way in research, education, and community support.
                Its mission is to improve outcomes, fund innovation, and offer hope to every Canadian affected by a brain tumour.
              </p>
              <a
                href="https://www.braintumour.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-blue font-semibold hover:text-accent-purple transition-colors duration-300"
              >
                Visit the Brain Tumour Foundation →
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
            Be Part of the Solution
          </h3>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Every contribution – whether streaming, purchasing, or donating –
            helps fund the research that will lead to better treatments and ultimately, a cure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#singles"
              className="bg-accent-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Listen to the Singles
            </a>
            <a
              href="#donate"
              className="bg-accent-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Make a Donation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
