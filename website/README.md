# cappiegold.github.io

My personal portfolio as a fullstack developer, built with Astro and Tailwind CSS.

## Preview

Live site: [https://cappiegold.github.io](https://cappiegold.github.io)

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **TypeScript** - For type-safe configuration

## Content configuration

All the site's content is managed in the `src/config.ts` file:

- **Personal info**: name, title, description
- **Accent color**: theme's main color
- **Social links**: email, LinkedIn, Twitter, GitHub (all optional)
- **About**: personal bio
- **Skills**: list of technical skills
- **Projects**: project showcase with description and link
- **Experience**: work history
- **Education**: academic background

If a section (skills, projects, experience, education) is left empty in the config, it is automatically hidden.

## Project Structure

```
website/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Local Development

To run the project locally:

```
npm install
```

Then start the Astro dev server:

```
npm run dev
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.
