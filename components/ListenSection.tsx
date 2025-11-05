'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaSpotify, FaApple, FaYoutube, FaAmazon, FaShoppingCart, FaHeadphones, FaChevronDown, FaChevronUp, FaMusic } from 'react-icons/fa'
import { SiTidal } from 'react-icons/si'

export default function ListenSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const streamingPlatforms = [
    { name: 'Spotify', icon: FaSpotify, color: 'bg-[#1DB954]', link: 'https://open.spotify.com/track/6e81ngILs9n5EeMQJIUVK3?si=eyUeMGfvS9uINyRPFLQ_8w&nd=1&dlsi=dc22e2de078c4929' },
    { name: 'Qobuz', icon: FaMusic, color: 'bg-[#0067C5]', link: 'https://www.qobuz.com/ca-en/album/radio-n2o-featuring-alan-parsons-live-project/i9croel68wg1a' },
  ]

  const purchaseOptions = [
    {
      title: 'LANDR Distribution',
      description: 'High-quality digital downloads and streaming access',
      icon: FaHeadphones,
      link: '#',
      badge: 'Official',
    },
    {
      title: 'Bandcamp',
      description: 'Support directly with digital downloads and physical copies',
      icon: FaShoppingCart,
      link: '#',
      badge: 'Popular',
    },
    {
      title: 'Official Store',
      description: 'Exclusive bundles and limited edition physical releases',
      icon: FaShoppingCart,
      link: '#',
      badge: 'Exclusive',
    },
  ]

  const faqs = [
    {
      question: 'How do streams and purchases support the cause?',
      answer: 'Net proceeds from streams and purchases are donated to the Brain Tumour Foundation of Canada. Every stream, download, and physical copy sold contributes to funding research, education, and patient support programs.',
    },
    {
      question: 'What audio formats are available?',
      answer: 'Digital downloads are available in high-quality formats including MP3 (320kbps), FLAC, and WAV. Streaming is available in standard and high-definition quality depending on your platform subscription.',
    },
    {
      question: 'Will there be physical copies available?',
      answer: 'Yes! Limited edition physical copies including vinyl records and CDs will be available through our official store. These collectible items make perfect gifts and show your support for the cause.',
    },
    {
      question: 'Can I pre-save upcoming singles?',
      answer: 'Absolutely! Pre-save links for each upcoming single are available on Spotify, Apple Music, and other major platforms. You\'ll be notified immediately when each new single drops.',
    },
    {
      question: 'Is there exclusive content for buyers?',
      answer: 'Yes! Those who purchase the singles receive access to behind-the-scenes content, including studio sessions with Alan Parsons, making-of documentaries, and exclusive artist commentary.',
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="listen" className="section bg-primary-gray" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            How to <span className="text-gradient">Listen & Buy</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stream on your favorite platform or purchase to maximize your impact
          </p>
        </motion.div>

        {/* Streaming Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Stream "Radio" Now
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {streamingPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className={`${platform.color} text-white rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}
              >
                <platform.icon className="text-5xl" />
                <span className="font-semibold text-center text-lg">
                  {platform.name}
                </span>
              </motion.a>
            ))}
          </div>
          <p className="text-center text-text-secondary mt-6">
            Currently available on Spotify and Qobuz
          </p>
        </motion.div>

        {/* Purchase Options - COMMENTED OUT UNTIL INFRASTRUCTURE IS READY */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-text-primary mb-4 text-center">
            Purchase Digital or Physical Copies
          </h3>
          <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
            Purchasing directly contributes more to the cause and gives you access to exclusive perks
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {purchaseOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card relative hover:shadow-2xl transition-all duration-300 group"
              >
                {option.badge && (
                  <div className="absolute -top-3 -right-3 bg-accent-orange text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {option.badge}
                  </div>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="text-3xl text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-3">
                    {option.title}
                  </h4>
                  <p className="text-text-secondary mb-6">
                    {option.description}
                  </p>
                  <a
                    href={option.link}
                    className="inline-block bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-purple transition-colors duration-300"
                  >
                    Visit Store
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-accent-purple to-accent-orange text-white rounded-2xl p-8 mb-16 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Streaming is Support, Listening is Giving
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            When you listen or buy, you're directly supporting the Brain Tumour Foundation of Canada.
            Every action helps turn music into hope for families across Canada.
          </p>
        </motion.div>

        {/* FAQ Section - COMMENTED OUT */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-primary-gray rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-gray transition-colors duration-300"
                >
                  <span className="font-semibold text-lg text-text-primary pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <FaChevronUp className="text-accent-purple flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-accent-purple flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
