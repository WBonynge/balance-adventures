# Balance Adventures — Website

## Project structure

```
balance-adventures/
├── index.html          ← Single-page site (all sections)
├── css/
│   └── style.css       ← All styles + design tokens
├── js/
│   └── main.js         ← Nav scroll, reveal animations, CTA handler
├── images/             ← Drop photos here (see notes below)
├── vercel.json         ← Vercel deployment config
└── README.md           ← This file
```

---

## Deploying to Vercel (step by step)

1. Push this folder to a GitHub repository
2. Go to vercel.com → "Add New Project" → import the repo
3. No build settings needed — it's static HTML
4. Add your custom domain (balanceadventures.co.uk) in Vercel's domain settings
5. Point your domain's DNS to Vercel (they walk you through it)

That's it. Every time you push to GitHub, Vercel auto-deploys.

---

## Things to update before going live

### 1. Calendly link
In `js/main.js`, replace:
```js
const CALENDLY_URL = 'mailto:info@balanceadventures.co.uk...';
```
With your Calendly URL:
```js
const CALENDLY_URL = 'https://calendly.com/balanceadventures/discovery-call';
```

### 2. Will's photo
Replace the placeholder in the About section of `index.html`:
```html
<!-- Replace this div: -->
<div class="about-image-placeholder">...</div>

<!-- With: -->
<img src="images/will.jpg" alt="Will, founder of Balance Adventures" />
```
Best photo: outdoor shot, on a mountain, natural light. Portrait orientation (3:4 ratio).

### 3. Hero background photo (optional upgrade)
In `css/style.css`, find `.hero-bg` and add a real image:
```css
.hero-bg {
  background-image: 
    linear-gradient(...),  /* keep the overlay */
    url('../images/hero-kili.jpg');  /* add this */
  background-size: cover;
  background-position: center;
}
```
Best image: wide/landscape shot of Kilimanjaro or summit moment.

### 4. Email address
Search for `info@balanceadventures.co.uk` and replace with Will's actual email.

### 5. Instagram handle
Update the Instagram link in the footer.

### 6. Open Graph image (for social sharing)
Add a 1200×630px image to `/images/og-image.jpg` and uncomment the meta tag in `<head>`.

### 7. Terms & Privacy pages
Once the T&C and Privacy Policy docs are hosted, update the footer links.

---

## Design tokens (easy to change)

All colours and fonts are in CSS variables at the top of `style.css`:

```css
:root {
  --terracotta: #c4502a;   /* Main brand colour — change here to update everywhere */
  --black:      #0a0a08;
  --cream:      #f5f0e8;
  ...
}
```

---

## Future pages to add

- `/programme` — full 12-week breakdown
- `/packages`  — pricing deep-dive with FAQs
- `/about`     — Will's full story + credentials
- `/contact`   — Calendly embed + enquiry form
- `/blog`      — video-first content for SEO

Each new page: copy `index.html`, strip out unwanted sections, update `<title>` and meta description.

---

## Performance notes

- Fonts load from Google Fonts (preconnect tags already in `<head>`)
- No JS frameworks — pure vanilla JS, loads instantly
- Images: compress all photos to WebP format for best performance
- Target Lighthouse score: 95+ on all metrics
