# Branding Assets Integration Guide

## ✅ Integrated Assets

All branding assets from `assets/branding/` have been successfully copied to `public/images/branding/` and integrated into the V2 site.

---

## 🎨 Asset Mapping

### Logo Variations

| Asset | Usage | Location |
|-------|-------|----------|
| `03-icon_crest_white-transparent.png` | Navbar logo | `components/Navbar.js` |
| `logo_avatar_round_1024.png` | Bio page headshot | `pages/bio.js` |
| `04-wordmark_white-transparent.png` | Alternative logo/footer | Available |
| `02-horizontal_primary_white-transparent.png` | Full horizontal logo | Available |

### Favicons & Meta Images

| Asset | Usage | Referenced In |
|-------|-------|---------------|
| `favicon.ico` | Browser tab icon | `components/SEOHead.js` |
| `favicon-16.png` | 16x16 favicon | `components/SEOHead.js` |
| `favicon-32.png` | 32x32 favicon | `components/SEOHead.js` |
| `favicon-48.png` | 48x48 favicon | `components/SEOHead.js` |
| `apple-touch-icon.png` | iOS home screen | `components/SEOHead.js` |
| `og-1200x630.png` | OpenGraph/Facebook | `components/SEOHead.js` |
| `twitter-1600x900.png` | Twitter card | `components/SEOHead.js` |
| `linkedin-1200x627.png` | LinkedIn sharing | Available |

### Hero Background Images

| Asset | Usage | Breakpoint |
|-------|-------|-----------|
| `hero-2560x1440.jpg` | Desktop hero (2XL) | ≥1536px |
| `hero-wide-1536x768.jpg` | Desktop hero | Default |
| `hero-mobile-1080x1920.jpg` | Mobile hero | ≤768px |
| `hero-1920x1080.jpg` | Alternative desktop | Available |

**Integrated in:** `styles/globals.css` → `.starfield` class

### Additional Assets

| Asset | Potential Use |
|-------|---------------|
| `bg-tile-512.png` | Background patterns |
| `square-1080x1080.png` | Social media posts |
| `android-chrome-192x192.png` | PWA icon (small) |
| `android-chrome-512x512.png` | PWA icon (large) |
| `orion-apex-banner.png` | Email signatures, presentations |

---

## 🔧 Component Updates

### 1. Navbar Logo
**File:** `components/Navbar.js`  
**Change:** Updated to use `03-icon_crest_white-transparent.png`
```jsx
<img
  src="/images/branding/03-icon_crest_white-transparent.png"
  alt="Orion Apex"
  className="h-8 w-8"
/>
```

### 2. SEO & Meta Tags
**File:** `components/SEOHead.js`  
**Changes:**
- All favicons pointing to branding folder
- OpenGraph image: `og-1200x630.png`
- Twitter card: `twitter-1600x900.png`
- Apple touch icon added
- Web manifest link added

### 3. Hero Background
**File:** `styles/globals.css`  
**Changes:**
- Desktop: `hero-wide-1536x768.jpg` with overlay
- Large desktop (2XL): `hero-2560x1440.jpg`
- Mobile: `hero-mobile-1080x1920.jpg`
- Dark gradient overlay for text readability

### 4. Bio Page
**File:** `pages/bio.js`  
**Change:** Profile image updated to `logo_avatar_round_1024.png`

### 5. Logo Grid (Social Proof)
**File:** `components/LogoGrid.js`  
**Change:** Using brand logo variations as placeholders
- Can be replaced with actual partner logos when available

---

## 📱 PWA Support

### Web Manifest
**File:** `public/site.webmanifest`  
**Status:** ✅ Copied from branding assets

Icons referenced:
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

### Service Worker (Future Enhancement)
Consider adding a service worker for offline support and improved PWA capabilities.

---

## 🌐 SEO Files

### Robots.txt
**File:** `public/robots.txt`  
**Status:** ✅ Created
- Allows all crawlers
- Links to sitemap

### Sitemap
**File:** `public/sitemap.xml`  
**Status:** ✅ Created
- All main pages included
- Priority levels set
- Change frequencies defined

---

## 🎯 Alternative Logo Options

If you want to use different logo styles in certain areas:

### Horizontal Logo with Tagline
```jsx
<img src="/images/branding/02b-horizontal_with_tagline_white-transparent.png" />
```
**Best for:** Footer, email signatures, print materials

### Wordmark Only
```jsx
<img src="/images/branding/04-wordmark_white-transparent.png" />
```
**Best for:** Minimal headers, mobile views

### Maroon/Navy Versions
For light backgrounds, use maroon-navy versions:
- `03-icon_crest_maroon-navy.png`
- `04-wordmark_maroon-navy.png`
- `02-horizontal_primary_maroon-navy.png`

---

## 📊 Image Optimization Notes

### Current Status
All images are production-ready but not optimized for web.

### Recommended Optimizations

1. **Convert PNGs to WebP/AVIF** for better compression
2. **Hero images**: Already optimized JPGs (good!)
3. **Logo PNGs**: Consider creating SVG versions for perfect scaling
4. **Favicon**: ICO file works, but modern browsers prefer PNG

### Next.js Image Optimization

To enable Next.js Image component optimization:

1. Update `next.config.js`:
```js
module.exports = {
  images: {
    unoptimized: false, // Enable optimization
    formats: ['image/avif', 'image/webp']
  }
};
```

2. Replace `<img>` with Next.js `<Image>`:
```jsx
import Image from 'next/image';

<Image
  src="/images/branding/03-icon_crest_white-transparent.png"
  alt="Orion Apex"
  width={32}
  height={32}
/>
```

**Note:** This requires a server (doesn't work with static export).

---

## 🎨 Brand Color Usage

Your brand colors from the design system match the logo:

```css
--navy-900: #0B1F3B    /* Primary navy from logo */
--maroon-700: #7C1F29  /* Primary maroon from logo */
--teal-400: #2DD4BF    /* Accent teal */
--gold-500: #E6B800    /* Accent gold */
```

These are already configured in `tailwind.config.js`.

---

## ✨ Future Enhancements

### Email Signatures
Use `orion-apex-banner.png` for professional email signatures.

### Social Media
- Instagram/LinkedIn: `square-1080x1080.png`
- Twitter header: `twitter-1600x900.png`
- LinkedIn cover: `linkedin-1200x627.png`

### Print Materials
High-res versions available:
- `01-stacked_primary_maroon-navy.png` (1000+ px)
- `02-horizontal_primary_maroon-navy.png` (2000+ px)

### Partner Logo Integration
Replace placeholder logos in `LogoGrid.js` with actual partner logos:
1. Add partner logos to `public/images/partners/`
2. Update the `logos` array in `components/LogoGrid.js`
3. Ensure consistent sizing (height: 32px recommended)

---

## 🔍 Testing Checklist

After branding integration:

- [x] Navbar logo displays correctly
- [x] Favicon appears in browser tab
- [x] Hero background loads on desktop
- [x] Hero background loads on mobile
- [x] Bio page avatar displays
- [x] OpenGraph image set for social sharing
- [x] Twitter card image set
- [ ] Test social sharing (Facebook, Twitter, LinkedIn)
- [ ] Verify PWA icons (add to home screen)
- [ ] Check logo on various screen sizes
- [ ] Test dark/light mode compatibility (if implementing)

---

## 📞 Questions?

For branding guidelines or additional assets needed:
- Review `assets/branding/README.txt` (if exists)
- Contact: contact@orionapexcapital.com

---

**All branding assets successfully integrated! 🎨**

Last updated: October 3, 2025

