'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function TermsOfService() {
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
          <h1 className="text-4xl sm:text-5xl font-bold">Terms of Service</h1>
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
            <h2 className="text-2xl font-bold text-text-primary mb-4">Acceptance of Terms</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Welcome to Music Is Medicine. By accessing or using our website at musicismedicine.ca
              (the "Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not
              agree to these Terms, please do not use the Website.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Music Is Medicine is a charitable initiative operated by PEAK Financial Group in support
              of the Brain Tumour Foundation of Canada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Use of the Website</h2>

            <h3 className="text-xl font-semibold text-text-primary mb-3">Permitted Use</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              You may use the Website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Use the Website in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to any portion of the Website</li>
              <li>Interfere with or disrupt the Website or servers</li>
              <li>Transmit any viruses, malware, or other malicious code</li>
              <li>Collect or harvest information from the Website using automated means</li>
              <li>Use the Website to transmit spam or unsolicited communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Charitable Purpose</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              The primary purpose of this Website is to raise awareness and funds for brain cancer research
              through the Brain Tumour Foundation of Canada. All net proceeds from music sales and streaming,
              as well as direct donations, are donated to the Brain Tumour Foundation of Canada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Donations</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              All donations are processed through the Brain Tumour Foundation of Canada's secure donation
              platform. By making a donation, you agree to the Foundation's terms and conditions.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Donations are final and non-refundable except as required by law. Tax receipts will be issued
              by the Brain Tumour Foundation of Canada in accordance with Canadian tax regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Music and Intellectual Property</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              All music released under the Music Is Medicine initiative, including singles by N2O featuring
              Alan Parsons, is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              When you stream or purchase music through authorized platforms (Spotify, Apple Music, YouTube Music, etc.), you
              are granted a limited, non-exclusive license to access and listen to the music for personal,
              non-commercial use only.
            </p>
            <p className="text-text-secondary leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works, publicly display, or
              publicly perform the music except as permitted by the streaming platform's terms or applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Website Content</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              All content on the Website, including text, graphics, logos, images, and software, is the
              property of PEAK Financial Group, Music Is Medicine, or its content suppliers and is protected
              by Canadian and international copyright laws.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The Music Is Medicine name and logo, as well as associated names and logos, are trademarks
              of PEAK Financial Group. You may not use these marks without prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Links and Services</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              The Website contains links to third-party websites and services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary space-y-2">
              <li>Streaming platforms (Spotify, Apple Music, YouTube Music)</li>
              <li>Brain Tumour Foundation of Canada donation platform</li>
              <li>Social media platforms</li>
              <li>Partner and sponsor websites</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              We are not responsible for the content, privacy practices, or terms of service of these
              third-party sites. Your use of third-party services is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Disclaimer of Warranties</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              THE WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We do not warrant that the Website will be uninterrupted, error-free, or free of viruses
              or other harmful components.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Limitation of Liability</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              To the maximum extent permitted by law, PEAK Financial Group and Music Is Medicine shall
              not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use the Website.
            </p>
            <p className="text-text-secondary leading-relaxed">
              In no event shall our total liability exceed the amount you paid, if any, for accessing the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Indemnification</h2>
            <p className="text-text-secondary leading-relaxed">
              You agree to indemnify and hold harmless PEAK Financial Group, Music Is Medicine, and their
              respective officers, directors, employees, and agents from any claims, damages, losses, or
              expenses (including legal fees) arising from your use of the Website or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Governing Law</h2>
            <p className="text-text-secondary leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Province
              of Quebec and the federal laws of Canada applicable therein, without regard to conflict of
              law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately
              upon posting to the Website. Your continued use of the Website following any changes constitutes
              acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Severability</h2>
            <p className="text-text-secondary leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining
              provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
