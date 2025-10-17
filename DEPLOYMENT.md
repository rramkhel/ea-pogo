# Deployment Guide - EA Pogo Portfolio

## Quick Start - Deploy to Vercel

### Method 1: Using Vercel CLI (Fastest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

That's it! Vercel will automatically detect your Vite configuration and deploy.

---

### Method 2: GitHub Integration (Recommended for production)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` triggers a new deployment
   - Pull requests get preview deployments
   - Zero configuration needed

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
ea-pogo/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Route pages
│   ├── App.jsx          # Router configuration
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── dist/                # Production build (generated)
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── vercel.json          # Vercel SPA routing config
└── package.json         # Dependencies & scripts
```

---

## Vercel Configuration

The `vercel.json` file ensures proper SPA routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This makes sure all routes (like `/dashboard`, `/strategy`) redirect to `index.html` for client-side routing.

---

## Environment Variables

No environment variables are needed for this static portfolio site.

---

## Custom Domain Setup (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Vercel automatically provisions SSL certificate

---

## Performance Optimization

Already configured:
- ✅ Vite's optimized production build
- ✅ Automatic code splitting
- ✅ Minified CSS and JS
- ✅ Tree-shaking for unused code
- ✅ Gzip compression (31.26 kB CSS, 75.73 kB JS)

---

## Troubleshooting

### Build fails on Vercel

**Problem**: Vercel build fails
**Solution**: Check build logs for errors. Most common issues:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to debug

### Routes return 404

**Problem**: Direct navigation to routes like `/dashboard` returns 404
**Solution**: Ensure `vercel.json` exists with rewrite rules (already configured)

### Styles not loading

**Problem**: Tailwind styles missing
**Solution**:
- Verify `tailwind.config.js` content paths include all component files
- Check `postcss.config.js` exists
- Rebuild: `npm run build`

---

## Deployment Checklist

- [x] All dependencies installed
- [x] Production build succeeds locally (`npm run build`)
- [x] All routes working locally (`npm run preview`)
- [x] No console errors in browser
- [x] `vercel.json` configured for SPA routing
- [x] `README.md` updated with deployment info
- [x] Git repository clean and pushed

---

## Monitoring & Analytics (Optional)

To add analytics after deployment:

1. **Vercel Analytics** (Built-in)
   - Enable in Vercel dashboard under "Analytics"
   - Free tier: 100k data points/month

2. **Google Analytics**
   ```bash
   npm install react-ga4
   ```
   Add tracking code to `src/main.jsx`

---

## Support

- Vite docs: https://vitejs.dev
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- Vercel docs: https://vercel.com/docs

---

**Your site is ready to deploy!** 🚀

Just run `vercel --prod` or push to GitHub + connect Vercel.
