# The Messi Card Collection

A curated, narrative-driven web exhibit of Lionel Messi cards, organized by era:

- Emergence
- Ascent
- Dominance
- International Pursuit
- Credence
- Culmination
- Reverence

The project emphasizes historical context, visual pairing (front/back card images), and a consistent editorial voice across the collection.

## Tech Stack

- Next.js (App Router)
- TypeScript
- CSS (global stylesheet)

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content Model

The project maintains two synchronized content sources:

- Canonical writing source:
  - `messi_collection.md`
- Site-rendered data source:
  - `/src/data/collection.ts`

When card metadata or descriptions change, both files should be updated to keep the website and editorial source aligned.

## Project Structure

- `/src/app/page.tsx`
  - Landing page and section navigation.
- `/src/components/Section.tsx`
  - Renders each narrative section.
- `/src/components/CardEntry.tsx`
  - Renders card details and badges.
- `/src/components/ZoomableImage.tsx`
  - Lightbox behavior for card imagery.
- `/public/cards`
  - Front/back card image assets.

## Contributing Notes

- Keep title, tier, grade, role, and description consistent between markdown and site data.
- Preserve section/card ordering unless intentionally changed.
- Use clear commit messages for content edits.
