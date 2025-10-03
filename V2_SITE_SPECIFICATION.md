# Orion Apex Capital — V2 Site Specification

**Version:** 2.0  
**Date:** October 3, 2025  
**Status:** Launch-Ready Scaffold

---

## Executive Summary

- **Design Language:** Professional, restrained finance aesthetic with navy/maroon brand, strong hierarchy, and trust signals
- **Information Architecture:** Preserves existing content and adds full Freelance Work (Portfolio) lane with case studies
- **Tech Stack:** Next.js Pages Router + Tailwind CSS, static export-friendly, WCAG 2.1 AA compliant
- **Design System:** Reusable design tokens, structured component library, schema/analytics baked in
- **Contact Pipeline:** `/api/contact` with optional Resend integration; high-intent forms; compliant legal baseline
- **Target Hosting:** Vercel (primary), static export supported

---

## Assumptions

| Area | Assumption |
|------|-----------|
| **Audience** | HNW/affluent professionals, operators, and partners seeking disciplined, outcomes-driven advisory |
| **Tech Stack** | Pages Router retained for simplicity and static export (App Router not required) |
| **Hosting** | Vercel primary; images unoptimized to enable `next export` (switchable) |
| **Email** | `RESEND_API_KEY` + `CONTACT_TO_EMAIL` optionally configured; otherwise logged |
| **CMS** | Not required; Markdown content (posts & case studies) compiled at build time |
| **Social** | Channels exist but low-activity; placeholders with `aria-disabled` |

---

## Content Inventory

### Current Pages (Preserved & Enhanced)

| Page | Purpose | Key Updates |
|------|---------|-------------|
| **Home** | Brand hero, disciplined multipillar thesis, CTAs | Add social proof logos, featured case study |
| **About** | Mission, Values, Edge | Add leadership snapshot |
| **Services** | Crypto trading, ATM placements, website investing | Clarify with outcome language + CTAs |
| **Insights** | Markdown blog | Keep existing structure |
| **Bio** | Dan's background, principles | Keep existing content |
| **Contact** | High-intent form | Add compliance note |
| **Legal** | Disclosures, Privacy, Terms | Keep baseline |

### New Additions

| Page | Purpose | Structure |
|------|---------|-----------|
| **Freelance Work (Index)** | Portfolio showcase | Filterable grid (Sector/Service/Outcome) + cards |
| **Freelance Work (Detail)** | Case study pages | Problem → Approach → Deliverables → Metrics → Testimonial |

---

## Sitemap & Navigation

### Desktop Navigation

```
[Logo] About • Services • Insights • Freelance Work • Bio • Contact [Partner With Us]
```

### Mobile Navigation

- Sticky header: Logo + hamburger menu
- Full-height overlay with large tap targets
- 2-level disclosure for Services & Freelance filters

### Footer Structure

**3-Column Layout:**
1. **About:** Brand blurb
2. **Navigate:** Site links + Legal
3. **Connect:** Email + social placeholders

**Footer Elements:**
- Compliance note: "Nothing on this site constitutes financial, legal, or tax advice."
- Copyright: `© {year} Orion Apex Capital`

### Interactive States

| State | Styling |
|-------|---------|
| **Focus** | `outline-2 outline-offset-2 outline-teal-400` |
| **Hover** | Subtle translate/opacity with reduced-motion fallbacks |
| **Active** | Underline + slightly higher contrast |

---

## Homepage Structure

### Sections (In Order)

1. **Hero** — H1, subhead, value prop, dual CTAs
2. **Social Proof** — Logo grid (6 partner placeholders)
3. **Services Overview** — 3 cards (Crypto, ATM, Websites)
4. **Featured Case Study** — Highlight with metrics + CTA
5. **Insights Teaser** — Latest 3 posts
6. **Closing CTA** — "Schedule a Consultation"
7. **Footer**

### Desktop Wireframe (1200px)

```
┌─────────────────────────────────────────────────────────────────┐
│ Sticky Header: Logo | About | Services | Insights | Freelance | │
│                Bio | Contact |              [ Partner With Us ] │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│                   HERO: H1 + Subhead + Value Prop               │
│           [ Explore Strategies ]  [ Partner With Us ]           │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│              Social Proof Logos (row of 6)                      │
├─────────────────────────────────────────────────────────────────┤
│                     Services (3 cards)                          │
│         ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│         │ Crypto  │  │ ATM Ops │  │Websites │                 │
│         └─────────┘  └─────────┘  └─────────┘                 │
├─────────────────────────────────────────────────────────────────┤
│          Featured Case Study (image/metrics/CTA)                │
├─────────────────────────────────────────────────────────────────┤
│                   Insights (latest 3 posts)                     │
├─────────────────────────────────────────────────────────────────┤
│          Closing CTA: "Schedule a Consultation"                 │
└─────────────────────────────────────────────────────────────────┘
```

### Responsive Breakpoints

- **Tablet (768px):** Services in 2 columns; Insights 2-up; condensed logo row
- **Mobile (360px):** Single column; stacked cards; sticky mobile menu

---

## Page Templates

### About

**Purpose:** Context, ethos, differentiation

**Sections:**
- Mission
- Values
- Edge
- Leadership snapshot *(suggested addition)*

**Example Microcopy:**
> "Disciplined strategy beats noise. We compound through operator math, not hype."

---

### Services (Index)

**Purpose:** Clarity on what you do and where you say "no"

**Sections:**
- Overview
- 3 service cards (Crypto, ATM, Websites)
- Process
- Proof
- CTA

---

### Service Detail

**Template Flow:**
1. Hero
2. Problem
3. Approach
4. Deliverables
5. Outcomes (metrics)
6. Credibility
7. CTA

---

### Freelance Work (Index)

**Features:**
- Filterable grid: Sector, Service Type, Outcome
- Card fields: Title • One-line result • Tags • Thumbnail

**Example Filters:**
- Sector: Finance, Fitness, Cash Biz, Investment
- Service: Analytics, Ops Systems, Advisory, Web
- Outcome: Retention, Time Saved, Risk Clarity

---

### Freelance Work (Case Study)

**Template Structure:**
- Client/Project
- Role/Scope
- Problem
- Approach
- Deliverables
- Stack/Tools
- Timeline
- Outcome/Impact (metrics)
- Visuals
- Testimonial
- CTA

---

### Insights

**Index:** List with dates and excerpts  
**Article:** Title, date, content, related posts, schema

---

### Bio

**Sections:**
- Headshot
- Story & Milestones
- Focus Areas
- Operating Principles
- Contact CTA

---

### Contact

**Form Fields:**
- Name
- Email
- Brief goals/message

**Note:** "Replies within 1–2 business days"  
**Footer:** Compliance note

---

### Legal

**Sections:**
- Disclosures
- Privacy
- Terms of Use
- Contact for data deletion

---

## Component Library

### Buttons

| Variant | Styling | Use Case |
|---------|---------|----------|
| **Primary** | Maroon solid (`bg-maroon-700`) | Max 1 per section |
| **Secondary** | Navy outline (`border-white/20`) | Supporting actions |
| **Ghost** | Transparent | Tertiary/inline links |

**Sizes:**
- `sm`: 36px height
- `md`: 44px height (default)
- `lg`: 52px height

**States:**
- Hover: opacity/translate
- Focus: outline ring
- Disabled: opacity 50 + cursor-not-allowed

**CSS Classes:**
```css
.btn { @apply inline-flex items-center justify-center rounded-lg font-semibold transition; }
.btn-primary { @apply bg-maroon-700 text-white px-5 py-3 hover:bg-maroon-600 focus:outline-teal-400; }
.btn-secondary { @apply border border-white/20 text-white px-5 py-3 hover:bg-white/10; }
```

---

### Cards

**Features:**
- Elevation token: `shadow-card`
- Padding: 16–24px
- Optional media top
- Clickable area covers entire card

**CSS Class:**
```css
.card {
  @apply rounded-xl border border-white/10 bg-white/5 p-6 shadow-card;
}
```

---

### Navigation

**Features:**
- Sticky positioning
- Translucent on scroll
- Reduced motion hides fancy transitions
- Mobile: Full-height overlay with hamburger

---

### Forms (Inputs/Textarea)

**Standards:**
- 44px min height (WCAG touch target)
- Clear error text
- Human-friendly validation messages

**CSS Classes:**
```css
.input, .textarea {
  @apply w-full rounded-lg bg-white/10 px-4 py-3 outline-none
         focus:ring-2 focus:ring-teal-400 placeholder:text-neutral-500;
}
.textarea { @apply min-h-[144px]; }
```

---

### Additional Components

- Logo Grid
- Testimonials
- Stats
- Badges
- Pagination
- Breadcrumbs

---

## Design Tokens

### Color Palette

```json
{
  "navy": {
    "950": "#09162C",
    "900": "#0B1F3B",
    "800": "#102848",
    "700": "#152A4E",
    "50": "#EEF3F9"
  },
  "maroon": {
    "900": "#5A1620",
    "800": "#6E1B22",
    "700": "#7C1F29",
    "600": "#8B2330"
  },
  "neutral": {
    "100": "#F5F6F8",
    "300": "#E4E7EC",
    "500": "#98A2B3",
    "700": "#3C4655",
    "900": "#0F172A"
  },
  "teal": {
    "400": "#2DD4BF"
  },
  "gold": {
    "500": "#E6B800"
  }
}
```

### Typography

```json
{
  "family": {
    "sans": "'Inter', 'Helvetica Neue', Arial, sans-serif"
  },
  "scale": {
    "display": 56,
    "h1": 40,
    "h2": 32,
    "h3": 24,
    "body": 16,
    "small": 14
  }
}
```

### Spacing & Layout

```json
{
  "radius": {
    "sm": 4,
    "md": 8,
    "lg": 12,
    "xl": 20
  },
  "shadow": {
    "card": "0 8px 24px rgba(9,22,44,0.06)",
    "elev": "0 16px 40px rgba(9,22,44,0.12)"
  },
  "spacing": [4, 8, 12, 16, 24, 32, 48, 64, 80, 96]
}
```

### Grid System

- **Breakpoints:** `sm:640`, `md:768`, `lg:1024`, `xl:1280`, `2xl:1536`
- **Columns:** 12-col desktop, 6-col tablet, 4-col mobile
- **Max Container:** 1200px

### Motion Tokens

- **Duration:** 120–200ms
- **Easing:** `ease-out`
- **Reduced Motion:** Disables transforms > 120ms

---

## Imagery & Iconography

### Style Guidelines

| Element | Guideline |
|---------|-----------|
| **Photography** | Subtle, high-contrast, cool temperature; cityscapes, boardroom details, abstract price-action textures |
| **Icons** | lucide-react, duotone navy/maroon; size 20–28px for body contexts |
| **Alt Text** | Action + subject + purpose (e.g., "Team reviews ATM uptime metrics dashboard") |
| **Usage** | Photos for credibility, abstracts for transitions/hero backgrounds; avoid stock clichés |

---

## UX Enhancements

### Trust & Engagement Features

- **Logo Row:** "Operators & Partners we've worked with" (placeholder SVGs)
- **Testimonials:** 1–3 short, specific quotes (outcomes > adjectives)
- **CTAs:** 
  - "Explore Strategies"
  - "Schedule a Consultation"
  - "Request Deck Review"
  - "Investor Inquiry"
- **Compliance:** Footer + Legal page disclaimers

---

## Accessibility (WCAG 2.1 AA)

### Color Contrast

| Pairing | Ratio | Compliance |
|---------|-------|------------|
| Navy on white | ≥ 7:1 | AAA |
| Maroon on neutral-100 | ≥ 4.5:1 | AA |
| Interactive states | Maintain contrast | AA |

### Keyboard Navigation

- **Skip Link:** Skip-to-content at top
- **Focus Visible:** All interactive elements
- **Tab Order:** Logical flow through menu, filters, forms
- **ESC Key:** Closes mobile menu

### ARIA

- `role="navigation"` on nav elements
- `aria-expanded` on mobile menu toggle
- `aria-current="page"` for active links
- `aria-live="polite"` for form success/errors

### Motion

- `prefers-reduced-motion` disables translate/opacity transitions > 120ms

---

## Performance Plan

### Budgets

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** | ≤ 2.5s | Hero image optimization, critical CSS |
| **CLS** | ≤ 0.1 | Reserved space for images, no layout shifts |
| **INP** | ≤ 200ms | Minimal JS, debounced interactions |

### Tactics

1. **Critical CSS** via Tailwind + minimal custom CSS
2. **Image Optimization:** AVIF/WebP + srcset; lazy-load non-critical
3. **Fonts:** Subsetting + `font-display: swap`
4. **Caching:** Static assets with long cache headers
5. **Tree-Shaking:** Selective imports from lucide-react
6. **No Blocking Scripts:** Defer third-party analytics

---

## SEO & Schema

### Metadata Standards

- **Titles:** ≤ 60 characters
- **Meta Descriptions:** 150–160 characters
- **Canonicals:** For posts and case studies
- **OpenGraph/Twitter Cards:** 1200×630 banner

### Schema.org Implementation

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Orion Apex Capital",
  "url": "https://www.orionapexcapital.com",
  "logo": "https://www.orionapexcapital.com/images/logo-mark.svg"
}
```

**Service Schema Template:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Crypto Trading",
  "provider": {
    "@type": "Organization",
    "name": "Orion Apex Capital"
  },
  "description": "Short-term setups with strict risk controls"
}
```

**Person Schema (Bio):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dan",
  "affiliation": {
    "@type": "Organization",
    "name": "Orion Apex Capital"
  }
}
```

---

## Analytics Plan

### Events to Track

| Event | Parameters | Purpose |
|-------|------------|---------|
| `page_view` | `path` | Traffic analysis |
| `cta_click` | `id`, `page`, `placement` | Conversion funnel |
| `form_submit` | `id`, `status` | Lead quality |
| `scroll_depth` | `pct` | Engagement |

### Implementation

Use `lib/analytics.js` wrapper (compatible with GA4 or Plausible):

```javascript
export function track(event, params={}) {
  if (typeof window === 'undefined') return;
  if (window.gtag) window.gtag('event', event, params);
  else console.debug('[analytics]', event, params);
}
```

---

## Case Study Content

### Example 1: KPI Dashboard for Multi-Club Fitness Operator

**Metadata:**
```yaml
title: "KPI Dashboard for Multi-Club Fitness Operator"
sector: "Fitness"
service: ["Analytics", "Ops Systems"]
outcome: "Improved retention +2.8pp; saved 6–8 hrs/week reporting"
tags: ["BI", "Automation", "GSheet→Looker"]
timeline: "6 weeks"
stack: ["AppScript", "BigQuery", "Looker Studio"]
```

**Content:**
- **Problem:** Disconnected reports, manual weekly roll-ups
- **Approach:** Unified data model; automated imports; single KPI surface
- **Deliverables:** Live dashboard, SOP, handoff video
- **Impact:** Retention +2.8pp, 6–8 hrs/wk saved, higher CCS booking compliance

---

### Example 2: ATM Uptime & Cash Logistics Optimization

**Metadata:**
```yaml
title: "ATM Uptime & Cash Logistics Optimization"
sector: "Cash Biz"
service: ["Ops", "Process"]
outcome: "Cut downtime 34%; tightened cash cycles"
tags: ["SLA", "Routing", "Ops"]
timeline: "4 weeks"
stack: ["Airtable", "Zapier"]
```

**Content:**
- **Problem:** Unpredictable outages, overfills under variable traffic
- **Approach:** Route scoring, alerting, refill thresholds
- **Impact:** 34% downtime reduction; smoother float utilization

---

### Example 3: Algorithmic Trading Pitch Deck Review

**Metadata:**
```yaml
title: "Algorithmic Trading Pitch Deck Review"
sector: "Finance"
service: ["Advisory", "Deck"]
outcome: "Investor-ready narrative; risk framework clarity"
tags: ["Trading", "Risk", "Narrative"]
timeline: "2 weeks"
stack: ["Google Slides"]
```

**Content:**
- **Problem:** Technical depth without investor comprehension
- **Approach:** Reframed problem→edge→proof; added risk controls & metrics
- **Impact:** Clearer story; higher signal; reduced diligence friction

---

### Example 4: Private Investor Relations Microsite

**Metadata:**
```yaml
title: "Private Investor Relations Microsite"
sector: "Investment"
service: ["Web", "Content"]
outcome: "Faster diligence; cleaner disclosures"
tags: ["Webflow", "Compliance"]
timeline: "3 weeks"
stack: ["Next.js", "Vercel"]
```

**Content:**
- **Problem:** Ad-hoc PDFs and email forks
- **Approach:** Built secure microsite with structured disclosures + FAQs
- **Impact:** Streamlined investor communications; consistent version control

---

## Content Model (Future CMS)

### Data Types

| Type | Fields |
|------|--------|
| **Page** | `title`, `slug`, `seo`, `sections[]` |
| **Service** | `name`, `summary`, `body`, `cta`, `icon` |
| **CaseStudy** | `client`, `problem`, `approach`, `deliverables[]`, `stack[]`, `timeline`, `metrics`, `testimonial` |
| **Post** | `title`, `date`, `excerpt`, `body`, `tags[]` |
| **TeamMember** | `name`, `role`, `bio`, `socials` |

---

## Tone & Microcopy

### Voice Principles

- **Executive:** Precise, low-ego, outcomes-driven
- **Clarity:** No jargon without definition
- **Confidence:** Assertive without arrogance

### CTA Language

| Context | CTA Text |
|---------|----------|
| **Primary conversion** | "Schedule a Consultation" |
| **Services exploration** | "Explore Strategies" |
| **Portfolio interest** | "Request Deck Review" |
| **Investor inquiry** | "Investor Inquiry" |
| **General partnership** | "Partner With Us" |

### Example Microcopy

**Hero:**
> "Precision. Growth. Legacy."
> 
> "We deploy disciplined, risk-managed strategies across crypto markets, automated cash businesses, and digital assets—aligning returns with long-term purpose."

**Services:**
> "Disciplined strategy beats noise. We compound through operator math, not hype."

**Contact:**
> "Tell us about your objectives and constraints. We'll reply within 1–2 business days."

---

## Implementation Notes

### Environment Variables

```bash
# Optional: Email via Resend
RESEND_API_KEY=re_xxxxx
CONTACT_TO_EMAIL=contact@orionapexcapital.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXX
```

### Build Commands

```bash
# Development
npm run dev

# Production build (static export)
npm run build

# Preview production
npm run start
```

### Deployment (Vercel)

1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy: Auto-deploy on push to `main`

### Static Export Configuration

**next.config.js:**
```javascript
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true
};
```

---

## File Structure

```
orion-apex-capital/
├── package.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── jsconfig.json
├── public/
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── og-banner.png
│   │   ├── logo-mark.svg
│   │   ├── placeholder-logo-1.svg
│   │   ├── placeholder-logo-2.svg
│   │   └── hero-texture.avif
│   ├── robots.txt
│   └── sitemap.xml
├── styles/
│   └── globals.css
├── components/
│   ├── Layout.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Button.js
│   ├── Card.js
│   ├── LogoGrid.js
│   ├── CaseStudyCard.js
│   ├── SEOHead.js
│   ├── SkipLink.js
│   └── Forms.js
├── lib/
│   ├── posts.js
│   ├── cases.js
│   ├── analytics.js
│   └── schema.js
├── content/
│   ├── posts/
│   │   ├── digital-assets-flywheel.md
│   │   └── cadence-of-operator.md
│   └── cases/
│       ├── kpi-dashboard-fitness.md
│       ├── atm-uptime-ops.md
│       ├── algo-pitch-deck-review.md
│       └── private-investor-site.md
└── pages/
    ├── _app.js
    ├── _document.js
    ├── index.js
    ├── about.js
    ├── services.js
    ├── insights/
    │   ├── index.js
    │   └── [slug].js
    ├── freelance/
    │   ├── index.js
    │   └── [slug].js
    ├── bio.js
    ├── contact.js
    ├── legal.js
    ├── 404.js
    └── api/
        └── contact.js
```

---

## Risks & Open Questions

### Legal

- [ ] Real client names for case studies vs. anonymized?
- [ ] Image rights for any third-party logos?
- [ ] Email deliverability (SPF/DKIM) if using custom domain + Resend?

### Content

- [ ] Do we have 6 partner logos for social proof?
- [ ] Do we have testimonials for case studies?
- [ ] Are case study metrics approved for publication?

### Technical

- [ ] Analytics platform preference (GA4 vs. Plausible)?
- [ ] Need for CMS (future state)?
- [ ] Performance monitoring tool (Vercel Analytics, Lighthouse CI)?

---

## Quality Bar & Acceptance Criteria

### Visual

- [ ] Impeccable spacing with consistent scale
- [ ] Conservative motion (respect `prefers-reduced-motion`)
- [ ] Finance-grade polish (no visual regressions)

### Content

- [ ] Existing pages preserved
- [ ] Edits clarify (not dilute)
- [ ] New additions clearly labeled

### Accessibility

- [ ] WCAG 2.1 AA verified with axe DevTools
- [ ] Keyboard navigation tested
- [ ] Screen reader tested (NVDA/JAWS)

### Performance

- [ ] Core Web Vitals budgets met on mobile and desktop
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO)

### Handoff

- [ ] Tokens + components + templates compile without modification
- [ ] Deploy script documented
- [ ] Environment variables documented

---

## Dependencies

```json
{
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "gray-matter": "^4.0.3",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.453.0",
    "resend": "^2.0.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.10",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.5"
  }
}
```

---

## Launch Checklist

### Pre-Launch

- [ ] All pages created and tested
- [ ] Forms connected to email service
- [ ] Analytics tracking verified
- [ ] SEO metadata complete (all pages)
- [ ] OpenGraph images generated
- [ ] Legal page reviewed
- [ ] 404 page styled
- [ ] Favicon set
- [ ] robots.txt configured
- [ ] sitemap.xml generated

### Launch Day

- [ ] Deploy to production
- [ ] Verify DNS/domain
- [ ] Test contact form submission
- [ ] Test all internal links
- [ ] Verify analytics firing
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Run accessibility scan

### Post-Launch

- [ ] Monitor Core Web Vitals
- [ ] Review form submissions
- [ ] Gather user feedback
- [ ] Plan content calendar (Insights)
- [ ] Collect case study testimonials

---

## Changelog

### V2.0 (October 2025)

**Added:**
- Freelance Work section with filterable portfolio
- Case study detail pages
- Social proof logo grid
- Featured case study on homepage
- Comprehensive design system documentation
- WCAG 2.1 AA compliance
- Performance budgets

**Enhanced:**
- Navigation with sticky header
- Mobile menu with full-height overlay
- Contact form with Resend integration
- SEO with schema.org markup
- Analytics event tracking

**Preserved:**
- All existing content (Home, About, Services, Insights, Bio, Contact, Legal)
- Brand voice and tone
- Core value propositions

---

## References

### Internal Documents

- [Current Site Structure](Current_SITE_STRUCTURE.md)
- [README](README.md)

### External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org](https://schema.org/)
- [Web.dev Performance](https://web.dev/metrics/)

---

**Document Owner:** Dan, Orion Apex Capital  
**Last Updated:** October 3, 2025  
**Next Review:** Post-launch (November 2025)

