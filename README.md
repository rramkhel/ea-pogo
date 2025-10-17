# EA Pogo Portfolio - Rachel Ramkhelawan

Modern React portfolio showcasing AI-powered game recommendations and product strategy for EA Pogo Lead PM position.

## Features

- **Home**: Landing page with challenge overview and project highlights
- **AI Recommendations**: Interactive 3-view system (PM Dashboard, Player Experience, System Architecture)
- **Dashboard**: Live service metrics, competitive benchmarks, and strategic recommendations
- **Strategy**: Product strategy framework with persona analysis and business case
- **Presentation**: Slide deck format for interview presentation

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
npm run deploy
```

### Option 2: GitHub Integration

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Environment Setup

No environment variables required for this static portfolio.

## Project Structure

```
ea-pogo/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation bar
│   │   ├── Footer.jsx        # Footer component
│   │   └── BackButton.jsx    # Back navigation
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── AIRecommendations.jsx  # AI system showcase
│   │   ├── Dashboard.jsx     # Metrics dashboard
│   │   ├── Strategy.jsx      # Product strategy
│   │   └── Presentation.jsx  # Slide deck
│   ├── App.jsx               # Router setup
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── vercel.json               # Vercel SPA routing
└── package.json
```

## Design System

### Colors

- **Orange**: `#FF6B35` - Primary accent
- **Yellow**: `#FFB627` - Secondary accent
- **Teal**: `#95E1D3` - Tertiary accent
- **Dark Blue**: `#1a1a2e` - Background gradient start
- **Navy**: `#16213e` - Background gradient end

### Typography

- **Font**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Headings**: Bold/Black weights for hierarchy
- **Body**: Regular weight with increased line-height for readability

## Key Features

### Responsive Design

- Mobile-first approach
- Breakpoints at 768px (md) and 1024px (lg)
- Collapsible navigation on mobile

### Performance

- Vite's fast HMR for development
- Optimized production build with code splitting
- Lazy loading for images and components

### SEO

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags in index.html

## Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
```

### Routing Issues on Vercel

The `vercel.json` file ensures all routes redirect to `index.html` for client-side routing. If you experience routing issues:

1. Verify `vercel.json` exists in root directory
2. Ensure base URL in `vite.config.js` is set to `/`
3. Redeploy after configuration changes

## License

This portfolio is created for the EA Pogo Lead PM application.

© 2025 Rachel Ramkhelawan
