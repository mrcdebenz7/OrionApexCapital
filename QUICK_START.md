# 🚀 Quick Start Guide

Get your V2 site running in 3 minutes!

---

## Step 1: Install Dependencies (1 min)

```bash
npm install
```

This installs all required packages from `package.json`.

---

## Step 2: Run Development Server (30 sec)

```bash
npm run dev
```

Open your browser to:
```
http://localhost:3000
```

---

## Step 3: Verify Everything Works (1 min)

✅ **Check these pages:**
- Homepage: http://localhost:3000
- About: http://localhost:3000/about
- Services: http://localhost:3000/services
- Insights: http://localhost:3000/insights
- **Freelance (NEW!)**: http://localhost:3000/freelance
- Bio: http://localhost:3000/bio
- Contact: http://localhost:3000/contact

✅ **Test functionality:**
- Click navigation links
- Open mobile menu (resize browser)
- Visit a blog post
- Visit a case study (NEW!)
- Check logo displays in navbar
- Verify hero background loads

---

## ✅ You're Ready!

If all pages load and navigation works, **you're good to go!**

### Next Steps (Optional)

#### Add Email Support
Create `.env.local` file:
```bash
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=contact@orionapexcapital.com
```

#### Deploy to Vercel
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Deploy! 🚀

---

## 🐛 Troubleshooting

### Port 3000 in use?
```bash
PORT=3001 npm run dev
```

### Build errors?
```bash
rm -rf .next
npm run dev
```

### Images not loading?
- Check files exist in `public/images/branding/`
- Clear browser cache

---

## 📚 More Help

- **Setup Guide:** [SETUP.md](SETUP.md)
- **Full Docs:** [README_V2.md](README_V2.md)
- **Branding:** [BRANDING_INTEGRATION.md](BRANDING_INTEGRATION.md)

---

**That's it! Your V2 site is running! 🎉**

