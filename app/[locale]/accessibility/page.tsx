'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaUniversalAccess, FaKeyboard, FaMobileAlt, FaVolumeUp } from 'react-icons/fa'

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-blue to-accent-purple text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 mb-4"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold">Accessibility Statement</h1>
          <p className="mt-2 text-white/90">Last Updated: November 4, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Commitment to Accessibility</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Music Is Medicine is committed to ensuring digital accessibility for people with disabilities.
              We are continually improving the user experience for everyone and applying the relevant
              accessibility standards.
            </p>
            <p className="text-text-secondary leading-relaxed">
              As a charitable initiative supporting brain cancer research, we believe that everyone should
              have equal access to information about our mission, music, and ways to contribute.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Standards and Guidelines</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              These guidelines explain how to make web content more accessible for people with disabilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Accessibility Features</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary-gray rounded-lg p-6">
                <FaKeyboard className="text-3xl text-primary-blue mb-3" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Keyboard Navigation</h3>
                <p className="text-text-secondary">
                  Our website can be navigated using keyboard controls. Use Tab to move forward, Shift+Tab to move backward, and Enter to activate links and buttons.
                </p>
              </div>

              <div className="bg-primary-gray rounded-lg p-6">
                <FaMobileAlt className="text-3xl text-primary-blue mb-3" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Responsive Design</h3>
                <p className="text-text-secondary">
                  The website is fully responsive and works across different devices and screen sizes, including mobile phones and tablets.
                </p>
              </div>

              <div className="bg-primary-gray rounded-lg p-6">
                <FaUniversalAccess className="text-3xl text-primary-blue mb-3" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Screen Reader Compatible</h3>
                <p className="text-text-secondary">
                  We use semantic HTML and ARIA labels to ensure compatibility with screen readers like JAWS, NVDA, and VoiceOver.
                </p>
              </div>

              <div className="bg-primary-gray rounded-lg p-6">
                <FaVolumeUp className="text-3xl text-primary-blue mb-3" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Clear Audio Controls</h3>
                <p className="text-text-secondary">
                  Music previews and audio content include accessible controls with clear labels and keyboard support.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-text-primary mb-3">Additional Features</h3>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li><strong>Color Contrast:</strong> Text and interactive elements meet WCAG AA contrast requirements</li>
              <li><strong>Text Sizing:</strong> Text can be resized up to 200% without loss of content or functionality</li>
              <li><strong>Alternative Text:</strong> Images include descriptive alt text for screen readers</li>
              <li><strong>Focus Indicators:</strong> Clear visual indicators show which element has keyboard focus</li>
              <li><strong>Descriptive Links:</strong> Link text clearly describes the destination</li>
              <li><strong>Form Labels:</strong> All form inputs have associated labels</li>
              <li><strong>Consistent Navigation:</strong> Navigation structure remains consistent throughout the site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Browser Compatibility</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our website is designed to work with the following assistive technologies and browsers:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Modern versions of Chrome, Firefox, Safari, and Edge</li>
              <li>Screen readers: JAWS, NVDA, VoiceOver, TalkBack</li>
              <li>Voice recognition software: Dragon NaturallySpeaking</li>
              <li>Screen magnification software: ZoomText, MAGic</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Content</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Some content on our website comes from third-party services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li><strong>Streaming Platforms:</strong> Spotify and Qobuz embeds - accessibility determined by those platforms</li>
              <li><strong>Donation Platform:</strong> Brain Tumour Foundation of Canada's donation system</li>
              <li><strong>Social Media:</strong> Links to social media platforms</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              While we strive to ensure all linked content is accessible, we cannot guarantee the
              accessibility of third-party websites and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Known Limitations</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We are actively working to improve accessibility, but acknowledge the following limitations:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Some animated elements may not be fully controllable by all users</li>
              <li>Third-party embedded content may not meet all accessibility standards</li>
              <li>Some complex visual content may not be fully described</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              We are committed to addressing these issues in future updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Assistive Technology Tips</h2>

            <h3 className="text-xl font-semibold text-text-primary mb-3">Browser Accessibility Features</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Most modern browsers include built-in accessibility features:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li><strong>Zoom:</strong> Press Ctrl/Cmd + Plus (+) to zoom in, Ctrl/Cmd + Minus (-) to zoom out</li>
              <li><strong>Text Size:</strong> Adjust through your browser's settings menu</li>
              <li><strong>High Contrast:</strong> Enable through your operating system settings</li>
              <li><strong>Reader Mode:</strong> Many browsers offer a simplified reading view</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Feedback and Contact</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We welcome your feedback on the accessibility of Music Is Medicine. If you encounter
              accessibility barriers or have suggestions for improvement, please let us know:
            </p>
            <div className="bg-primary-gray rounded-lg p-6 mb-4">
              <p className="text-text-primary font-semibold mb-2">Contact Information</p>
              <p className="text-text-secondary mb-2">Email: peakcommunication@peakgroup.com</p>
              <p className="text-text-secondary text-sm">
                Please include "Accessibility" in the subject line and provide:
              </p>
              <ul className="list-disc pl-6 mt-2 text-text-secondary text-sm space-y-1">
                <li>The URL or page where you encountered the issue</li>
                <li>A description of the problem</li>
                <li>The assistive technology you were using (if applicable)</li>
              </ul>
            </div>
            <p className="text-text-secondary leading-relaxed">
              We aim to respond to accessibility feedback within 5 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Ongoing Efforts</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We are committed to ongoing accessibility improvements:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Regular accessibility audits and testing with assistive technologies</li>
              <li>Training team members on accessibility best practices</li>
              <li>Incorporating accessibility into our design and development process</li>
              <li>Staying current with evolving accessibility standards and guidelines</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Accessibility Resources</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              For more information about web accessibility:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Web Content Accessibility Guidelines (WCAG): <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-accent-purple">w3.org/WAI/WCAG21/quickref/</a></li>
              <li>WebAIM (Web Accessibility In Mind): <a href="https://webaim.org/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-accent-purple">webaim.org</a></li>
              <li>Accessibility Resources Canada: <a href="https://www.canada.ca/en/employment-social-development/programs/accessible-canada.html" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-accent-purple">canada.ca/accessibility</a></li>
            </ul>
          </section>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-purple transition-colors duration-300"
            >
              <FaArrowLeft />
              Back to Music Is Medicine
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
