---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Core Layout Components

## Objective
Build the foundational UI structure for the landing page: a responsive navigation header, a high-impact hero section with the primary CTA, and a simple footer. It should embody the "premium, high-contrast" aesthetic required for StartupBrew.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- .gsd/DECISIONS.md
- src/App.jsx
- src/index.css

## Tasks

<task type="auto">
  <name>Create Navigation Header</name>
  <files>src/components/Header.jsx</files>
  <action>
    - Create a React component `Header.jsx`.
    - It must include a brand logo string ("StartupBrew" where "Brew" uses the accent color).
    - It must include navigation links (e.g., "Process", "Audit", "Contact").
    - Make it responsive (hamburger menu on mobile or just simple stacked/row layout).
    - Stick to the dark navy (`bg-primary`) theme.
  </action>
  <verify>Get-ChildItem src/components/Header.jsx</verify>
  <done>File is created and exports a valid React component.</done>
</task>

<task type="auto">
  <name>Create Hero Section</name>
  <files>src/components/Hero.jsx</files>
  <action>
    - Create a React component `Hero.jsx`.
    - Content must pitch the value abstractly: "We stress-test your startup and founders before you burn cash."
    - Include a high-contrast CTA button "Apply for a Free Audit" that uses the yellow/gold accent color.
    - Ensure typography is large, modern, and legible.
  </action>
  <verify>Get-ChildItem src/components/Hero.jsx</verify>
  <done>File is created and contains the CTA text.</done>
</task>

<task type="auto">
  <name>Create Footer and Assemble App</name>
  <files>src/components/Footer.jsx, src/App.jsx</files>
  <action>
    - Create a minimal `Footer.jsx` with a copyright and contact link.
    - Update `src/App.jsx` to render `<Header />`, `<Hero />`, and `<Footer />` in a flex column layout that takes min-h-screen.
  </action>
  <verify>npm run build</verify>
  <done>The application builds successfully with the newly imported components.</done>
</task>

## Success Criteria
- [ ] Header, Hero, and Footer components exist.
- [ ] The Hero section contains the primary lead-gen CTA.
- [ ] `App.jsx` renders the full core layout without errors.
