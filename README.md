# Offensive Security Portfolio — React

This is a React/Vite conversion of the supplied `portfolio.html` reference. The source reference uses an IBM Plex Sans / IBM Plex Mono dark UI, amber accent, sticky navigation, skills, experience, projects, certifications, education, theme toggle and a downloadable CV.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Resume

The supplied HTML contained an embedded PDF. It has been extracted to:

`public/resume.pdf`

Replace it with the final resume PDF when ready.

## Edit content

All portfolio content is in:

`src/data/portfolioData.js`

## Profile photo

The supplied reference does not contain a profile photo, so the React version does not invent one. If you want one later, add it to `public/images/` and wire it into `Hero.jsx`.

## Labs / CTF

The supplied reference did not contain actual lab/CTF entries, so the Labs section is data-driven and remains hidden until real entries are added to `portfolioData.js`.
