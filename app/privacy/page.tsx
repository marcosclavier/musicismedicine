'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
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
            <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Music Is Medicine ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website musicismedicine.ca and participate in our charitable initiatives.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This initiative is operated by PEAK Financial Group in support of the Brain Tumour Foundation of Canada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-text-primary mb-3">Personal Information</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Name and email address (when subscribing to our newsletter)</li>
              <li>Donation information (processed securely through the Brain Tumour Foundation of Canada's donation platform)</li>
              <li>Contact information when you reach out to us</li>
            </ul>

            <h3 className="text-xl font-semibold text-text-primary mb-3">Usage Information</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may automatically collect certain information about your device and how you interact with our website:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">How We Use Your Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Send newsletter updates about new single releases and research impact</li>
              <li>Process and acknowledge donations (through the Brain Tumour Foundation of Canada)</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
              <li>Analyze website usage and trends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Information Sharing and Disclosure</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li><strong>Brain Tumour Foundation of Canada:</strong> When you make a donation, your information is shared with the Foundation for processing and tax receipt purposes</li>
              <li><strong>Service Providers:</strong> Third-party services that help us operate our website (e.g., Mailchimp for newsletters, analytics providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website.
              You can control cookies through your browser settings, though some features of our website
              may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Links</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our website contains links to third-party websites including Spotify, Qobuz, and the Brain Tumour
              Foundation of Canada's donation platform. We are not responsible for the privacy practices of these
              third-party sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Data Security</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We implement reasonable security measures to protect your personal information. However, no
              method of transmission over the internet or electronic storage is 100% secure. While we strive
              to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Your Rights (Canadian Privacy Law)</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Under Canadian privacy law (PIPEDA), you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Access your personal information we hold</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for certain uses of your information</li>
              <li>Unsubscribe from our newsletter at any time</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              To exercise these rights, please contact us at peakcommunication@peakgroup.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Children's Privacy</h2>
            <p className="text-text-secondary leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly collect
              personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to This Privacy Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-primary-gray rounded-lg p-6">
              <p className="text-text-primary font-semibold mb-2">PEAK Financial Group</p>
              <p className="text-text-secondary">Email: peakcommunication@peakgroup.com</p>
              <p className="text-text-secondary">Music Is Medicine Initiative</p>
            </div>
          </section>

          {/* Back to Top */}
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
