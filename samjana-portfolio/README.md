# Samjana Portfolio — Multi-page version

Responsive personal portfolio using React, Vite, Tailwind CSS, Flowbite React, Lucide icons, and React Router.

## Run locally
1. Extract the ZIP.
2. Open the `samjana-portfolio` folder in VS Code.
3. Open a terminal in that folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed in the terminal.

## Pages
- `/` — Home and profile card
- `/about` — About me
- `/experience` — Work experience
- `/skills` — Technical skills and languages
- `/projects` — Project cards
- `/education` — Education, certificates and achievements
- `/contact` — Contact form

Navigation items now open separate pages instead of scrolling to sections.

## Customize before publishing
- Edit personal details, skills and project details in `src/data/portfolioData.js`.
- Add `public/profile.jpg` for your own profile photo.
- Add `public/resume.pdf` for the resume download button.
- Replace the three sample project URLs and descriptions with your real project links.
- Run `npm run build` to test the production build.

## Deploy
Push the folder to GitHub, import the repository at https://vercel.com/, and deploy with Vite defaults.

Vercel Analytics is included. Enable Web Analytics in your Vercel project to view aggregate visit statistics; it does not automatically identify each visitor by name.
