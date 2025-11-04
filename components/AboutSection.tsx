'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMusic, FaBrain, FaHeart, FaMicroscope } from 'react-icons/fa'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: '4', label: 'Charity Singles', icon: FaMusic },
    { value: '$600K+', label: 'Already Raised', icon: FaHeart },
    { value: '1000s', label: 'Supporters Nationwide', icon: FaBrain },
    { value: '100%', label: 'Net Proceeds Donated', icon: FaMicroscope },
  ]

  const features = [
    {
      title: 'Music Heals',
      description: 'Music has the power to heal, comfort, and inspire. We channel this power into actionable support for brain cancer research.',
      icon: FaMusic,
    },
    {
      title: 'Research Saves Lives',
      description: 'Every dollar raised supports the Brain Tumour Foundation of Canada in funding research, education, and patient support programs.',
      icon: FaMicroscope,
    },
    {
      title: 'Hope for Families',
      description: 'Supporting patients and families affected by brain tumours across Canada through awareness, research, and community programs.',
      icon: FaHeart,
    },
  ]

  return (
    <section id="about" className="section bg-white" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            About <span className="text-gradient">Music Is Medicine</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Music Is Medicine is a heartfelt Canadian music initiative created by Robert Frances, CEO of PEAK Financial Group and member of the band N2O.
            Four original singles by N2O featuring Grammy-winning artist Alan Parsons, raising funds and awareness for brain cancer research.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-primary-gray rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <stat.icon className="text-4xl text-accent-purple mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-bold text-primary-blue mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-text-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-text-primary mb-6">
              Turning Loss Into Purpose
            </h3>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              After losing a close bandmate to brain cancer, Robert Frances turned that loss into purpose. Together with Alan Parsons,
              he launched Music Is Medicine to use the power of music to raise awareness, support research, and offer hope to families across Canada.
            </p>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              Brain tumours affect thousands of families every year. Through past benefit concerts and early support,
              Music Is Medicine has raised over <span className="font-bold text-primary-blue">$600,000</span> for brain cancer research and programs.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Every stream, download, and share contributes to the mission, with net proceeds donated to the Brain Tumour Foundation of Canada,
              helping fund research, advocacy, and patient support.
            </p>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="card flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-orange rounded-lg flex items-center justify-center">
                    <feature.icon className="text-2xl text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-blue to-accent-purple text-white rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Turning Sound Into Hope for Families Across Canada
          </h3>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto opacity-90">
            Every listener, every share, every act of kindness counts.
            Together, we can make every note a step toward healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#singles"
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-primary-gray transition-colors duration-300"
            >
              Listen to the Singles
            </a>
            <a
              href="#donate"
              className="bg-accent-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Support the Cause
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
