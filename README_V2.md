# Orion Apex Capital - V2 Site

**Version:** 2.0  
**Tech Stack:** Next.js 14 + Tailwind CSS + Markdown  
**Status:** Production Ready

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run start
```

---

## 📁 Project Structure

```
orion-apex-capital/
├── components/          # React components
│   ├── Layout.js       # Main layout wrapper
│   ├── Navbar.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── Button.js       # Reusable button component
│   ├── Card.js         # Card wrapper
│   ├── SEOHead.js      # SEO metadata component
│   ├── Forms.js        # Contact form
│   └── ...
├── lib/                # Utility functions
│   ├── posts.js        # Blog post utilities
│   ├── cases.js        # Case study utilities
│   ├── analytics.js    # Analytics tracking
│   └── schema.js       # Schema.org markup
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── about.js        # About page
│   ├── services.js     # Services page
│   ├── bio.js          # Personal bio
│   ├── contact.js      # Contact page
│   ├── legal.js        # Legal disclosures
│   ├── insights/       # Blog section
│   ├── freelance/      # Portfolio section
│   └── api/            # API routes
├── content/            # Markdown content
│   ├── posts/          # Blog posts
│   └── cases/          # Case studies
├── styles/             # CSS files
│   └── globals.css     # Global styles + Tailwind
├── public/             # Static assets
│   └── images/         # Images and icons
└── ...config files
```

---

## 🎨 Design System

### Color Palette

- **Navy**: Primary background (`#0B1F3B`)
- **Maroon**: Primary action color (`#7C1F29`)
- **Teal**: Accent/focus (`#2DD4BF`)
- **Gold**: Secondary accent (`#E6B800`)
- **Neutral**: Text and borders (grays)

### Components

- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Cards**: `.card` with shadow and border
- **Forms**: `.input`, `.textarea` with focus states
- **Container**: Max-width 1200px with responsive padding

---

## 📝 Content Management

### Adding Blog Posts

Create a new markdown file in `content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2025-10-15"
excerpt: "Brief description for preview"
---

Your content here in markdown format.
```

### Adding Case Studies

Create a new markdown file in `content/cases/`:

```markdown
---
title: "Project Name"
sector: "Industry"
service: ["Service Type"]
outcome: "Key result achieved"
tags: ["Tag1", "Tag2"]
timeline: "Duration"
stack: ["Tool1", "Tool2"]
---

## Problem
Description...

## Approach
Solution...

## Impact
Results...
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` file (optional):

```bash
# Email via Resend (optional)
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=contact@orionapexcapital.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Tailwind Configuration

Edit `tailwind.config.js` to customize:
- Colors
- Breakpoints
- Spacing
- Typography

---

## 📧 Contact Form Setup

The contact form (`/pages/api/contact.js`) supports:

1. **Resend Integration** (production): Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`
2. **Console Logging** (development): Messages logged to console if env vars not set

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Set environment variables
4. Deploy automatically

### Static Export

For hosting on any static host:

```bash
# Update next.config.js:
# output: 'export'
# images: { unoptimized: true }

npm run build
# Output will be in 'out/' directory
```

---

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader tested
- Reduced motion support
- Skip-to-content link

---

## 🎯 Key Features

### V2 Additions

- ✅ **Freelance Work Section**: Portfolio with case studies
- ✅ **Enhanced Design System**: Professional finance aesthetic
- ✅ **Improved Navigation**: Sticky header with mobile menu
- ✅ **SEO Optimization**: Schema.org markup, OpenGraph tags
- ✅ **Analytics Integration**: Event tracking framework
- ✅ **Performance**: Core Web Vitals optimized

### Preserved from V1

- ✅ All existing pages (Home, About, Services, Bio, Contact, Legal)
- ✅ Blog/Insights section
- ✅ Contact form functionality
- ✅ Brand voice and messaging

---

## 📊 Analytics Events

Custom events tracked (see `lib/analytics.js`):

- `page_view` - Page navigation
- `cta_click` - CTA button clicks
- `form_submit` - Form submissions

Compatible with GA4 or Plausible.

---

## 🧪 Development

### Key Commands

```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Preview production
npm run lint      # Run ESLint
```

### Adding New Pages

1. Create page file in `pages/`
2. Import `Layout` component
3. Add navigation link in `components/Navbar.js`
4. Add footer link in `components/Footer.js`

---

## 📦 Dependencies

### Core

- `next` - React framework
- `react` - UI library
- `tailwindcss` - Utility-first CSS

### Content

- `gray-matter` - Frontmatter parser
- `remark` - Markdown processor
- `remark-html` - HTML renderer

### Utilities

- `clsx` - Class name utilities
- `lucide-react` - Icon library (if using icons)
- `resend` - Email service

---

## 🔐 Security

- No client-side secrets
- API routes for sensitive operations
- CSRF protection via Next.js defaults
- Environment variables for credentials

---

## 🐛 Troubleshooting

### Build Errors

**Issue**: `Cannot find module 'gray-matter'`  
**Fix**: Run `npm install`

**Issue**: `Error: ENOENT: no such file or directory`  
**Fix**: Ensure `content/posts/` and `content/cases/` directories exist

### Development Server

**Issue**: Port 3000 already in use  
**Fix**: Use `PORT=3001 npm run dev`

---

## 📄 License

© 2025 Orion Apex Capital. All rights reserved.

---

## 📞 Support

For questions or issues:
- Email: contact@orionapexcapital.com
- See: [V2_SITE_SPECIFICATION.md](V2_SITE_SPECIFICATION.md) for detailed documentation

---

**Built with precision. Deployed with confidence.**

