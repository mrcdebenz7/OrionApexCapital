# Orion Apex Capital - Site Structure & Content Documentation

**Generated:** October 3, 2025  
**Purpose:** Rebuild reference for OrionApexCapital.com

---

## 🏗️ Technical Stack

- **Framework:** Next.js 14.2.5
- **React:** 18.2.0
- **Styling:** Tailwind CSS 3.4.4
- **Animations:** Framer Motion 10.18.0
- **Content:** Markdown (gray-matter, marked)
- **Email:** Resend 3.2.0

---

## 📂 Site Structure

### Pages & Routes

```
/                   → Home (index.js)
/about              → About page
/bio                → Personal bio page
/services           → Services page
/insights           → Insights listing page
/insights/[slug]    → Individual insight posts
/contact            → Contact page
/legal              → Legal disclosures
/api/contact        → Contact form API endpoint
/api/subscribe      → Newsletter subscription API endpoint
```

### Component Architecture

- **Layout.js** - Main layout wrapper
- **Navbar.js** - Sticky navigation header
- **Footer.js** - Site footer with links
- **Hero.js** - Animated hero section with starfield
- **ContactForm.js** - Contact form component
- **NewsletterForm.js** - Newsletter signup form
- **Logo.js** - Company logo component

---

## 🎨 Design System

### Color Palette
```css
--bg: #0b1220        (Navy background)
--fg: #e6f1ff        (White/light text)
--muted: #93a3b8     (Slate gray)
--teal: #00d4ff      (Brand teal/cyan)
--gold: #e6b800      (Accent gold)
```

### Key UI Elements
- **Cards:** `bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm`
- **Primary Button:** Teal background with hover scale effect
- **Secondary Button:** White/10 background with hover brightening
- **Starfield Animation:** Animated radial gradient dots creating space effect

---

## 📄 Page Content

### Home Page (`/`)

**Hero Section:**
- **Title:** Orion Apex Capital
- **Tagline:** Precision. Growth. Legacy.
- **Description:** We deploy disciplined, risk‑managed strategies across crypto markets, automated cash businesses, and digital assets—aligning returns with long‑term purpose.
- **CTAs:** "Explore Strategies" (→ /services), "Partner With Us" (→ /contact)

**Features Section (4 Cards):**

1. **Crypto Trading**
   - Icon: chart
   - Description: Short-term scalp, breakout, and swing strategies with strict risk controls and multi-timeframe confluence.

2. **Automated Cash Businesses**
   - Icon: atm
   - Description: ATM placements with data-driven location selection and disciplined capital recycling.

3. **Digital Assets & Web**
   - Icon: web
   - Description: Website acquisitions for cashflow + resale, plus targeted AI-driven assets.

4. **Risk Management**
   - Icon: shield
   - Description: 2:1 minimum R:R, ATR-based stops, volatility filters, and post-entry protective logic.

**Strategy Section:**
- **Title:** Strategy, Discipline, and Purpose
- **Description:** Our edge blends technical precision with real-world operator experience. We optimize for reliable execution and risk-aware growth that compounds.
- **CTAs:** "See Services", "Read Insights"
- **Visual:** Abstract hero graphic

**Newsletter Section:**
- **Title:** Get Market & Growth Notes
- Newsletter signup form component

---

### About Page (`/about`)

**Main Content:**
- **Heading:** About Orion Apex Capital
- **Opening:** Orion Apex Capital was founded on a simple idea: disciplined strategy beats noise. We operate across crypto markets, automated cash businesses, and digital assets with an emphasis on risk management, execution speed, and long-term alignment.

**Three-Column Cards:**

1. **Mission**
   - Build wealth with integrity and precision, compounding returns into lasting legacy.

2. **Values**
   - Trust & transparency
   - Risk-managed growth
   - Operator discipline

3. **Edge**
   - A blended approach: quantified trading systems + on-the-ground execution in cashflow businesses.

---

### Personal Bio Page (`/bio`)

**Profile Section:**
- **Image:** Dan headshot (SVG)
- **Name:** Dan
- **Title:** General Manager • Trader • Builder

**Personal Bio Text:**

I lead operations and sales at a major fitness brand while building Orion Apex Capital—an operator's studio focused on disciplined growth across crypto, automated cash businesses, and digital assets. My north star is simple: precision, integrity, and compounding results that enable a lasting legacy.

In trading, I specialize in short‑term setups (≤72h) with strict risk management—minimum 2:1 R:R, ATR‑based stops, and volatility filters. Beyond markets, I deploy capital into ATM placements and website assets, prioritizing reliable cashflow and smart recycling.

I'm deeply values‑driven—rooted in personal growth, emotional presence, and long‑term partnership. My partner, Elisabeth, and I approach life as a shared practice of trust, contribution, and spiritual development.

**Focus Areas Card:**
- Crypto trading (scalp, breakout, swing)
- ATM placements & uptime ops
- Website investing & resale
- Sales systems & GTM execution

**Operating Principles Card:**
- Risk first, always
- Speed with discipline
- Transparent reporting
- Purpose‑aligned decisions

**Story & Milestones:**
- Built sales & operations leadership at 24 Hour Fitness (201+ team leadership impact; multi‑site momentum).
- Developed a short‑term trading framework with multi‑timeframe confluence and automated SL/TP management.
- Launched Orion Apex initiatives in ATM placements, website investing, and AI‑assisted assets.
- Ongoing: expand placements (6–8 targets), refine trading confirm engine, and scale content/insights.

**Contact Note:**
For collaborations, speaking, or advisory requests, visit the contact page.

---

### Services Page (`/services`)

**1. Crypto Trading Strategies**

High-conviction setups (≤72h hold) across scalp, breakout, and swing categories. We prioritize multi-timeframe confluence (1H + 4H/D) and use liquidity, OI/funding, and volatility filters for confirmation.

- 2:1 minimum risk-to-reward; ATR-anchored stops.
- Automated execution & alerts; post-entry SL management.
- Focus symbols: BTC, ETH, SOL, XRP, LINK, LTC, BCH, DOGE.

**2. ATM Placement (Automated Cash Businesses)**

Location-first strategy targeting reliable foot traffic and conversion profiles. Goal: consistent monthly yield with disciplined redeployment.

- 6–8 placements target; $18k–$25k annual profit objective.
- Transparent fee structure & uptime monitoring.

**3. Website Investing & Digital Assets**

Acquire/build content sites with clean SEO, diversified monetization, and value-add improvements—then recycle capital via resale at attractive multiples.

**4. Advisory & Partnerships**

Select consulting for leaders and operators on GTM, sales systems, and growth loops. We're pragmatic, data-informed, and action-biased.

**Disclaimer:**
Note: Nothing here is a solicitation to invest or an offer of securities.

---

### Contact Page (`/contact`)

**Heading:** Contact

**Description:** Tell us about your objectives and constraints. We'll reply within 1–2 business days.

**Component:** ContactForm (form submission to /api/contact)

---

### Legal Page (`/legal`)

**1. Disclosures**
The information on this site is for educational and informational purposes only. It is not financial, legal, or tax advice. No offer or solicitation to buy or sell securities is being made.

**2. Privacy**
We collect limited data through contact and newsletter forms. We do not sell personal data. For deletion requests, email privacy@orionapexcapital.com.

**3. Terms of Use**
Use this website responsibly. Do not attempt to exploit, copy, or reverse engineer site code or assets without permission.

---

### Insights Page (`/insights`)

**Heading:** Insights

**Description:** Grid display of blog posts from `/content/posts/` directory

**Post Cards Display:**
- Post title (linked)
- Excerpt
- Publication date
- Hover effect with glow shadow

---

## 📝 Blog Posts / Insights

### Post 1: "Our Trading Framework: Precision, Confluence, Risk First"
- **Date:** 2025-08-20
- **Excerpt:** A concise overview of how we structure short-term trades: confluence-driven entries, ATR stops, and disciplined exit logic.

**Content:**

> *Nothing here is financial advice.*

We focus on **short-term setups (≤72h)** in scalp, breakout, and swing categories, built on **multi-timeframe confluence** (1H + 4H/D). We require **2:1 minimum R:R**, employ **ATR-based stops**, and track **volatility and liquidity** to avoid poor conditions.

**Execution notes:**
- Confirm with RSI/MACD slope, EMA200 trend context, and volume impulse thresholds.
- Move SL to breakeven at TP1 and trail after impulse continuation.
- Avoid thin books; we require sensible liquidity and ≤0.2% expected slippage for $1–3k tickets.

We combine quantified rules with real operator judgment to preserve capital and sustain edge.

---

### Post 2: "ATM Placements: A Practical Playbook"
- **Date:** 2025-08-18
- **Excerpt:** How we evaluate, place, and manage ATMs for reliable yield and transparent operations.

**Content:**

**Thesis:** Location quality dominates. We prioritize **foot traffic, transaction intent, and local demographics** over convenience alone.

**Highlights**
- 6–8 placements target; $18k–$25k annual profit objective.
- Uptime monitoring; transparent fee structure; cash logistics optimized.
- Simple is scalable. We keep routing, repairs, and reconciliation clean.

---

### Post 3: "Digital Assets Flywheel: Buy, Improve, Recycle"
- **Date:** 2025-08-15
- **Excerpt:** Our approach to acquiring and improving web properties, capturing cashflow, and recycling capital via resale.

**Content:**

**Acquire**: Clean SEO, legit content, and diversified monetization.  
**Improve**: UX, speed, affiliate/ads balance, SOPs, and content velocity.  
**Recycle**: Exit at better multiples; redeploy into the next edge.

Discipline compounds. We avoid hype and anchor to operator math.

---

## 🧭 Navigation Structure

### Header Navigation (Desktop)
- About
- Services
- Insights
- Personal Bio
- Contact
- **CTA Button:** "Partner With Us" → /contact

### Footer Navigation

**Column 1: Brand**
- Orion Apex Capital
- Tagline: Precision strategies for sustainable growth across digital and real‑world assets.

**Column 2: Navigate**
- About
- Services
- Insights
- Personal Bio
- Contact
- Legal

**Column 3: Connect**
- **Email:** contact@orionapexcapital.com
- Social links (currently disabled): LinkedIn, X, YouTube
- Copyright: © 2025 Orion Apex Capital. All rights reserved.

**Footer Disclaimer:**
Nothing on this site constitutes financial, legal, or tax advice. Markets carry risk. Do your own research.

---

## 📧 Contact Information

- **Main Email:** contact@orionapexcapital.com
- **Privacy Email:** privacy@orionapexcapital.com

---

## 🎯 Key Messaging Themes

### Brand Positioning
- **Tagline:** Precision. Growth. Legacy.
- **Core Message:** Disciplined, risk-managed strategies across multiple asset classes
- **Tone:** Professional, data-driven, operator-focused, transparent

### Value Propositions
1. **Risk-First Approach:** 2:1 R:R minimum, ATR-based stops, volatility filters
2. **Multi-Asset Expertise:** Crypto trading, ATM placements, digital assets
3. **Operator Mindset:** Real-world execution + quantified systems
4. **Transparency:** Clear reporting, honest constraints, educational content

### Target Audience
- Sophisticated investors interested in alternative strategies
- Operators looking for advisory/consulting
- Partners for business opportunities
- Newsletter subscribers seeking market insights

---

## 🖼️ Asset Inventory

### Images (SVG)
- `/public/images/dan-headshot.svg` - Profile photo
- `/public/images/favicon.svg` - Site favicon
- `/public/images/hero-abstract.svg` - Abstract graphic
- `/public/images/icon-atm.svg` - ATM icon
- `/public/images/icon-chart.svg` - Trading chart icon
- `/public/images/icon-shield.svg` - Risk/security icon
- `/public/images/icon-web.svg` - Website/digital icon

### Brand Assets (in `/assets/`)
- Various favicon sizes (16px to 512px)
- Hero images (multiple breakpoints)
- Social media open graph images
- Logo variations (avatar, square, white)
- Background patterns

---

## 📱 Responsive Behavior

### Mobile Considerations
- Navigation collapses on mobile (hidden menu on < md breakpoint)
- Grid layouts collapse to single column
- Hero text scales down from 6xl to 4xl
- CTA button "Partner With Us" hidden on smallest screens
- Cards stack vertically

---

## ⚙️ Technical Implementation Notes

### Content Management
- Blog posts stored as Markdown files in `/content/posts/`
- Frontmatter format:
  ```yaml
  ---
  title: "Post Title"
  date: "YYYY-MM-DD"
  excerpt: "Brief description"
  ---
  ```
- Posts rendered via `[slug].js` dynamic route

### API Endpoints
- `/api/contact` - Form submission handler
- `/api/subscribe` - Newsletter signup handler

### SEO Elements
- Sitemap.xml in public directory
- Robots.txt configured
- Open Graph images for social sharing
- Web manifest for PWA support

---

## 🚀 Deployment Notes

### Build Commands
```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
```

### Environment Considerations
- API endpoints likely need environment variables for email service (Resend)
- No external database required (static site generation)

---

## 📋 Content Guidelines

### Voice & Tone
- Direct and confident, not boastful
- Data-informed language
- Emphasis on discipline, risk management, transparency
- Technical but accessible
- No hype or unrealistic promises

### Disclaimers
- Consistent disclaimers about not being financial advice
- Clear that content is educational/informational
- No solicitation of securities

---

## 🔄 Rebuild Checklist

When rebuilding this site:

- [ ] Install Next.js 14+ with React 18+
- [ ] Configure Tailwind CSS with custom colors (navy, teal, gold)
- [ ] Set up Framer Motion for hero animations
- [ ] Create starfield background CSS animation
- [ ] Build responsive navigation with sticky header
- [ ] Implement markdown blog system with gray-matter
- [ ] Create contact form with API route
- [ ] Create newsletter form with API route
- [ ] Configure Resend for email handling
- [ ] Add all 7 pages with exact content
- [ ] Create 3 blog post markdown files
- [ ] Design and implement card component system
- [ ] Add all icon SVGs (chart, atm, web, shield)
- [ ] Configure SEO metadata
- [ ] Set up favicon and OG images
- [ ] Test mobile responsive behavior
- [ ] Verify all internal links work
- [ ] Deploy and test API endpoints

---

**End of Documentation**

*This document captures the complete structure and content of OrionApexCapital.com as of October 2025. Use it as a reference for rebuilding or migrating the site to a new platform.*

