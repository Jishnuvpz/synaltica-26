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

3. Run development server:

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## 🧪 Build for production

```bash
npm run build
```

This creates a `dist/` folder which you can deploy to any static host.

## ☁️ Deployment options

Recommended providers:

- Vercel — excellent for Vite sites, automatic builds from GitHub
- Netlify — drag & drop `dist/` or connect repo for CI/CD
- GitHub Pages — use the `gh-pages` package or GitHub Actions to publish `dist/`

Example: deploy with Vercel

1. Install vercel CLI (optional):

```bash
npm i -g vercel
vercel
```

2. Follow the interactive prompts and select the repository

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
