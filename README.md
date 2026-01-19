<div align="center">
  <h1>SYNALTICA '26 — Official Tech Symposium Website</h1>
  <p>Lightweight React + Vite website for the SYNALTICA '26 event — event listing, details, registration links and contact information.</p>
</div>

## 🚀 Overview

This repository contains the front-end website for SYNALTICA '26 — a college tech symposium. It's built with React + TypeScript and uses Vite for fast development and production builds.

Key features:
- Animated landing hero, event cards and modal popups with consistent entrance animations
- Responsive layout optimized for mobile and desktop
- Event detail modals (Overview, Rules, Team Size) and easy registration linking
- Clean, zero-backend static site ready for hosting on Vercel, Netlify or GitHub Pages

## 🧰 Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS + custom keyframe animations

## 📦 Getting started (local)

Prerequisites: Node.js 18+ and npm

1. Clone the repo (if you haven't already):

```bash
git clone https://github.com/Jishnuvpz/synaltica-26.git
cd synaltica-26
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY
```

4. Run development server:

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## 🧪 Build for production

```bash
npm run build
```

This creates a `dist/` folder which you can deploy to any static host.

To verify the build locally:

```bash
npm run preview
```

**Important:** Make sure to set `GEMINI_API_KEY` in your deployment platform's environment variables.

## ☁️ Deployment options

Recommended providers:

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel dashboard
3. Add `GEMINI_API_KEY` in Environment Variables
4. Deploy

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add `GEMINI_API_KEY` in Environment Variables
4. Deploy

### GitHub Pages

1. Install `gh-pages`:

```bash
npm install -D gh-pages
```

2. Add to package.json scripts:

```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Add `homepage` field to package.json:

```json
"homepage": "https://yourusername.github.io/synaltica-26"
```

4. Deploy:

```bash
npm run deploy
```

**Note:** For GitHub Pages, environment variables should be added during build time or use a different approach for API keys.

## 🔒 Security Note

Never commit your `.env` file with actual API keys. The `.env.example` file is provided as a template. For production deployments, always use your hosting platform's environment variable configuration.

## ✅ Project status

This site is production-ready: the repository compiles, builds and has been pushed to GitHub (branch `main`). If you want, I can add a CI workflow to automatically build & deploy (Vercel, Netlify or GitHub Pages).

## 🤝 Contributing

Contributions are welcome. Typical workflow:

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description

Please keep changes small and focused — update README when adding or changing features.

## 👤 Maintainer / Contact

- Jishnuvpz — jishuchoorakode@gmail.com

## 📜 License

MIT — feel free to reuse and adapt for your own events.

---

If you'd like, I can also add a GitHub Actions workflow to build on push and deploy to GitHub Pages or create a Vercel/Netlify deployment configuration.
