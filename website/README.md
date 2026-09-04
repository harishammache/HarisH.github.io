# cappiegold.github.io

Mon portfolio personnel de développeur fullstack, construit avec Astro et Tailwind CSS.

## Aperçu

Site en ligne : [https://cappiegold.github.io](https://cappiegold.github.io)

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **TypeScript** - For type-safe configuration

## Configuration du contenu

Tout le contenu du site se modifie dans le fichier `src/config.ts` :

- **Infos personnelles** : nom, titre, description
- **Couleur d'accent** : couleur principale du thème
- **Réseaux sociaux** : email, LinkedIn, Twitter, GitHub (tous optionnels)
- **À propos** : bio personnelle
- **Compétences** : liste des compétences techniques
- **Projets** : présentation de projets avec description et lien
- **Expérience** : parcours professionnel
- **Formation** : parcours scolaire

Si une section (compétences, projets, expérience, formation) est vide dans la config, elle est automatiquement masquée.

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

Pour lancer le projet en local :

```
npm install
```

Puis démarrer le serveur de développement Astro :

```
npm run dev
```

## Deployment

Ce site est déployé automatiquement sur GitHub Pages via GitHub Actions à chaque push sur `main`.
