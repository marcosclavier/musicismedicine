# Internationalization Plan: English / Français Québécois
## Music Is Medicine Website

---

## Executive Summary

This document outlines the complete strategy for implementing bilingual support (English and Quebec French) for the Music Is Medicine website. The plan covers technical implementation, translation requirements, user experience considerations, and SEO optimization for both languages.

---

## Table of Contents

1. [Technical Architecture](#technical-architecture)
2. [Translation Inventory](#translation-inventory)
3. [Implementation Phases](#implementation-phases)
4. [Translation Requirements](#translation-requirements)
5. [SEO & Metadata Strategy](#seo--metadata-strategy)
6. [Testing & Quality Assurance](#testing--quality-assurance)
7. [Maintenance & Updates](#maintenance--updates)

---

## Technical Architecture

### Recommended Approach: Next.js i18n with next-intl

**Why next-intl?**
- Native Next.js 15+ App Router support
- Type-safe translations
- Automatic locale detection
- URL-based language switching (`/en/` and `/fr/`)
- SEO-friendly with proper hreflang tags
- Small bundle size

### Alternative Approaches Considered

1. **next-i18next** - More mature but heavier, better for Pages Router
2. **react-intl** - Requires more manual setup
3. **Custom solution** - More flexible but requires significant development

### Folder Structure

```
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   └── accessibility/
│       └── page.tsx
├── i18n.ts
└── middleware.ts

locales/
├── en.json
└── fr.json

components/
├── LanguageToggle.tsx (NEW)
└── [all existing components with translation keys]
```

---

## Translation Inventory

### 1. Navigation Component (`components/Navigation.tsx`)

**Elements to Translate:**
- Navigation links (7 items):
  - Home
  - About
  - Visionaries
  - The Singles
  - Listen
  - Donate
  - Impact
- CTA Buttons:
  - "Listen Now"
  - "Donate"
- Mobile menu labels
- Accessibility labels (aria-label)

**Estimated word count:** ~20 words

---

### 2. Hero Banner (`components/HeroBanner.tsx`)

**Elements to Translate:**
- Main headline
- Subheadline/tagline
- Description text
- CTA buttons
- Any overlay text

**Estimated word count:** ~50-100 words

---

### 3. About Section (`components/AboutSection.tsx`)

**Elements to Translate:**
- Section title
- Introduction paragraph
- Story content
- Mission statement
- Any supporting text

**Estimated word count:** ~150-250 words

---

### 4. Visionaries Section (`components/VisionariesSection.tsx`)

**Elements to Translate:**
- Section title
- Alan Parsons bio
- N2O band description
- Robert Frances bio
- Achievement descriptions
- Awards and accolades

**Estimated word count:** ~200-300 words

---

### 5. Singles Section (`components/SinglesSection.tsx`)

**Elements to Translate:**
- Section title
- Song titles (consider keeping original or translating)
- Song descriptions
- Release dates formatting
- Genre/style descriptors
- CTA buttons ("Listen Now", "Buy Now", etc.)

**Estimated word count:** ~100-150 words

---

### 6. Listen Section (`components/ListenSection.tsx`)

**Elements to Translate:**
- Section title
- Platform names (Spotify, Apple Music, etc. - keep original)
- Instructions/descriptions
- CTA text

**Estimated word count:** ~50-75 words

---

### 7. Donate Section (`components/DonateSection.tsx`)

**Key Translation Requirements:**

**Donation Tier Cards (5 tiers):**
- Amount labels: $10, $25, $50, $100, Custom
- Tier names:
  - Single Supporter
  - Music Advocate
  - Research Master
  - Hope Builder
  - Visionary Donor
- Descriptions (5 unique)
- Impact statements (5 unique)
- "Select" button
- "Popular" badge

**Main Content:**
- Section title: "How to Donate"
- Subtitle
- Impact statement headline: "Over $600,000 Raised..."
- Impact description paragraph
- Statistics labels:
  - "Total Raised"
  - "Supporters Nationwide"
  - "Net Proceeds Donated"

**Benefits Section:**
- "Why Donate Through Music is Medicine?" title
- 4 benefit descriptions:
  - Tax-receiptable information
  - Secure donation processing
  - Direct support description
  - Supporter community info

**Donation Options:**
- "One-Time Donation" title
- Description text
- "Donate Now" button

**Foundation Info:**
- "Supporting the Brain Tumour Foundation of Canada" title
- Description paragraph
- "Learn More About..." link text

**Corporate Section:**
- "Corporate Matching & Sponsorships" title
- Description paragraph
- "Contact for Corporate Opportunities" button

**Estimated word count:** ~400-500 words

---

### 8. Impact Section (`components/ImpactSection.tsx`)

**Elements to Translate:**
- Section title
- Research impact descriptions
- Statistics and metrics
- Success stories
- Patient testimonials (if any)
- Future goals description

**Estimated word count:** ~200-300 words

---

### 9. Footer Component (`components/Footer.tsx`)

**Elements to Translate:**

**CTA Section:**
- "Music is Medicine" headline
- "Listen, Buy, Donate, and Make a Difference"
- Button text (2 buttons)

**About Column:**
- Company description (2 paragraphs)

**Quick Links:**
- "Quick Links" heading
- 7 navigation links

**Contact Section:**
- "Connect" heading
- Email label (keep email address as-is)
- Social media section (when activated):
  - "Follow Us" heading
  - Platform accessibility labels

**Newsletter Section:**
- "Stay Updated" heading
- Description text
- Input placeholder: "Enter your email"
- Submit button: "Subscribe"
- Loading state: "Subscribing..."
- Success message
- Error messages

**Partners Section:**
- "Proud Partners & Sponsors" heading

**Bottom Bar:**
- "Privacy Policy"
- "Terms of Service"
- "Accessibility"
- Copyright text
- "#PEAKWithPurpose initiative"

**Final Tagline:**
- "Made with ❤️ to support brain cancer research"

**Estimated word count:** ~200-250 words

---

### 10. Legal Pages

#### Privacy Policy (`app/privacy/page.tsx`)
**Requirements:**
- Full legal document translation
- Quebec-specific privacy law references (Law 25)
- PIPEDA compliance statements
- Contact information sections
- Must maintain legal accuracy

**Estimated word count:** ~1,500-2,000 words

#### Terms of Service (`app/terms/page.tsx`)
**Requirements:**
- Full legal document translation
- Bilingual jurisdiction clauses
- Quebec Civil Code references where applicable
- All liability disclaimers
- Usage terms and conditions

**Estimated word count:** ~1,500-2,000 words

#### Accessibility Statement (`app/accessibility/page.tsx`)
**Requirements:**
- WCAG compliance statements
- Contact methods for accessibility issues
- Assistive technology compatibility info
- Accessibility features description

**Estimated word count:** ~500-750 words

---

### 11. Metadata & SEO (`app/layout.tsx`)

**Elements to Translate:**
- Page title
- Meta description
- Keywords
- OpenGraph title and description
- Twitter card title and description
- Image alt texts

**Estimated word count:** ~100-150 words

---

### 12. Dynamic Content

**Date & Number Formatting:**
- Date formats (EN: MM/DD/YYYY vs FR: DD/MM/YYYY)
- Number formats (EN: 1,000.00 vs FR: 1 000,00)
- Currency display (keep as CAD $ but format numbers)

**External Links:**
- Consider bilingual versions of external resources
- Brain Tumour Foundation: Check if French version exists
- Donation platform: Ensure supports French

---

## Total Translation Estimate

| Category | Word Count |
|----------|-----------|
| Navigation & UI Elements | 100-150 |
| Hero & About | 200-350 |
| Visionaries | 200-300 |
| Singles & Listen | 150-225 |
| Donate Section | 400-500 |
| Impact Section | 200-300 |
| Footer | 200-250 |
| Legal Pages | 3,500-4,750 |
| Metadata & SEO | 100-150 |
| **TOTAL** | **5,050-6,975 words** |

---

## Implementation Phases

### Phase 1: Infrastructure Setup (Week 1)

**Tasks:**
1. Install i18n dependencies
   ```bash
   npm install next-intl
   ```

2. Create middleware for locale detection
   - Detect browser language
   - Handle locale routing
   - Set up URL structure

3. Set up translation file structure
   - Create `locales/en.json`
   - Create `locales/fr.json`
   - Implement translation utility functions

4. Update routing structure
   - Convert to `[locale]` based routing
   - Update all internal links
   - Configure `next.config.js`

5. Create language toggle component
   - Design language switcher UI
   - Implement locale switching logic
   - Add to Navigation component

**Deliverable:** Functional i18n infrastructure with English content

---

### Phase 2: Extract Hardcoded Strings (Week 2)

**Tasks:**
1. Audit all components for hardcoded text
2. Replace with translation keys
3. Create English translation file
4. Test all pages with translation system
5. Ensure no text is missed

**Components Priority:**
1. Navigation (highest visibility)
2. Hero Banner
3. Donate Section (critical for conversions)
4. Footer
5. About, Visionaries, Impact
6. Legal pages

**Deliverable:** All English text using translation keys

---

### Phase 3: Professional Translation (Week 3)

**Tasks:**
1. Prepare translation brief
   - Context about the project
   - Target audience (Quebec/Canada)
   - Tone guidelines (compassionate, professional)
   - Key terminology

2. Hire Quebec French translator
   - Native Quebec French speaker
   - Experience with:
     - Medical/healthcare terminology
     - Charity/non-profit sector
     - Marketing copy
     - Legal translations

3. Translation deliverables needed:
   - Website content translation
   - Legal document translation
   - SEO metadata translation
   - Email templates (newsletter)

4. Review process
   - Native speaker review
   - Context testing (in-app)
   - Terminology consistency check

**Recommended Services:**
- Professional translation agency
- Translator with Quebec French specialization
- Legal translator for Terms/Privacy
- Consider using translation memory for consistency

**Budget Estimate:**
- General content: $0.15-0.25 CAD per word
- Legal content: $0.25-0.40 CAD per word
- Total: ~$1,200-$2,500 CAD

**Deliverable:** Complete French translation file

---

### Phase 4: Integration & Testing (Week 4)

**Tasks:**
1. Integrate French translations
2. Test language switching
3. Visual/layout QA
   - Check for text overflow
   - Verify button sizes accommodate longer French text
   - Test responsive design in both languages

4. Functional testing
   - Form submissions in French
   - Newsletter signup
   - Donation flow (external link)
   - Navigation behavior

5. SEO implementation
   - Add hreflang tags
   - Create French sitemap
   - Update robots.txt
   - Configure alternate language tags

6. Accessibility testing
   - Screen reader testing (both languages)
   - Keyboard navigation
   - ARIA labels in correct language

**Deliverable:** Fully functional bilingual website

---

### Phase 5: Launch Preparation (Week 5)

**Tasks:**
1. Performance optimization
   - Lazy load translations
   - Optimize bundle size
   - Test loading speeds

2. Create language-specific content
   - French OpenGraph images (if text-based)
   - French meta images
   - Update social media preview cards

3. Set up analytics
   - Track language preference
   - Monitor French user behavior
   - A/B test language detection

4. Documentation
   - How to add new translations
   - Style guide for future content
   - Maintenance procedures

5. Stakeholder review
   - Native French speaker approval
   - Client review
   - Final QA

**Deliverable:** Production-ready bilingual site

---

## Translation Requirements

### Quebec French Specifics

**Important Considerations:**

1. **Quebec French vs. European French**
   - Use Quebec vocabulary and expressions
   - Follow Office québécois de la langue française (OQLF) guidelines
   - Examples:
     - "Courriel" not "email"
     - "Infolettre" not "newsletter"
     - "Clavarder" not "chatter"

2. **Legal Requirements (Bill 101)**
   - French must be equally prominent
   - Cannot be hidden or secondary
   - Must be accessible from homepage
   - Default language can be auto-detected

3. **Tone & Style**
   - Compassionate and hopeful
   - Professional but warm
   - Inclusive language
   - Gender-neutral options where possible

4. **Cultural Adaptation**
   - References to Canadian organizations
   - Local charity culture and norms
   - Regional awareness (Montreal, Quebec context)

---

### Translation Brief Template

**Project:** Music Is Medicine - Bilingual Website

**Source Language:** Canadian English

**Target Language:** Quebec French (français québécois)

**Audience:**
- Primary: Quebec residents
- Secondary: Francophone Canadians
- Age range: 25-65
- Interest: Charity, music, healthcare causes

**Tone:**
- Professional yet warm
- Compassionate and hopeful
- Inspirational without being overly emotional
- Clear and direct for donation CTAs

**Key Terms to Maintain:**
- "Music Is Medicine" (brand name - keep in English or adapt)
- "N2O" (band name - keep)
- "Alan Parsons" (name - keep)
- "PEAK Financial Group" (company name - keep)
- "Brain Tumour Foundation of Canada" (check official French name)
- "#PEAKWithPurpose" (hashtag - keep)

**Terminology Preferences:**
- Brain cancer/brain tumour - use Canadian medical terminology
- Research - emphasize scientific credibility
- Donation terminology - ensure tax receipt language is accurate

**Special Requirements:**
- Legal pages must be reviewed by Quebec legal professional
- Medical terminology should align with Quebec healthcare system
- Donation tax information must reflect Canadian regulations

---

## SEO & Metadata Strategy

### URL Structure

**Recommended Approach:**
```
English:
https://musicismedicinebypeak.com/en
https://musicismedicinebypeak.com/en/privacy
https://musicismedicinebypeak.com/en/terms

French:
https://musicismedicinebypeak.com/fr
https://musicismedicinebypeak.com/fr/confidentialite
https://musicismedicinebypeak.com/fr/conditions
```

**Alternative (subdomain):**
```
https://en.musicismedicinebypeak.com
https://fr.musicismedicinebypeak.com
```

### Hreflang Implementation

**Required tags on every page:**
```html
<link rel="alternate" hreflang="en-CA" href="https://musicismedicinebypeak.com/en" />
<link rel="alternate" hreflang="fr-CA" href="https://musicismedicinebypeak.com/fr" />
<link rel="alternate" hreflang="x-default" href="https://musicismedicinebypeak.com/en" />
```

### Sitemap Strategy

**Create two sitemaps:**
1. `sitemap-en.xml` - English pages
2. `sitemap-fr.xml` - French pages
3. `sitemap.xml` - Main sitemap index

### Metadata Translations

**Critical Elements:**

1. **Title Tags** (60 characters max)
   - Unique for each language
   - Include keywords in target language
   - Brand name consistency

2. **Meta Descriptions** (155-160 characters max)
   - Compelling in both languages
   - Include call-to-action
   - Natural language, not translated word-for-word

3. **OpenGraph Tags**
   - Language-specific og:title and og:description
   - og:locale = "en_CA" or "fr_CA"
   - Consider separate social share images if text-based

4. **Structured Data (JSON-LD)**
   - Translate Organization schema
   - Translate Event schema (if applicable)
   - Keep URLs and identifiers consistent

### Keyword Research

**English Keywords:**
- Music is medicine
- Brain cancer research Canada
- Donate brain tumour research
- Alan Parsons charity
- Music charity Canada

**French Keywords (to research):**
- Musique thérapeutique
- Recherche cancer du cerveau Canada
- Don recherche tumeur cérébrale
- Alan Parsons œuvre caritative
- Organisme de bienfaisance musique Canada

---

## Testing & Quality Assurance

### Translation Quality Checklist

- [ ] Native Quebec French speaker review
- [ ] Medical terminology accuracy
- [ ] Legal terminology accuracy
- [ ] Consistency across all pages
- [ ] Tone and style alignment
- [ ] No anglicisms (unless intentional brand names)
- [ ] Proper accents and special characters (é, à, ç, etc.)
- [ ] Gender agreement (especially for plurals)

### Functional Testing Checklist

- [ ] Language toggle works on all pages
- [ ] Language preference persists across pages
- [ ] Newsletter signup works in French
- [ ] External donation link works (consider French param if available)
- [ ] Forms submit correctly in both languages
- [ ] Email confirmations in correct language
- [ ] Error messages display in correct language
- [ ] Browser language detection works
- [ ] URL-based language switching works
- [ ] Mobile menu works in both languages

### Visual/Layout Testing

- [ ] No text overflow issues
- [ ] Buttons accommodate longer French text
- [ ] Navigation menu fits properly
- [ ] Mobile responsive in both languages
- [ ] Footer layout with French text
- [ ] Card components (donation tiers) display correctly
- [ ] Modal dialogs (if any) display properly
- [ ] Loading states show correct language
- [ ] Success/error messages formatted properly

### Browser & Device Testing

**Browsers:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

**Devices:**
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (iPad, Android tablet)
- [ ] Mobile (iPhone, Android phones)

### Accessibility Testing

- [ ] Screen reader announces language correctly
- [ ] Language toggle keyboard accessible
- [ ] Tab order logical in both languages
- [ ] ARIA labels translated
- [ ] Form labels and errors in correct language
- [ ] Alt text for images translated
- [ ] Page titles update when language changes

### SEO Testing

- [ ] Hreflang tags present and correct
- [ ] Canonical tags correct
- [ ] Sitemap includes both languages
- [ ] robots.txt allows both language paths
- [ ] Google Search Console configured
- [ ] Rich snippets valid in both languages
- [ ] Social share previews correct (Facebook, Twitter)
- [ ] Language switcher doesn't affect SEO (noindex if needed)

---

## Maintenance & Updates

### Content Update Workflow

**When adding new content:**

1. Add English text to `locales/en.json`
2. Flag for translation
3. Get French translation
4. Add to `locales/fr.json`
5. Test in both languages
6. Deploy together

### Translation Management

**Options:**

1. **Manual Management**
   - JSON files in repository
   - Translation process via external service
   - Manual updates to both files

2. **Translation Management System (TMS)**
   - Consider for future: Phrase, Lokalise, Crowdin
   - Automatic sync with repository
   - Translation memory
   - Cost: ~$50-200/month

### Version Control

**Best Practices:**
- Keep translations in sync with feature branches
- Review French translations in PRs
- Use comments in JSON for context
- Flag missing translations clearly

**JSON Structure Example:**
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "donate": "Donate"
  },
  "donate": {
    "title": "How to Donate",
    "description": "Support life-changing brain cancer research",
    "tiers": {
      "single": {
        "title": "Single Supporter",
        "description": "Equivalent to one single release",
        "impact": "Supports basic research materials"
      }
    }
  }
}
```

### Documentation

**Create and maintain:**

1. **Developer Guide**
   - How to add new translations
   - Translation key naming conventions
   - Testing procedures
   - Deployment checklist

2. **Translator Guide**
   - Context for each section
   - Character limits for UI elements
   - Terminology glossary
   - Style guidelines

3. **Content Editor Guide**
   - How to request translations
   - How to update existing translations
   - Approval workflow
   - Emergency hotfix process

---

## Success Metrics

### Key Performance Indicators (KPIs)

**Engagement Metrics:**
- % of visitors choosing French
- Time on site (FR vs EN)
- Bounce rate by language
- Page views per session by language

**Conversion Metrics:**
- Donation conversion rate (FR vs EN)
- Newsletter signup rate (FR vs EN)
- Click-through rate on CTAs by language

**Technical Metrics:**
- Page load time impact
- Bundle size increase
- Language switching success rate
- Error rate by language

### Success Criteria

- ✅ All pages available in both languages
- ✅ Zero translation errors or placeholders
- ✅ Page load time < 3 seconds in both languages
- ✅ Mobile responsiveness in both languages
- ✅ WCAG 2.1 AA compliance in both languages
- ✅ 95%+ uptime for both language versions
- ✅ French conversion rate within 20% of English rate

---

## Budget Summary

### Development Costs

| Item | Estimate |
|------|----------|
| i18n Infrastructure Setup | 16-24 hours |
| Component Updates | 24-32 hours |
| Testing & QA | 16-24 hours |
| SEO Implementation | 8-12 hours |
| **Total Development** | **64-92 hours** |

### Translation Costs

| Item | Word Count | Rate | Estimate |
|------|-----------|------|----------|
| General Content | 1,500-2,200 | $0.15-0.25/word | $225-550 |
| Legal Content | 3,500-4,750 | $0.25-0.40/word | $875-1,900 |
| Review & QA | - | Flat | $200-300 |
| **Total Translation** | **5,000-6,975** | - | **$1,300-2,750** |

### Third-Party Services (Optional)

| Service | Cost |
|---------|------|
| Translation Management System | $0-200/month |
| Professional QA Service | $300-500 |
| Legal Review (Quebec lawyer) | $500-1,000 |

### Total Project Estimate

**Mid-range estimate:** $1,500-3,500 CAD + development time

---

## Risk Assessment

### Potential Risks

1. **Translation Quality Issues**
   - **Risk:** Poor translation damages credibility
   - **Mitigation:** Use professional Quebec French translator, native review

2. **Layout Breaking Issues**
   - **Risk:** French text longer than English, breaks UI
   - **Mitigation:** Design with 30% text expansion in mind, thorough testing

3. **SEO Dilution**
   - **Risk:** Splitting content across languages reduces ranking
   - **Mitigation:** Proper hreflang implementation, strong link signals

4. **Maintenance Burden**
   - **Risk:** Translations fall out of sync
   - **Mitigation:** Clear workflow, translation management system

5. **Legal Compliance**
   - **Risk:** Incorrect legal translations cause liability
   - **Mitigation:** Professional legal translator, Quebec lawyer review

6. **User Confusion**
   - **Risk:** Language switching not intuitive
   - **Mitigation:** Clear toggle, auto-detection, user testing

---

## Next Steps

### Immediate Actions (Before Starting)

1. **Stakeholder Approval**
   - [ ] Get budget approval
   - [ ] Confirm timeline
   - [ ] Assign project owner

2. **Resource Planning**
   - [ ] Hire/contract Quebec French translator
   - [ ] Identify legal review resource
   - [ ] Assign development resources

3. **Technical Decisions**
   - [ ] Confirm URL structure preference
   - [ ] Choose translation management approach
   - [ ] Set up development environment

4. **Content Preparation**
   - [ ] Audit all existing content
   - [ ] Identify any Quebec-specific content needs
   - [ ] Prepare translation brief

### Phase Kickoff

Once approved, begin with **Phase 1: Infrastructure Setup**

**First Sprint Goals:**
- Install and configure next-intl
- Set up folder structure
- Create language toggle component
- Test basic language switching

---

## Appendix

### A. Quebec French Resources

**Official Resources:**
- Office québécois de la langue française (OQLF): https://www.oqlf.gouv.qc.ca/
- Grand dictionnaire terminologique: http://gdt.oqlf.gouv.qc.ca/
- Banque de dépannage linguistique: https://bdl.oqlf.gouv.qc.ca/

**Translation Services:**
- Association des traducteurs du Québec
- Certified Quebec translators directory

### B. Technical References

**next-intl Documentation:**
- https://next-intl-docs.vercel.app/

**Next.js i18n Guide:**
- https://nextjs.org/docs/app/building-your-application/routing/internationalization

**Hreflang Best Practices:**
- Google Search Central: https://developers.google.com/search/docs/specialty/international/localized-versions

### C. Legal Considerations

**Bill 101 (Charter of the French Language):**
- French must be at least as prominent as other languages
- Commercial websites doing business in Quebec must offer French

**Law 25 (Privacy Law Reform):**
- Privacy policies must be available in French
- Consent mechanisms must be in French

**Accessibility Standards:**
- WCAG 2.1 Level AA (federal requirement)
- Standard sur l'accessibilité du Web (Quebec government)

---

## Document Control

**Version:** 1.0
**Date:** November 5, 2025
**Status:** Draft - Pending Approval
**Next Review:** Upon project completion

**Prepared by:** Development Team
**Approved by:** [Pending]

---

*This document is a living document and should be updated as the project progresses and requirements evolve.*
