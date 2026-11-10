# Change log

Every change in the code is tagged with a comment like `CHANGE #7`, so you can
search for it (Ctrl+Shift+F in VS Code). Placeholders you must replace are in
[square brackets].

## A. Assignment requirements

| # | Where | What changed | Why |
|---|-------|--------------|-----|
| 1 | `src/data/content.js` (new) | All personal text, links and image paths now live in ONE file | You edit one file instead of hunting through 9 components. It also lets `npm run check` count words |
| 9 | `HeroSection.jsx` | Now the required **Welcome/Summary**: name, headline, 3-4 sentence welcome, headshot, buttons | Required component 1 |
| 10 | `AboutSection.jsx` | Now the required **Biography**: 3 story paragraphs + 3 strengths | Required component 2 |
| 11 | `ResumeSection.jsx` (new) | Education and experience on the page, plus **View** and **Download** buttons for `resume.pdf` | Required component 3 ("easy to view and download") |
| 12 | `GoalsSection.jsx` (new) | Career Goals timeline: Now, Next, Then, Long term | Required component 4 ("how you get from here to there") |
| 14 | `ProjectsSection.jsx` | **Discovery Project Feature** (Problem / Process / Outcome, 3 photos with captions, optional video, links) plus a scalable "More projects" grid | Required component 5. To add a project, add one entry to `content.js` |
| 15 | `ContactSection.jsx` | Real `mailto:` link plus LinkedIn/GitHub buttons. Fake form, fake phone and Pedro's details removed | Rubric expects contact info; the old form delivered nothing |
| 13 | `SkillsSection.jsx` | Made-up percentage bars replaced with skills grouped by category | Unprovable percentages look unprofessional (Recruiter-ready) |
| 16 | `Footer.jsx` | Your name instead of "Pedrotech.co" | Recruiter-ready |
| 20 | `pages/Home.jsx` | Section order: Welcome > About > Resume > Goals > Skills > Projects > Contact; skip-to-content link | Rubric: "Well-organized / logical flow" |
| 21 | `scripts/check.mjs` (new), `package.json` | `npm run check` reports total words (1000), Discovery words (400), images (5), resume file, and leftover placeholders | Lets you verify the numeric requirements yourself |

## B. Bugs fixed (broken in the tutorial code)

| # | Where | What changed |
|---|-------|--------------|
| 2 | `App.jsx` | Removed React Router (it caused 404s on GitHub Pages and a one-page site doesn't need it) and the Toaster |
| 3 | `index.css` | Defined missing colors (`secondary`, `muted-foreground`, `input`, `ring`) and the `text-gradient` utility. Added `@custom-variant dark` so dark-mode classes follow the toggle. Removed global `text-align: center` |
| 6 | `Navbar.jsx` | `window.screenY` fixed to `scrollY`; `backdroup-blur` typo; mobile menu moved outside `<nav>` (it was clipped once the nav blurred); Escape closes the menu |
| 8 | `StarBackground.jsx` | Meteor delay was missing the `"s"` unit; stars no longer reshuffle when a phone's address bar hides |
| 9 | `HeroSection.jsx` | `max-2-2xl` typo fixed to `max-w-2xl` |
| 7 | `ThemeToggle.jsx` | `outlin-hidden` typo; the button was hidden on phones, now it's in the navbar on every screen |
| 14 | `ProjectsSection.jsx` | Missing `key` on tags; link icons all pointed to `#` |
| 15 | `ContactSection.jsx` | `foucs:ring-2` typo (x3) and `onSubmit` on the wrong element (both gone with the fake form) |
| 13 | `SkillsSection.jsx` | `text-forefround` and `hover:bd-secondary` typos (that code was removed) |
| 5 | `vite.config.js` | `base: "./"` so the build works at any GitHub Pages URL; replaced `__dirname` to remove a warning |

## C. User-friendliness, accessibility and polish

| # | Where | What changed |
|---|-------|--------------|
| 3 | `index.css` | Fonts (Space Grotesk + IBM Plex Sans); darker purple for contrast in light mode; dark text on buttons in dark mode; visible keyboard focus; sections no longer hide under the sticky navbar; respects "reduce motion" |
| 4 | `index.html` | Real page title and description; fonts; dark/light mode applied before first paint (no white flash); favicon path fixed |
| 6 | `Navbar.jsx` | Highlights the section you're viewing; menu includes Resume and Career Goals |
| 7 | `ThemeToggle.jsx` | Follows the visitor's system theme the first time; accessible label |
| 8 | `StarBackground.jsx` | Hidden from screen readers; shown only in dark mode |
| 17 | `SmartImage.jsx` (new), `lib/utils.js` | All images lazy-load, require alt text, and show an "Add image: path" box if the file is missing instead of a broken icon |
| 18 | deleted | `use-toast.js`, `toast.jsx`, `toaster.jsx` (only the fake form used them) |
| 19 | `.github/workflows/deploy.yml` (new) | Auto-publishes to GitHub Pages on every push to `main` |
