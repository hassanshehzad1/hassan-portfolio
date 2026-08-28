# Devin Prompt — Portfolio Improvements

Copy and paste the prompt below into Devin.

---

## Prompt

I have a personal portfolio website (Next.js/React, deployed on Netlify) at repo root. I need the following changes:

### 1. Add live demo link for Real Estate ERP project
- Find the "Real Estate ERP — AI-Powered SaaS Platform" project card in the Projects section.
- Add a "Live Demo" button/link next to the existing GitHub link, pointing to: `https://erp-real-estate.binovalogics.com/login`
- Match the existing button styling used for GitHub links (same size, spacing, hover states).
- Open the live link in a new tab (`target="_blank" rel="noopener noreferrer"`).

### 2. Add a "Verify" / certificate link for EVERY project (not just certifications)
- Currently only the Certifications section has "Verify" links. Extend this pattern to each Project card.
- Add a `certificateUrl` (or `demoUrl`/`liveUrl` if more appropriate) field to each project's data object.
- Render a small "Certificate" or "View Credential" link/button on project cards, matching the style of the existing "Verify" links in the Certifications section.
- For now, use placeholder URLs (e.g., `#`) for projects where I haven't provided a real link yet — I will supply the real URLs after. List out clearly in your response which projects still need a real URL from me.

### 3. Fix light/dark mode toggle
- Investigate why the theme toggle isn't switching correctly — check for:
  - Whether `next-themes` (or equivalent) is correctly wrapping the app in `_app.tsx` / `layout.tsx`.
  - Whether `suppressHydrationWarning` is set on `<html>` to avoid hydration mismatch.
  - Whether Tailwind's `darkMode: 'class'` (or `'media'`) config matches how the toggle actually applies the class to `<html>` or `<body>`.
  - Whether CSS variables/colors are correctly scoped under `.dark` selector and not hardcoded.
- Fix the toggle so clicking it immediately swaps all light/dark styles across the whole site (nav, hero, cards, footer, forms) without requiring a refresh, and persists the choice across page reloads (localStorage).
- Test across at least: Home, About, Projects, Skills, Certifications, Contact sections.

### 4. Add images for every certificate and every project
- I have already generated thumbnail images for every project (attached in `/project-thumbnails` folder, named to match each project e.g. `real-estate-erp.png`, `rideo.png`, `call-crafter.png`, etc.). Add these as the `imageUrl` for each matching project card.
- Add an `imageUrl` field to the certifications data too (I will supply certificate screenshots separately — use a placeholder/gradient block with the cert name for now).
- Render the image as a card thumbnail/banner at the top of each card (16:9 aspect ratio, `object-fit: cover`).
- Use lazy loading (`loading="lazy"`) and proper `next/image` optimization if using Next.js.
- Add a graceful fallback (placeholder image or gradient block with the project/cert name) for any entry where no image is provided yet, so the layout doesn't break.
- List exactly which certificates still need real images from me.

### Deliverables
- Make all changes as a single PR (or clearly separated commits) with a short summary of what was changed in each file.
- Confirm the site builds successfully and deploys correctly on Netlify after changes.
- Give me a checklist of exactly which project links, certificate links, and images are still placeholders so I can send you the real content next.

---
