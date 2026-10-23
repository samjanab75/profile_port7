# Samjana Portfolio

A responsive water-pink personal portfolio built with React, Vite, Tailwind CSS, Flowbite React, and Lucide icons.

## Run locally

1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP and open the `samjana-portfolio` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in your terminal (usually http://localhost:5173).

Before publishing, replace the three example project URLs in `src/data/portfolioData.js`, add your own project screenshots to `public/`, and add your resume as `public/resume.pdf` if you want the resume button to work.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/ and import the repository.
3. Keep the default Vite settings and deploy.
4. For visitor analytics, enable Web Analytics in the Vercel project and redeploy if prompted.

## Personal data and privacy

The template intentionally shows Chennai rather than a full home address. Consider keeping your full residential address private. Analytics can show aggregate visits and traffic information, not automatically identify the real-world identity of each visitor.

## Customize

- Profile, education, experience, skills, projects and certificates: `src/data/portfolioData.js`
- Main layout: `src/App.jsx`
- Colors and styles: `src/index.css` and `tailwind.config.js`
- Put profile image at `public/profile.jpg` (optional)
- Put project images at `public/project-one.svg`, `public/project-two.svg`, and `public/project-three.svg` (sample placeholders are included)
