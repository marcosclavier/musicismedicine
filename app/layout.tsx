import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Music is Medicine | 5 Exclusive Singles Featuring Alan Parsons',
  description: 'Music is Medicine presents 5 charity singles featuring Grammy-winning artist Alan Parsons. First single drops October 30, 2025. All proceeds benefit brain cancer research at The Neuro.',
  keywords: ['Music is Medicine', 'Alan Parsons', 'Brain Cancer Research', 'The Neuro', 'Charity Music', 'PEAK Financial Group', 'Robert Frances'],
  authors: [{ name: 'PEAK Financial Group' }],
  openGraph: {
    title: 'Music is Medicine | 5 Exclusive Singles Featuring Alan Parsons',
    description: 'First single drops October 30, 2025. Join the movement to support life-changing brain cancer research.',
    url: 'https://musicismedicine.ca',
    siteName: 'Music is Medicine',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Music is Medicine featuring Alan Parsons',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music is Medicine | 5 Exclusive Singles Featuring Alan Parsons',
    description: 'First single drops October 30, 2025. Support brain cancer research through music.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0077B6" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
