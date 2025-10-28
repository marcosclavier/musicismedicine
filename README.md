# Music is Medicine - Landing Page

A charity website featuring 5 exclusive singles by Grammy-winning artist Alan Parsons, raising funds for brain cancer research at The Neuro.

## 🎵 Project Overview

This is the official landing page for Music is Medicine's charity singles initiative. The website showcases:

- 5 exclusive charity singles releasing monthly (October 2025 - February 2026)
- Information about the initiative and its founders
- Ways to listen, purchase, and donate
- Impact stories and testimonials
- Seamless integration with streaming platforms and donation portals

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository (or you're already in it!)
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: React Icons, React Scroll
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
alan-parsons-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and Tailwind
├── components/
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── HeroBanner.tsx       # Hero section with CTA
│   ├── AboutSection.tsx     # About the initiative
│   ├── VisionariesSection.tsx  # Robert Frances & Alan Parsons
│   ├── SinglesSection.tsx   # The 5 singles showcase
│   ├── ListenSection.tsx    # Streaming/purchase options
│   ├── DonateSection.tsx    # Donation information
│   ├── ImpactSection.tsx    # Research impact & testimonials
│   └── Footer.tsx           # Footer with CTAs
├── public/
│   ├── MIM-logo-cropped.png # Logo
│   └── images/              # Additional images (to be added)
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Colors

- **Primary Blue**: `#0077B6` - Trust and calmness
- **Accent Purple**: `#8B5CF6` - Music and energy
- **Accent Orange**: `#F97316` - Hope and action
- **Accent Green**: `#10B981` - Impact and success

### Fonts

- **Headings**: Poppins
- **Body**: Inter

## 📱 Features

### Implemented

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Animated sections with Framer Motion
- ✅ 8 main sections covering all requirements
- ✅ Interactive elements (audio player placeholders, testimonial carousel)
- ✅ SEO-optimized with meta tags and Open Graph
- ✅ Accessibility features (WCAG 2.1 AA compliant)

### To Be Added

- 🔄 Actual audio snippets for singles
- 🔄 High-resolution images and artwork
- 🔄 Real testimonial photos and videos
- 🔄 Integration with streaming platform APIs
- 🔄 Integration with McGill donation portal
- 🔄 Newsletter signup backend
- 🔄 Analytics (Google Analytics, Meta Pixel)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Next.js and deploy

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Environment Variables

Add these in your Vercel dashboard or `.env.local`:

```bash
# Add any API keys here when integrating services
# NEXT_PUBLIC_GA_ID=your-google-analytics-id
# NEXT_PUBLIC_SPOTIFY_API_KEY=your-spotify-key
```

## 📝 Content Updates

### Adding Real Images

1. Add images to `/public/images/`
2. Update component image paths:
   - Single artwork: `SinglesSection.tsx`
   - Team photos: `VisionariesSection.tsx`
   - Testimonials: `ImpactSection.tsx`

### Adding Audio Snippets

1. Add audio files to `/public/audio/`
2. Update `SinglesSection.tsx` with actual file paths
3. Ensure files are 30-60 seconds and compressed for web

### Updating Content

- **Singles info**: Edit `SinglesSection.tsx`
- **Testimonials**: Edit `ImpactSection.tsx`
- **Donation tiers**: Edit `DonateSection.tsx`
- **Stats & metrics**: Edit `AboutSection.tsx` and `ImpactSection.tsx`

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📊 Performance

Target metrics:
- Page load: < 3 seconds
- Lighthouse Performance: > 90
- Lighthouse Accessibility: 100
- Mobile-friendly: Yes

## 🤝 Contributing

This is a charity project. For questions or contributions:

**Contact**: peakcommunication@peakgroup.com

## 📄 License

© 2025 PEAK Financial Group. All rights reserved.

Part of the #PEAKWithPurpose initiative.

---

## 🎯 Next Steps

1. **Add Content**: Replace placeholder images and add real content
2. **Integrate APIs**: Connect streaming platforms and donation portal
3. **Test**: Cross-browser testing and user acceptance testing
4. **Launch**: Deploy before October 30, 2025 (first single release)

**Website**: [musicismedicine.ca](https://musicismedicine.ca)

Made with ❤️ to support brain cancer research at The Neuro.
