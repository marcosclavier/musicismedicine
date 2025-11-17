# Music Is Medicine - Codebase Introduction

## Overview

This is a Next.js-based landing page for **Music Is Medicine**, a charitable music initiative created by Robert Frances (CEO of PEAK Financial Group and member of N2O) featuring Grammy-winning artist Alan Parsons. The project raises funds and awareness for brain cancer research through the Brain Tumour Foundation of Canada.

The website showcases four original charity singles released monthly from November 2025 through February 2026, with net proceeds donated to support brain tumour research, education, and patient programs.

---

## Tech Stack

### Core Framework & Language
- **Next.js 16** - React framework with App Router architecture
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Global styles in `app/globals.css`
- **Google Fonts** - Inter (body) and Poppins (headings)

### Libraries & Dependencies
- **Framer Motion** - Advanced animations and scroll-based interactions
- **React Scroll** - Smooth scrolling navigation between sections
- **React Icons** - Icon library (Font Awesome icons)
- **Next/Image** - Optimized image loading

---

## Project Structure

```
alan-parsons-landing/
├── app/
│   ├── api/
│   │   └── newsletter/
│   │       └── route.ts    # Mailchimp API integration endpoint
│   ├── layout.tsx          # Root layout with metadata & SEO
│   ├── page.tsx            # Main homepage (assembles all sections)
│   └── globals.css         # Global styles, custom animations, CSS variables
├── components/
│   ├── Navigation.tsx      # Fixed header with smooth scroll navigation
│   ├── HeroBanner.tsx      # Animated hero section with CTAs
│   ├── AboutSection.tsx    # Initiative overview with stats
│   ├── VisionariesSection.tsx  # Robert Frances & Alan Parsons profiles
│   ├── SinglesSection.tsx  # Four singles showcase with release schedule
│   ├── ListenSection.tsx   # Streaming platforms & purchase options
│   ├── DonateSection.tsx   # Donation tiers & giving options
│   ├── ImpactSection.tsx   # Research impact & testimonials
│   └── Footer.tsx          # Footer with newsletter signup & form logic
├── public/
│   ├── images/             # Logo files (white & orange variants)
│   ├── logo/               # Partner & sponsor logos (PEAK, LANDR, etc.)
│   ├── alan-parsons.jpg    # Alan Parsons profile photo
│   ├── robert-frances.jpg  # Robert Frances profile photo
│   └── Radio-Final-RGB-1500.jpeg  # First single artwork
├── .env.local              # Environment variables (API keys) - NOT in Git
├── .gitignore              # Files to exclude from Git
├── tailwind.config.js      # Tailwind configuration with custom colors
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
├── codebase-intro.md       # Developer onboarding guide (this file)
├── MAILCHIMP-SETUP.md      # Email newsletter setup instructions
├── website-documentation.md  # Original project documentation
└── phase-2-changes.md      # Phase 2 content updates
```

---

## Page Structure & Sections

The landing page follows a **single-page scrolling architecture** with 9 main sections:

### 1. Navigation (Fixed Header)
- **File**: `components/Navigation.tsx`
- **ID**: N/A (fixed position)
- **Features**:
  - Sticky navigation with background change on scroll
  - Mobile hamburger menu
  - Logo switches between white and orange versions based on scroll state
  - Smooth scroll links to all sections
  - Two CTA buttons: "Listen Now" and "Donate"

### 2. Hero Banner
- **File**: `components/HeroBanner.tsx`
- **ID**: `#hero`
- **Features**:
  - Animated gradient background (see `globals.css` line 107-110)
  - Framer Motion entrance animations
  - Badge highlighting N2O & Alan Parsons
  - Release information for "Radio" (November 4, 2025)
  - Two primary CTAs linking to singles and donate sections
  - Animated scroll indicator

### 3. About Section
- **File**: `components/AboutSection.tsx`
- **ID**: `#about`
- **Features**:
  - Stats grid (4 singles, $600K+ raised, 1000s of supporters, 100% donated)
  - Two-column layout: story text + feature cards
  - Three feature cards: Music Heals, Research Saves Lives, Hope for Families
  - Gradient CTA banner at bottom

### 4. Visionaries Section
- **File**: `components/VisionariesSection.tsx`
- **ID**: `#visionaries`
- **Features**:
  - Two featured profiles: Robert Frances and Alan Parsons
  - Alternating image/text layout
  - Quote blocks with custom styling
  - Key partners grid: PEAK Financial Group, LANDR, Brain Tumour Foundation
  - #PEAKWithPurpose banner

### 5. Singles Section
- **File**: `components/SinglesSection.tsx`
- **ID**: `#singles`
- **Features**:
  - Release schedule banner (November 2025 - February 2026)
  - Four singles with details:
    1. **Radio** (Nov 4, 2025) - Available now with Spotify link
    2. **You & I** (Nov 30, 2025) - Upcoming
    3. **Courage** (Dec 30, 2025) - Upcoming
    4. **Where to Go** (Feb 28, 2026) - Upcoming
  - Album artwork display (Radio has real artwork, others show placeholders)
  - Play/pause button overlays (UI only, no actual audio player implemented)
  - Theme tags for each single
  - Status badges (Available Now / Coming Soon)

### 6. Listen Section
- **File**: `components/ListenSection.tsx`
- **ID**: `#listen`
- **Features**:
  - Streaming platform buttons (Spotify, Apple Music, YouTube, Amazon, Tidal)
  - Purchase options explanation
  - FAQ accordion
  - Impact messaging: "Every listen helps turn music into medicine"

### 7. Donate Section
- **File**: `components/DonateSection.tsx`
- **ID**: `#donate`
- **Features**:
  - Five donation tiers ($10, $25, $50, $100, Custom)
  - Impact descriptions for each tier
  - One-time vs monthly donation options
  - Links to Brain Tumour Foundation donation page
  - Benefits checklist (tax-receiptable, secure, etc.)
  - Corporate matching information

### 8. Impact Section
- **File**: `components/ImpactSection.tsx`
- **ID**: `#impact`
- **Features**:
  - Research achievements at The Neuro
  - Testimonials carousel
  - Partner organizations
  - Social proof and credibility building

### 9. Footer
- **File**: `components/Footer.tsx`
- **ID**: N/A
- **Features**:
  - Newsletter signup
  - Social media links
  - Quick navigation
  - Contact information
  - Legal links (privacy policy, terms)

---

## Design System

### Color Palette

Colors are defined in two places:
1. **CSS Variables** (`app/globals.css` lines 8-17)
2. **Tailwind Config** (`tailwind.config.js` lines 9-24)

| Color | CSS Variable | Tailwind Class | Hex Code | Usage |
|-------|-------------|----------------|----------|-------|
| Primary Blue | `--primary-blue` | `primary-blue` | `#0077B6` | Headers, links, primary CTA |
| Primary Gray | `--primary-gray` | `primary-gray` | `#F8F9FA` | Backgrounds, cards |
| Accent Purple | `--accent-purple` | `accent-purple` | `#8B5CF6` | Secondary CTA, highlights |
| Accent Orange | `--accent-orange` | `accent-orange` | `#F97316` | Donate button, emphasis |
| Accent Green | `--accent-green` | `accent-green` | `#10B981` | Success states, "Available" badges |
| Text Primary | `--text-primary` | `text-primary` | `#1F2937` | Body text |
| Text Secondary | `--text-secondary` | `text-secondary` | `#6B7280` | Secondary text |

### Typography

**Fonts** (loaded from Google Fonts in `globals.css`):
- **Inter** - Body text, default font
- **Poppins** - Headings (h1-h6)

**Font Families** (Tailwind config):
- `font-sans` - Inter
- `font-heading` - Poppins

### Custom CSS Classes

Defined in `app/globals.css`:

| Class | Purpose | Location |
|-------|---------|----------|
| `.gradient-bg` | Animated gradient background | Line 106-110 |
| `.text-gradient` | Gradient text effect | Line 118-120 |
| `.btn-primary` | Primary button style | Line 72-74 |
| `.btn-secondary` | Secondary button style | Line 76-78 |
| `.btn-outline` | Outline button style | Line 80-82 |
| `.section` | Section spacing | Line 85-87 |
| `.section-container` | Max-width container | Line 89-91 |
| `.card` | Card component style | Line 113-115 |

### Animations

**Tailwind Animations** (defined in `tailwind.config.js` lines 29-46):
- `fade-in` - Fade in effect
- `slide-up` - Slide up with fade
- `slide-down` - Slide down with fade

**Framer Motion** - Used extensively throughout components for:
- Scroll-triggered animations (using `useInView` hook)
- Entrance animations (`initial`, `animate`, `transition` props)
- Hover effects (`whileHover` prop)

---

## Key Features & Functionality

### 1. Smooth Scroll Navigation

**Implementation**: React Scroll library (`components/Navigation.tsx`)
- Clicking nav links smoothly scrolls to section IDs
- Uses `offset={-80}` to account for fixed header height
- `spy={true}` highlights active section in nav

**Usage Example**:
```tsx
<Link
  to="about"        // Target section ID
  smooth={true}     // Enable smooth scrolling
  duration={500}    // Animation duration (ms)
  spy={true}        // Highlight active section
  offset={-80}      // Offset for fixed header
/>
```

### 2. Scroll-Based Animations

**Implementation**: Framer Motion's `useInView` hook
- Animations trigger when section enters viewport
- `once: true` ensures animations run only once
- `margin: "-100px"` triggers animation before section is fully visible

**Pattern** (used in most section components):
```tsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

// In component JSX:
<section ref={ref}>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    {/* Content */}
  </motion.div>
</section>
```

### 3. Newsletter Integration

**Implementation**: Mailchimp API integration via Next.js API routes

**API Route** (`app/api/newsletter/route.ts`):
- Server-side POST endpoint at `/api/newsletter`
- Validates email addresses
- Submits to Mailchimp API
- Handles errors gracefully (duplicate emails, invalid data)
- Returns appropriate status codes and messages

**Frontend** (`components/Footer.tsx` lines 14-48, 211-257):
- Email input with validation
- Form submission with async/await
- Loading state with spinner animation
- Success message (green) or error message (red)
- Auto-clears input on success
- Disabled state during submission

**Security**:
- API key stored in `.env.local` (server-side only)
- Never exposed to browser/client code
- Secure HTTPS communication with Mailchimp

**Tags Applied to Subscribers**:
- "Website Signup"
- "Music Is Medicine"
- Source: "Music Is Medicine Website"

**Setup Required**: See `MAILCHIMP-SETUP.md` for complete configuration instructions.

### 4. Responsive Navigation

**Desktop** (`components/Navigation.tsx` line 57-93):
- Horizontal nav menu
- Two CTA buttons visible

**Mobile** (`components/Navigation.tsx` line 96-154):
- Hamburger menu icon
- Slide-down menu with vertical links
- Auto-closes on link click

**Scroll State** (`components/Navigation.tsx` line 12-18):
- Transparent background when at top
- White background with shadow when scrolled
- Logo switches from white to orange version

### 5. Image Optimization

All images use Next.js `<Image>` component for:
- Automatic responsive sizing
- Lazy loading
- WebP conversion
- Blur placeholder (if configured)

**Example**:
```tsx
<Image
  src="/robert-frances.jpg"
  alt="Robert Frances"
  fill                    // Fills parent container
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"  // Responsive sizes
/>
```

---

## Important Files to Know

### 1. `app/layout.tsx` - SEO & Metadata

**Critical for**:
- Page title and meta description
- Open Graph tags (social media sharing)
- Twitter Card configuration
- Favicon and theme color
- Search engine indexing rules

**Key metadata** (lines 4-35):
- **Title**: "Music Is Medicine – N2O & Alan Parsons for Brain Cancer"
- **Description**: Charity music project description
- **URL**: musicismedicine.ca
- **OG Image**: `/images/og-image.jpg` (needs to be created at 1200x630px)

### 2. `app/page.tsx` - Page Assembly

This is the main homepage that imports and arranges all sections in order. The page uses `'use client'` directive because it contains client-side components (animations, scroll effects).

**Section Order**:
1. Navigation
2. HeroBanner
3. AboutSection
4. VisionariesSection
5. SinglesSection
6. ListenSection
7. DonateSection
8. ImpactSection
9. Footer

### 3. `tailwind.config.js` - Design Tokens

**Content Paths** (lines 3-6): Tells Tailwind where to look for classes
**Theme Extension** (lines 8-48): Custom colors, fonts, animations

**Important**: If you add new colors, add them here to use Tailwind classes like `bg-custom-color`.

### 4. `app/globals.css` - Global Styles

**Key sections**:
- **Lines 1-2**: Google Fonts import
- **Lines 8-17**: CSS variables (can be referenced in JavaScript)
- **Lines 19-34**: Reset and base styles
- **Lines 42-58**: Custom scrollbar styling
- **Lines 94-110**: Gradient animation keyframes
- **Lines 112-120**: Reusable utility classes

---

## External Links & Integrations

### Streaming Platforms

**Spotify**:
- First single "Radio" link: `https://open.spotify.com/track/6e81ngILs9n5EeMQJIUVK3`
- Located in: `components/SinglesSection.tsx` line 23

### Donation Portal

**Brain Tumour Foundation of Canada**:
- URL: `https://www.braintumour.ca/general-giving/`
- Used in: `components/DonateSection.tsx` lines 175, 196

**Foundation Website**:
- URL: `https://www.braintumour.ca/`
- Used in: `components/DonateSection.tsx` line 252

### Contact Email

- **PEAK Communications**: `peakcommunication@peakgroup.com`
- Used for: Corporate sponsorship inquiries
- Located in: `components/DonateSection.tsx` line 278

### Music Streaming Links

- **Apple Music**: `https://music.apple.com/fi/artist/n2o/1324337417`
- **YouTube Music**: `https://music.youtube.com/channel/UCEyKQl1b3XKYWpZLP2_MNjw`
- Used in: `components/ListenSection.tsx`
- **Note**: Audio snippets need to be extracted and hosted locally

### Newsletter / Email Marketing

**Platform**: Mailchimp
- **API Integration**: `/app/api/newsletter/route.ts`
- **Frontend Component**: `components/Footer.tsx` (lines 199-257)
- **Configuration**: `.env.local` (environment variables)
- **Setup Guide**: `MAILCHIMP-SETUP.md`

**Environment Variables** (in `.env.local`):
- `MAILCHIMP_API_KEY` - Your Mailchimp API key
- `MAILCHIMP_AUDIENCE_ID` - Your Mailchimp list/audience ID
- `MAILCHIMP_API_SERVER` - Server prefix (e.g., "us22")

**Features**:
- Newsletter signup form in footer
- Real-time validation and feedback
- Loading states and success/error messages
- Automatic tagging: "Website Signup", "Music Is Medicine"
- CASL (Canadian Anti-Spam Legislation) compliant
- Server-side API route for security

**Subscriber Data Collected**:
- Email address (required)
- Source tag: "Music Is Medicine Website"
- Signup date (automatic)
- Tags for segmentation

**See**: `MAILCHIMP-SETUP.md` for complete setup instructions, campaign templates, and best practices.

---

## Asset Requirements

### Current Assets

Located in `public/` directory:

**Logos**:
- ✅ Music Is Medicine logo (white & orange variants)
- ✅ PEAK Financial Group logo
- ✅ LANDR logo
- ✅ Brain Tumour Foundation logo
- ✅ The Neuro logo
- ✅ Sponsor logos (National Bank, Air Canada, TD, etc.)

**Photos**:
- ✅ Robert Frances (`robert-frances.jpg`)
- ✅ Alan Parsons (`alan-parsons.jpg`)

**Single Artwork**:
- ✅ Radio (`Radio-Final-RGB-1500.jpeg`)
- ❌ You & I (placeholder used)
- ❌ Courage (placeholder used)
- ❌ Where to Go (placeholder used)

### Missing Assets

**Required for full launch**:

1. **Open Graph Image** (`/images/og-image.jpg`)
   - Size: 1200x630px
   - Purpose: Social media sharing preview
   - Reference: `app/layout.tsx` line 16

2. **Twitter Card Image** (`/images/twitter-image.jpg`)
   - Size: 1200x675px
   - Purpose: Twitter sharing preview
   - Reference: `app/layout.tsx` line 29

3. **Favicon** (`/favicon.ico`)
   - Standard favicon file
   - Reference: `app/layout.tsx` line 45

4. **Apple Touch Icon** (`/apple-touch-icon.png`)
   - Size: 180x180px
   - Purpose: iOS home screen icon
   - Reference: `app/layout.tsx` line 46

5. **Single Artwork** (for upcoming singles)
   - Format: JPEG or PNG
   - Size: 3000x3000px recommended
   - Location: Update paths in `components/SinglesSection.tsx` lines 32, 42, 52

6. **Audio Snippets** (30-60 seconds per single)
   - Format: MP3
   - Location: Create `/public/audio/` directory
   - Update paths in `components/SinglesSection.tsx` lines 22, 33, 43, 53

---

## Important Dates & Content

### Release Schedule

From `components/SinglesSection.tsx` and `phase-2-changes.md`:

| # | Title | Release Date | Status | Notes |
|---|-------|-------------|--------|-------|
| 1 | Radio | November 4, 2025 | Available | Produced & Mixed by Alan Parsons |
| 2 | You & I | November 30, 2025 | Upcoming | Tribute to love & resilience |
| 3 | Courage | December 30, 2025 | Upcoming | About strength & healing |
| 4 | Where to Go | February 28, 2026 | Upcoming | Reflection on purpose & hope |

**Note**: There's a discrepancy in dates. The hero banner says "November 4, 2025" while phase-2-changes.md says "October 30, 2025". The code currently uses **November 4, 2025**.

### Key Statistics

From `components/AboutSection.tsx` and `components/DonateSection.tsx`:

- **$600,000+** already raised through benefit concerts and early support
- **4** charity singles
- **100%** of net proceeds donated
- **1000s** of supporters nationwide
- First benefit concert: **May 14, 2024** at Théâtre Maisonneuve, Montreal

---

## Development & Deployment

### Local Development

```bash
# Install dependencies
npm install

# Set up environment variables (required for newsletter)
# Copy .env.local.example or create .env.local with:
# MAILCHIMP_API_KEY=your_api_key
# MAILCHIMP_AUDIENCE_ID=your_audience_id
# MAILCHIMP_API_SERVER=us22

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

**Development server runs at**:
- Local: `http://localhost:3000`
- Network: `http://192.168.x.x:3000` (accessible from other devices)

**Environment Variables**:
- Create `.env.local` in project root
- Add Mailchimp credentials (see `MAILCHIMP-SETUP.md`)
- Restart dev server after adding variables
- File is automatically excluded from Git via `.gitignore`

### Build Output

Next.js App Router generates:
- Static pages (pre-rendered at build time)
- Client-side JavaScript bundles
- Optimized images
- CSS files

### Deployment Checklist

Before deploying to production:

1. **Content Updates**:
   - [ ] Replace all placeholder images with real assets
   - [ ] Add missing OG images and favicons
   - [ ] Upload all single artwork (3000x3000px)
   - [ ] Add audio snippets to `/public/audio/`
   - [ ] Update testimonials with real quotes/photos

2. **Integrations**:
   - [ ] Connect Spotify/Apple Music APIs for pre-save
   - [x] Set up email newsletter (Mailchimp) - **COMPLETED**
   - [ ] Configure Mailchimp Audience ID in production environment
   - [ ] Add Google Analytics tracking code
   - [ ] Add Meta Pixel for Facebook ads (if needed)
   - [ ] Test donation links to Brain Tumour Foundation
   - [ ] Test newsletter signup on production

3. **SEO & Performance**:
   - [ ] Run Lighthouse audit (aim for 90+ scores)
   - [ ] Generate sitemap.xml
   - [ ] Add robots.txt
   - [ ] Submit to Google Search Console
   - [ ] Test Open Graph tags with Facebook Debugger

4. **Domain & Hosting**:
   - [ ] Register/point musicismedicine.ca domain
   - [ ] Deploy to Vercel (recommended for Next.js)
   - [ ] Set up SSL certificate (automatic with Vercel)
   - [ ] Configure CDN (included with Vercel)

### Recommended Deployment: Vercel

1. Push code to GitHub (**Important**: `.env.local` will NOT be pushed - it's in `.gitignore`)
2. Import repository to Vercel
3. **Add environment variables in Vercel dashboard**:
   - Go to Project Settings > Environment Variables
   - Add `MAILCHIMP_API_KEY`
   - Add `MAILCHIMP_AUDIENCE_ID`
   - Add `MAILCHIMP_API_SERVER`
   - Apply to Production, Preview, and Development environments
4. Auto-deploys on every push to main branch
5. Free SSL, CDN, and serverless functions included

**Domain Configuration**:
- Point `musicismedicine.ca` DNS to Vercel
- A record: `76.76.21.21`
- Or use Vercel's nameservers

**Environment Variables in Production**:
- NEVER commit `.env.local` to Git
- Add all environment variables through Vercel dashboard
- Each deployment environment (production/preview/development) can have different values
- Changes to environment variables require redeployment

---

## Common Tasks

### Adding a New Section

1. Create component file in `/components/`
2. Use the section pattern:
```tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function NewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="new-section" className="section bg-white" ref={ref}>
      <div className="section-container">
        {/* Content */}
      </div>
    </section>
  )
}
```
3. Import in `app/page.tsx`
4. Add navigation link in `components/Navigation.tsx`

### Updating Colors

1. Add to `tailwind.config.js`:
```js
colors: {
  'custom-color': '#HEXCODE',
}
```
2. Use in components: `className="bg-custom-color"`

### Adding a New Single

1. Update `components/SinglesSection.tsx` singles array (lines 13-55)
2. Add artwork to `/public/` directory
3. Add audio snippet to `/public/audio/`
4. Update Spotify/streaming links when available

### Changing Text Content

Most text content is hardcoded in component files. To update:

1. **Hero Banner**: `components/HeroBanner.tsx`
2. **About Section**: `components/AboutSection.tsx`
3. **Singles Info**: `components/SinglesSection.tsx`
4. **Donation Tiers**: `components/DonateSection.tsx`

**Best Practice**: Consider moving large text blocks to a separate content file or CMS for easier updates.

---

## Accessibility Considerations

The codebase includes several accessibility features:

1. **Semantic HTML**: Proper use of `<section>`, `<nav>`, `<header>`, etc.
2. **ARIA Labels**: On buttons and interactive elements
3. **Focus Styles**: Custom focus outlines (`globals.css` lines 66-69)
4. **Alt Text**: All images have descriptive alt attributes
5. **Keyboard Navigation**: All interactive elements are keyboard accessible

**Note**: Before launch, run an accessibility audit with:
- Lighthouse (DevTools)
- axe DevTools extension
- WAVE browser extension

Target: **WCAG 2.1 AA compliance**

---

## Performance Optimizations

Current optimizations:

1. **Next.js Image Component**: Automatic image optimization
2. **Framer Motion**: `once: true` prevents re-animation on scroll
3. **Code Splitting**: Automatic with Next.js App Router
4. **CSS-in-JS**: Minimal runtime overhead with Tailwind
5. **Lazy Loading**: Images load as they enter viewport

**Potential Improvements**:
- Add `loading="eager"` to hero banner images
- Preload critical fonts
- Use next/font for font optimization
- Compress images with next-gen formats (WebP, AVIF)

---

## Browser Support

Target browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

**Known Issues**: None currently documented

---

## Troubleshooting

### Common Issues

**1. Images Not Loading**
- Check file paths are correct (case-sensitive on Linux servers)
- Ensure images are in `/public/` directory
- Verify image file names in component code

**2. Smooth Scroll Not Working**
- Ensure section has correct `id` attribute
- Check `offset` value accounts for fixed header
- Verify React Scroll is properly imported

**3. Animations Not Triggering**
- Check `useInView` hook is set up correctly
- Ensure `ref` is attached to section element
- Verify Framer Motion is installed

**4. Build Errors**
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder: `rm -rf .next`
- Check for TypeScript errors: `npm run lint`

### Development Tips

- **Hot Reload**: Save files to see changes instantly
- **TypeScript Errors**: Check terminal for detailed error messages
- **Component Inspector**: Use React DevTools browser extension
- **Performance**: Use Lighthouse in Chrome DevTools
- **Mobile Testing**: Use Chrome DevTools device emulation

---

## Git Workflow

Current branch structure:
- **main**: Production-ready code
- Feature branches: Create for new features or fixes

**Commit Messages**: Use descriptive commits
- Good: "Add audio player to Singles section"
- Bad: "Update files"

**Before Committing**:
1. Test changes locally
2. Run linter: `npm run lint`
3. Build successfully: `npm run build`
4. Check for console errors

---

## Contact & Support

**Project Lead**: Robert Frances
**Organization**: PEAK Financial Group
**Email**: peakcommunication@peakgroup.com
**Website**: musicismedicine.ca (pending launch)

**Technical Questions**: Refer to Next.js documentation at nextjs.org/docs

---

## Version History

- **v1.0.0** (Current): Initial landing page with all 8 sections
- **Phase 2**: Updated content based on `phase-2-changes.md`

---

## Quick Reference Card

### File Locations Cheat Sheet

| Need to Update... | File Location |
|------------------|---------------|
| Page title/SEO | `app/layout.tsx` |
| Section order | `app/page.tsx` |
| Navigation links | `components/Navigation.tsx` |
| Hero headline | `components/HeroBanner.tsx` |
| About text | `components/AboutSection.tsx` |
| Artist profiles | `components/VisionariesSection.tsx` |
| Singles info | `components/SinglesSection.tsx` |
| Streaming links | `components/ListenSection.tsx` |
| Donation tiers | `components/DonateSection.tsx` |
| Impact stats | `components/ImpactSection.tsx` |
| Footer links | `components/Footer.tsx` |
| Color scheme | `tailwind.config.js` + `app/globals.css` |
| Global styles | `app/globals.css` |
| Dependencies | `package.json` |

### ID Reference for Smooth Scroll

| Section | ID | Component |
|---------|----|-----------|
| Hero | `#hero` | HeroBanner |
| About | `#about` | AboutSection |
| Visionaries | `#visionaries` | VisionariesSection |
| Singles | `#singles` | SinglesSection |
| Listen | `#listen` | ListenSection |
| Donate | `#donate` | DonateSection |
| Impact | `#impact` | ImpactSection |

### Color Class Reference

| Purpose | Tailwind Class | Hex |
|---------|---------------|-----|
| Primary CTA | `bg-primary-blue` | #0077B6 |
| Secondary CTA | `bg-accent-purple` | #8B5CF6 |
| Donate Button | `bg-accent-orange` | #F97316 |
| Success State | `bg-accent-green` | #10B981 |
| Background | `bg-primary-gray` | #F8F9FA |
| Text | `text-text-primary` | #1F2937 |
| Muted Text | `text-text-secondary` | #6B7280 |

---

## Final Notes

This codebase is built with **scalability** and **maintainability** in mind:

- **Component-based**: Each section is self-contained
- **Type-safe**: TypeScript catches errors before runtime
- **Performant**: Next.js optimizations built-in
- **Accessible**: WCAG 2.1 AA compliance targeted
- **Responsive**: Mobile-first design approach

**Before deploying features**:
1. Test on multiple browsers
2. Test on mobile devices
3. Verify all links work
4. Check for console errors
5. Run Lighthouse audit
6. Get stakeholder approval

**Remember**: This website supports a charitable cause. Every detail matters in conveying the mission and encouraging support for brain cancer research.

---

**Document Version**: 1.0
**Last Updated**: November 4, 2025
**Maintained By**: Development Team
