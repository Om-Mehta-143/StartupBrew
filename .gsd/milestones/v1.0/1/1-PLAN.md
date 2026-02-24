---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Foundation Setup

## Objective
Scaffold the base React + Vite + TailwindCSS project for the StartupBrew landing page. This sets up the development environment, design system structure, and routing foundation for the subsequent UI phases.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- .gsd/DECISIONS.md

## Tasks

<task type="auto">
  <name>Scaffold Vite React Project</name>
  <files>package.json, vite.config.ts, index.html</files>
  <action>
    - Initialize a new React project using Vite in the root directory (or a minimal react template).
    - NOTE: Do NOT overwrite the .gsd folder or .git folder.
    - Set up the basic `package.json` with React and Vite dependencies.
  </action>
  <verify>npm run build --emptyOutDir=false</verify>
  <done>Vite successfully builds a barebones React app in the current directory without destroying GSD files.</done>
</task>

<task type="auto">
  <name>Install & Configure TailwindCSS</name>
  <files>tailwind.config.js, postcss.config.js, src/index.css</files>
  <action>
    - Install `tailwindcss`, `postcss`, and `autoprefixer`.
    - Initialize `tailwind.config.js` and configure it to scan `src/**/*.{js,ts,jsx,tsx}`.
    - Update `src/index.css` to include the Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
    - Extend the tailwind theme with placeholders for a "premium, high-contrast" vibe (e.g., specific dark navy/slate colors).
  </action>
  <verify>npm run build</verify>
  <done>Tailwind classes compile correctly in the build output.</done>
</task>

<task type="auto">
  <name>Project Directory Structure & Cleanup</name>
  <files>src/App.jsx, src/components/, src/assets/</files>
  <action>
    - Delete default Vite boilerplate assets (like `react.svg`).
    - Create `src/components`, `src/assets`, and `src/pages` directories.
    - Clean up `src/App.jsx` to just be an empty functional component returning a fragment or a simple "StartupBrew setup complete" h1 with Tailwind styling to prove it works.
  </action>
  <verify>Get-ChildItem src/components, src/assets</verify>
  <done>Directory structure matches requirements and App.jsx is clean.</done>
</task>

## Success Criteria
- [ ] React + Vite project exists in the root without destroying `.gsd` or `.git`.
- [ ] TailwindCSS is fully configured and functional.
- [ ] Boilerplate is removed, and structural folders (`components`, `assets`) exist.
