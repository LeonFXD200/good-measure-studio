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
- Five standalone first-screen design studies at `/concepts/` for comparing distinct visual directions; the current homepage is unchanged while a direction is selected
- A separate `/reset/` first-screen study that treats the opening page as a practical service menu: four clear needs, relevant starting prices, no mockups or decorative imagery
- Build-only / managed-monthly pricing switch
- Responsive mobile navigation
- Accessible structure, visible focus states and reduced-motion support
- One consistent sans-serif typeface and a white, charcoal and green palette
- A CSS-built example page structure in place of decorative photography
- Subtle hero entrance motion with reduced-motion support
- Optimised metadata and a custom favicon

## Run locally

No build step or dependencies are required.

From this folder, run any static file server, for example:

```bash
python -m http.server 4173 --directory dist
```

Then open `http://localhost:4173`.

## Before launch

Replace these placeholders:

1. In `dist/index.html` and `dist/script.js`, replace `hello@yourdomain.co.uk` with the real contact address.
2. Confirm the selected business name, domain and trademark position.
3. Add the real domain to canonical metadata once purchased.
4. Add privacy/cookie pages if the final analytics or marketing setup requires them.
5. Add analytics immediately before `</head>` in `dist/index.html`. Recommended placeholder:

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
    ├── favicon.svg
    ├── index.html
    ├── script.js
    ├── styles.css
    ├── concepts/
    │   ├── index.html
    │   └── 01.html … 05.html
    └── reset/
        └── index.html
```
