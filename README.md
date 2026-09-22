# Good Measure Studio

A polished, responsive marketing website for an independent web design and digital services business serving Sevenoaks and Kent.

## Brand direction

**Chosen name:** Good Measure Studio  
It communicates thoughtful work, clear scope and commercial usefulness without sounding generic or over-technical.

Domain-friendly options to check before purchase:

- `goodmeasure.studio`
- `goodmeasureweb.co.uk`
- `goodmeasurekent.co.uk`
- `workbygoodmeasure.co.uk`

Alternative names considered: Oak & Signal, Fieldwork Digital, Near & Clear, and Kentline Studio. Domain and trademark availability have not been verified.

## What is included

- Original one-page site with service, pricing, process, local trust, FAQ and contact sections
- Build-only / managed-monthly pricing switch
- Responsive mobile navigation
- Accessible structure, visible focus states and reduced-motion support
- Lightweight scroll reveals and a single hero “measure” animation
- Optimised metadata and an embedded custom favicon
- Original project-owned hero artwork

## Run locally

No build step or dependencies are required.

From this folder, run any static file server, for example:

```bash
python -m http.server 4173 --directory dist
```

Then open `http://localhost:4173`.

## Before launch

Replace these placeholders:

1. In `index.html`, replace `hello@yourdomain.co.uk` and `+440000000000` with the real contact details.
2. Replace “Taking on projects for autumn” if the availability message changes.
3. Confirm the selected business name, domain and trademark position.
4. Add the real domain to canonical metadata once purchased.
5. Add privacy/cookie pages if the final analytics or marketing setup requires them.
6. Add analytics immediately before `</head>`. Recommended placeholders:

```html
<!-- Analytics placeholder: Plausible, Fathom or GA4 -->
<!-- <script defer data-domain="yourdomain.co.uk" src="YOUR_ANALYTICS_SCRIPT"></script> -->
```

## Deploy

The site can be deployed as a static project to GitHub Pages, Netlify, Vercel, Cloudflare Pages or any ordinary web host.

### GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** and add a simple static-site Pages workflow that uploads the `dist` folder.
4. Save, then add the purchased custom domain in the same Pages settings.

### Netlify / Vercel / Cloudflare Pages

- Framework preset: none / static
- Build command: leave blank
- Publish directory: `dist`

## Content notes

The pricing is positioned as an honest starting point and should be adjusted once delivery costs, support capacity and tax position are confirmed. The public copy deliberately avoids unprovable claims and fabricated testimonials.

## Project structure

```text
.
├── .openai/hosting.json
└── dist
    ├── assets/kent-studio.webp
    ├── favicon.svg
    ├── index.html
    ├── script.js
    └── styles.css
```
