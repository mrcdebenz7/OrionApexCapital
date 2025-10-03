# V2 Setup Guide

## 🎯 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages from `package.json`.

### Step 2: Create Environment File (Optional)

Create a file named `.env.local` in the root directory:

```bash
# Email Configuration (Optional)
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=contact@orionapexcapital.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note**: The site works without environment variables. The contact form will log to console in development mode.

### Step 3: Verify Directory Structure

Ensure these directories exist:
- `content/posts/` ✓ (already has 3 posts)
- `content/cases/` ✓ (already has 4 case studies)
- `public/images/` (add your images here)

### Step 4: Add Images

Place these images in `assets/branding/`:

**Required:**
- `logo-mark.svg` - Company logo
- `favicon.svg` - Site favicon
- `og-banner.png` - Social media preview image (1200×630)
- `dan-headshot.svg` - Bio page headshot
- `hero-texture.avif` - Hero background (optional)

**Optional (for social proof):**
- `placeholder-logo-1.svg`
- `placeholder-logo-2.svg`

### Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deployment Options

### Option A: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables in Vercel dashboard
6. Deploy!

**Auto-deploy**: Every push to `main` will auto-deploy.

### Option B: Static Export

For traditional hosting (Netlify, AWS S3, etc.):

1. Update `next.config.js`:
   ```js
   module.exports = {
     output: 'export',
     images: { unoptimized: true }
   };
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Upload `out/` directory to your host

---

## ✅ Verification Checklist

After setup, verify these work:

- [ ] Homepage loads at `http://localhost:3000`
- [ ] All navigation links work
- [ ] Blog posts appear on `/insights`
- [ ] Case studies appear on `/freelance`
- [ ] Contact form displays on `/contact`
- [ ] Mobile menu opens/closes
- [ ] All pages have proper titles and meta tags

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js` → `theme.extend.colors`

### Update Content

- **Blog posts**: Edit files in `content/posts/`
- **Case studies**: Edit files in `content/cases/`
- **Page content**: Edit files in `pages/`

### Add New Pages

1. Create `pages/your-page.js`
2. Add link to `components/Navbar.js`
3. Add link to `components/Footer.js`

---

## 🐛 Common Issues

### Issue: Port 3000 in use

```bash
# Use a different port
PORT=3001 npm run dev
```

### Issue: Build errors about missing content

Ensure `content/posts/` and `content/cases/` directories exist and contain `.md` files.

### Issue: Images not loading

- Check file paths match exactly (case-sensitive)
- Ensure files are in `public/images/`
- Use `/images/filename.svg` format (leading slash)

### Issue: Styles not loading

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (or use their test domain)
3. Create API key
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxx
   CONTACT_TO_EMAIL=your@email.com
   ```
5. Restart dev server

---

## 🔍 Testing

### Test Contact Form

1. Go to `/contact`
2. Fill out form
3. Check console logs (dev mode) or email (production)

### Test Navigation

- Desktop: All links in header and footer
- Mobile: Hamburger menu → all links
- Keyboard: Tab through all interactive elements

### Test Content

- Blog posts render correctly
- Case studies display tags and timeline
- All internal links work

---

## 📚 Next Steps

1. Replace placeholder images with real assets
2. Update bio content in `pages/bio.js`
3. Customize services in `pages/services.js`
4. Add more blog posts and case studies
5. Set up analytics (GA4 or Plausible)
6. Configure email service (Resend)
7. Test on mobile devices
8. Run Lighthouse audit
9. Deploy to production!

---

## 🆘 Need Help?

- Review [V2_SITE_SPECIFICATION.md](V2_SITE_SPECIFICATION.md)
- Check [README_V2.md](README_V2.md)
- Email: contact@orionapexcapital.com

---

**Your V2 site is ready to launch! 🚀**

