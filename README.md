# Priyavrata Deb | Portfolio

Personal portfolio website for my Electrical & Computer Engineering studies at Georgia Tech. It includes my bio, resume, career goals, skills, and project work, including my Discovery Project.

**Live site:** [https://priyavratadeb.github.io/PortfolioWebsite/]

## Sections

- **Welcome:** a short introduction
- **About:** my story and strengths
- **Resume:** education and experience, with a downloadable PDF
- **Career Goals:** my roadmap from now to my long-term goal
- **Skills:** grouped by category
- **Projects:** my Discovery Project feature and other work
- **Contact:** email and social links

## Built with

- [React](https://react.dev/) and [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) icons
- Hosted on GitHub Pages

## Run it locally

You need [Node.js](https://nodejs.org/) version 20 or newer.

```bash
npm install
npm run dev
```

Open the address it prints (usually `http://localhost:5173/`).

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Creates the production site in `dist/` |
| `npm run preview` | Previews the production build |
| `npm run lint` | Checks the code for problems |
| `npm run check` | Checks the word count, image count, resume file, and leftover placeholders |

## Project structure

```
public/
  resume.pdf          my resume
  images/             photos and project images
src/
  data/content.js     all text, links, and image paths
  components/         one file per section of the page
  pages/Home.jsx      puts the sections in order
  index.css           colors, fonts, and shared styles
scripts/check.mjs     the requirements checker
.github/workflows/    automatic deploy to GitHub Pages
```

## Editing the content

Almost everything on the site comes from `src/data/content.js`. To update the site:

1. Edit the text in `src/data/content.js`.
2. Replace `public/resume.pdf` and add images to `public/images/`.
3. Run `npm run dev` to preview and `npm run check` to verify.

To add a project, copy an entry in the `projects` list in `content.js`, change its text, and add its image to `public/images/`.

## Deploying

Pushing to the `main` branch publishes the site automatically with GitHub Actions. One-time setup: in the repo, go to **Settings > Pages** and set **Source** to **GitHub Actions**.

## Credits

Started from [Beautiful React Tailwind Portfolio](https://youtu.be/ifOJ0R5UQOc?si=vL_saQfSQfcWirOJ) by Pedro Machado (PedroTech), then customized and extended for my ePortfolio assignment. All content, photos, and project work are my own unless credited otherwise.