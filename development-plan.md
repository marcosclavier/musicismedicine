# Music is Medicine Website Development Plan

## Project Overview

**Website**: musicismedicine.ca
**Purpose**: Landing page for 5 charity singles featuring Alan Parsons to raise funds for brain cancer research at The Neuro
**Launch Target**: Before October 30, 2025 (first single release date)
**Type**: Single-page responsive website with smooth scrolling sections

---

## 1. Technical Stack Recommendation

### Frontend Framework
- **React.js** with Next.js for:
  - SEO optimization (critical for charity awareness)
  - Server-side rendering for fast initial load
  - Easy deployment to Vercel/Netlify
  - Built-in image optimization

### Styling
- **Tailwind CSS** for:
  - Rapid responsive design
  - Consistent design system
  - Easy customization of color scheme
- **Framer Motion** for smooth scroll animations and transitions

### Additional Libraries
- **React Scroll** or **Locomotive Scroll** for smooth scrolling navigation
- **React Player** for embedded audio/video previews
- **React Icons** for social media and UI icons
- **Headless UI** for accessible dropdown/modal components

### Backend/Integration
- **Next.js API routes** for contact form handling
- **Stripe** or **PayPal** for potential direct purchases
- **Google Analytics** and **Meta Pixel** for tracking engagement
- **Mailchimp/SendGrid** for newsletter capture

### Hosting
- **Vercel** (recommended) or **Netlify** for:
  - Automatic HTTPS
  - CDN distribution
  - Easy GitHub integration
  - Free SSL certificates

---

## 2. Site Architecture

### Page Structure (Single-Page with Sections)

```
/
├── Hero Banner (#hero)
├── About the Initiative (#about)
├── Meet the Visionaries (#visionaries)
├── The Singles (#singles)
├── How to Listen and Buy (#listen)
├── How to Donate (#donate)
├── Impact and Testimonials (#impact)
└── Call to Action Footer (#footer)
```

### Navigation
- Fixed/sticky header with transparent-to-solid transition on scroll
- Smooth scroll navigation to anchors
- Mobile hamburger menu
- Sticky CTA buttons ("Listen Now" + "Donate") appearing after hero section

---

## 3. Design System

### Color Palette
**Primary Colors:**
- Medical Blue: `#0077B6` (trust, calmness)
- Clean White: `#FFFFFF`
- Soft Gray: `#F8F9FA` (section backgrounds)

**Accent Colors:**
- Vibrant Purple: `#8B5CF6` (music/energy)
- Warm Orange: `#F97316` (hope/action)
- Success Green: `#10B981` (impact metrics)

**Text:**
- Primary Text: `#1F2937` (dark gray)
- Secondary Text: `#6B7280` (medium gray)

### Typography
- **Headings**: Modern sans-serif (Inter, Poppins, or Montserrat)
- **Body**: Clean readable sans-serif (Inter or System UI)
- **Accent**: Consider music-themed font for "Music is Medicine" logo

### Visual Assets Needed
1. High-quality images:
   - Alan Parsons (studio, performance, portrait)
   - Robert Frances portrait
   - 2024 concert highlights
   - The Neuro/research imagery
   - Abstract music wave visualizations
   - Brain imagery (tasteful/medical)

2. Single artwork (5 covers)
3. Music snippet audio files
4. Video teasers (if available)
5. PEAK Financial Group and sponsor logos

---

## 4. Section-by-Section Development

### 4.1 Hero Banner
**Elements:**
- Full-width background (video or animated gradient)
- Headline: "Music is Medicine Presents: 5 Exclusive Singles Featuring Alan Parsons"
- Subheadline: "First single drops October 30, 2025"
- Alan Parsons image/video teaser
- Dual CTAs: "Listen Now" + "Donate Now" buttons
- Release schedule teaser (5 singles, Oct 2025 - Feb 2026)

**Technical:**
- Responsive background image with overlay
- Auto-playing muted video option (with user controls)
- Animated text entrance
- Button hover effects

### 4.2 About the Initiative
**Elements:**
- Mission statement
- Brain cancer statistics (infographic style)
- Connection to The Neuro/McGill
- Past impact ($500K raised, 4 clinical trials)

**Technical:**
- Animated counter for statistics
- Icon grid for key points
- Two-column layout (text + imagery)

### 4.3 Meet the Visionaries
**Elements:**
- Robert Frances bio + photo
- PEAK Financial Group context
- Alan Parsons bio + photo
- LANDR partnership mention
- Inspirational quotes

**Technical:**
- Card-based layout
- Quote callouts with distinctive styling
- Links to PEAK website and Alan Parsons official site

### 4.4 The Singles
**Elements:**
- List of 5 singles with:
  - Release dates (Oct 2025 - Feb 2026)
  - Artwork preview
  - Title and description
  - Audio snippet player (30-60 seconds)
  - Pre-save/Listen/Buy buttons

**Technical:**
- Timeline/carousel component
- Audio player integration
- Progressive disclosure (show released singles, coming soon for unreleased)
- Integration with Spotify/Apple Music APIs for pre-save

### 4.5 How to Listen and Buy
**Elements:**
- Streaming platform buttons (Spotify, Apple Music, YouTube Music)
- Purchase options (LANDR, Bandcamp, official store)
- Embedded playlist (once available)
- FAQ accordion

**Technical:**
- Icon button grid linking to external platforms
- Embedded Spotify/Apple Music player
- Accordion component for FAQs
- Track listening/click analytics

### 4.6 How to Donate
**Elements:**
- Donation call-to-action
- Impact messaging ("Every dollar funds research")
- Donation form/portal link (McGill University)
- One-time vs. monthly options
- Suggested amounts tied to singles ($10, $25, $50, $100)
- Tax receipt information
- Corporate matching info

**Technical:**
- Embedded donation form OR prominent link to McGill portal
- Form validation if hosting form
- Secure HTTPS connection emphasis
- Thank you message/confirmation

### 4.7 Impact and Testimonials
**Elements:**
- Clinical trial success stories
- Patient/family testimonials (with photos/video)
- Research metrics (lives touched, studies funded)
- Partner logos (The Neuro, sponsors)
- Brain Tumour Foundation of Canada alignment

**Technical:**
- Testimonial carousel
- Animated statistics on scroll
- Video testimonial embeds
- Sponsor logo grid

### 4.8 Call to Action Footer
**Elements:**
- Final CTAs ("Listen to First Single" + "Donate Now")
- Social media links (shareable content)
- Newsletter signup
- Contact: peakcommunication@peakgroup.com
- Site navigation links
- Privacy policy and disclaimers
- "Music is Medicine – Listen, Buy, Donate, and Make a Difference" tagline

**Technical:**
- Email capture form
- Social share buttons (with Open Graph metadata)
- Footer navigation
- Copyright and legal text

---

## 5. Key Integrations

### Music Platforms
- **Spotify for Artists API**: Embed player, pre-save functionality
- **Apple Music Marketing Tools**: Embed player
- **YouTube API**: Video/audio embeds
- **LANDR Distribution**: Purchase links, high-quality audio

### Donation Platform
- **McGill University donation portal**: Direct link or iframe embed
- Ensure tax receipt generation is clear

### Analytics
- **Google Analytics 4**: Track page views, scroll depth, button clicks
- **Meta Pixel**: For social media ad retargeting
- **UTM parameters**: For campaign tracking

### Email Marketing
- **Mailchimp** or **SendGrid**: Newsletter capture and drip campaigns
- Integration with contact form

### Social Media
- **Open Graph tags**: Optimized sharing to Facebook/LinkedIn
- **Twitter Cards**: Rich previews
- **Instagram**: Link in bio optimization

---

## 6. Content Requirements

### Copy Needed
1. Finalized headline variations for A/B testing
2. Single titles and descriptions (5)
3. Full bios for Robert Frances and Alan Parsons
4. Testimonials (3-5 from patients/families/researchers)
5. FAQ answers (streaming, purchasing, donation)
6. Privacy policy and terms
7. Social media share text templates

### Media Assets
1. Professional photography of Alan Parsons (3-5 shots)
2. Robert Frances headshot
3. 2024 concert photos (5-10 high-res)
4. Single artwork (5 covers at 3000x3000px)
5. Audio snippets (30-60 seconds per single)
6. Video teaser (30-90 seconds)
7. The Neuro and PEAK logos (vector format)
8. Sponsor logos (National Bank, Air Canada, etc.)
9. Brain/medical imagery (stock or original)
10. Music wave animations/graphics

---

## 7. Mobile Responsiveness

### Breakpoints
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

### Mobile-Specific Considerations
- Hamburger navigation menu
- Stacked layouts (single column)
- Touch-optimized buttons (minimum 44px height)
- Simplified animations (reduce motion for performance)
- Compressed images with lazy loading
- Mobile-optimized audio player
- Click-to-call for contact email

---

## 8. SEO and Accessibility

### SEO
- **Meta tags**: Title, description, keywords
- **Structured data**: Organization, Event, MusicRecording schema
- **Alt text**: All images descriptive
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Proper crawling directives
- **Page speed**: Target < 3 seconds load time
- **Mobile-first indexing**: Ensure mobile performance

### Accessibility (WCAG 2.1 AA Compliance)
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Keyboard navigation**: All interactive elements accessible via keyboard
- **ARIA labels**: Screen reader support
- **Color contrast**: Minimum 4.5:1 for text
- **Focus indicators**: Visible focus states
- **Alt text**: Descriptive for all images
- **Video captions**: If using video content
- **Skip to content**: Link for screen readers

---

## 9. Development Phases

### Phase 1: Setup and Foundation (Week 1)
- [ ] Initialize Next.js project with Tailwind CSS
- [ ] Set up Git repository and version control
- [ ] Configure ESLint, Prettier for code quality
- [ ] Create component folder structure
- [ ] Implement basic routing and layout
- [ ] Set up design system (colors, typography, spacing)

### Phase 2: Core Sections (Week 2-3)
- [ ] Build Hero Banner with animations
- [ ] Implement About the Initiative section
- [ ] Create Meet the Visionaries section
- [ ] Develop The Singles section with player
- [ ] Build How to Listen and Buy section
- [ ] Implement navigation and smooth scrolling

### Phase 3: Interactivity (Week 4)
- [ ] Integrate audio players
- [ ] Build donation section and form
- [ ] Create Impact and Testimonials section
- [ ] Implement footer with CTAs and newsletter signup
- [ ] Add social sharing functionality

### Phase 4: Integration (Week 5)
- [ ] Connect to music streaming APIs
- [ ] Integrate donation portal
- [ ] Set up Google Analytics and Meta Pixel
- [ ] Configure email marketing integration
- [ ] Test all external links and embeds

### Phase 5: Content and Assets (Week 6)
- [ ] Populate all copy and content
- [ ] Add and optimize all images
- [ ] Upload single artwork
- [ ] Embed audio snippets
- [ ] Add testimonials and stories

### Phase 6: Testing and Optimization (Week 7)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Performance optimization (image compression, lazy loading)
- [ ] Accessibility audit with axe DevTools
- [ ] SEO audit with Lighthouse
- [ ] Fix any bugs or issues

### Phase 7: Pre-Launch (Week 8)
- [ ] Final content review with stakeholders
- [ ] Legal review (privacy policy, terms)
- [ ] Set up domain (musicismedicine.ca)
- [ ] Configure SSL certificate
- [ ] Deploy to staging environment
- [ ] User acceptance testing (UAT)

### Phase 8: Launch (Week 9)
- [ ] Final QA checklist
- [ ] Deploy to production
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring and alerts
- [ ] Launch social media announcements
- [ ] Monitor initial traffic and fix any issues

### Post-Launch: Maintenance
- [ ] Weekly analytics review
- [ ] Content updates as singles release (monthly Oct-Feb)
- [ ] Monitor donation conversions
- [ ] A/B test CTAs and messaging
- [ ] Update testimonials and impact metrics
- [ ] Security patches and dependency updates

---

## 10. Success Metrics (KPIs)

### Traffic
- Unique visitors per month
- Page views
- Average session duration
- Bounce rate (<40% target)

### Engagement
- Scroll depth (% reaching donation section)
- Audio snippet plays
- Social shares
- Newsletter signups

### Conversions
- "Listen Now" clicks (to streaming platforms)
- "Buy" clicks (to purchase platforms)
- Donation form submissions
- Donation amount raised

### Technical
- Page load speed (<3 seconds)
- Mobile usability score (>90 on Google PageSpeed)
- Accessibility score (100 on Lighthouse)
- Zero critical security vulnerabilities

---

## 11. Budget Considerations

### Development Costs
- Developer time: 8-9 weeks (can be compressed with team)
- Design assets: Photography, video, graphic design
- Music production: Singles and snippets (already handled by Alan Parsons/LANDR)

### Ongoing Costs
- Domain registration: ~$15-30/year (.ca domain)
- Hosting: Vercel free tier or Pro ($20/month)
- Email service: Mailchimp free up to 500 contacts, then ~$13/month
- Analytics: Google Analytics (free), Meta Pixel (free)
- SSL Certificate: Free via hosting provider
- Maintenance: Developer time for monthly updates during single releases

### Optional/Premium
- Premium stock photos/videos: $50-200
- Professional copywriting: $500-1500
- Video production: $1000-5000 if creating new content
- Paid ads: Budget TBD for Google/Facebook promotion

---

## 12. Risk Management

### Potential Risks
1. **Content delays**: Single artwork or music snippets not ready by launch
   - *Mitigation*: Use placeholder content, plan for progressive updates

2. **Integration issues**: Music platforms or donation portal connectivity problems
   - *Mitigation*: Test integrations early, have fallback links

3. **Performance issues**: Large media files slowing site
   - *Mitigation*: Implement lazy loading, compress images, use CDN

4. **Security concerns**: Donation form or data collection vulnerabilities
   - *Mitigation*: Use established platforms (McGill portal), HTTPS, regular audits

5. **Accessibility non-compliance**: Missing legal requirements
   - *Mitigation*: Early accessibility testing, follow WCAG 2.1 AA standards

6. **Timeline slippage**: Development takes longer than 8-9 weeks
   - *Mitigation*: Prioritize MVP features, phase advanced features for post-launch

---

## 13. Next Steps

1. **Stakeholder Review**: Share this plan with Robert Frances, PEAK team, and Alan Parsons' representatives for approval
2. **Content Gathering**: Begin collecting all required copy, images, audio, and video assets
3. **Design Mockups**: Create wireframes and high-fidelity designs for approval before development
4. **Developer Assignment**: Assign developer(s) or agency to execute the plan
5. **Domain Setup**: Register musicismedicine.ca and configure DNS
6. **Timeline Confirmation**: Confirm October 30, 2025 deadline and work backwards

---

## 14. Contact and Collaboration

**Project Stakeholders:**
- Robert Frances (PEAK Financial Group): Founder, primary contact
- Alan Parsons: Featured artist
- LANDR: Distribution partner
- The Neuro/McGill: Donation recipient
- Sponsors: National Bank, Air Canada, etc.

**Technical Support:**
- Web developer(s)
- Graphic designer
- Copywriter
- SEO specialist
- QA tester

**Communication:**
- Primary email: peakcommunication@peakgroup.com
- Weekly status updates recommended
- Shared project management tool (Trello, Asana, or Notion)

---

## Conclusion

This website will serve as the digital hub for the Music is Medicine singles initiative, driving awareness, engagement, and donations for brain cancer research. By following this phased approach with clear milestones, the site can launch successfully before the October 30, 2025 first single release date.

The focus should be on creating an emotionally compelling, user-friendly experience that seamlessly guides visitors from discovering the music to taking action through listening, purchasing, and donating. With proper execution, this platform will amplify the healing power of music and translate it into meaningful impact for brain cancer patients and research advancement.

**Target Launch Date**: Early October 2025 (3-4 weeks before first single release)
**Estimated Development Time**: 8-9 weeks
**Recommended Start**: August 2025
