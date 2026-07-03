<div align="center">

# Landing Page Template

![Astro](https://img.shields.io/badge/astro-%232C2231.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

A high-performance landing page template built with **Astro** and **Tailwind CSS**. Zero JavaScript shipped by default, perfect scores on Lighthouse.

<a href="https://landing-page-template.pages.dev/" target="_blank">
  <img src="https://img.shields.io/badge/View_Live_Site-FF8231?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Live Site">
</a>

</div>

---

## Features

- **Zero JS by default** — static HTML output from Astro
- **Tailwind CSS v4** — utility-first styling with the Vite plugin
- **Responsive** — mobile-first design with breakpoints
- **Lottie animations** — lightweight vector animations via dotlottie
- **Prettier** — consistent formatting with Astro and Tailwind plugins

## Stack

- [Astro v5](https://astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript
- Prettier

## Quick Start

```bash
git clone https://github.com/davidalarcondev/landing-page-template.git
cd landing-page-template
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

### Build

```bash
npm run build
```

Output goes to `dist/`.

## Project Structure

```
├── public/              # Static assets (fonts, images, favicons)
├── src/
│   ├── assets/          # Imported images and resources
│   ├── components/      # Astro components (icons, cards)
│   ├── layouts/         # Base layout with SEO and footer
│   ├── pages/           # Routes (index.astro = homepage)
│   └── styles/          # Global CSS with Tailwind import
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## License

MIT © David
