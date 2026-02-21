# AGENTS.md

## Purpose
This file defines project-specific expectations for coding agents working in this repository.

## Project Context
- Stack: Next.js (App Router) + TypeScript.
- Content source: `/messi_collection.md`.
- Site data source used by UI: `/src/data/collection.ts`.

## Core Rule
- When card content is changed, keep the markdown source and site data synchronized.

## Content Editing Rules
- Update both files when changing card metadata or descriptions:
  - `/messi_collection.md`
  - `/src/data/collection.ts`
- Preserve section/card ordering unless explicitly asked to reorder.
- Keep card titles, grade, tier, role, and description aligned across both files.
- Use exact punctuation and quotation style requested by the user.

## UI/Display Notes
- Card badges are rendered by:
  - `/src/components/CardEntry.tsx`
- Image paths in `collection.ts` should resolve to files in:
  - `/public/cards`

## Git Workflow
- Make focused commits with clear messages.
- Do not amend or rewrite history unless explicitly requested.
- If asked to commit and push, include all intended working tree changes and push to current branch.

## Safety
- Do not remove or overwrite unrelated user changes.
- If unexpected modifications appear, stop and ask how to proceed.
