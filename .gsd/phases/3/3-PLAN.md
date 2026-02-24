---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Framework Showcase

## Objective
Implement a section explaining the StartupBrew 3-phase "secret framework" (Founder Resilience, System Stress Test, Viability Roadmap) abstractly but engagingly without revealing proprietary details.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- src/App.jsx
- src/index.css

## Tasks

<task type="auto">
  <name>Create Process Component</name>
  <files>src/components/Process.jsx</files>
  <action>
    - Create a React component `Process.jsx`.
    - Design a 3-step layout (e.g., a vertical timeline or horizontal cards).
    - Step 1: "Founder Resilience Test" - Pitching the psychological/stress evaluation.
    - Step 2: "Operational Stress Test" - Pitching the business model and technical breakdown simulation.
    - Step 3: "The Viability Roadmap" - Pitching the final brutal report and timeline projection.
    - Use the established dark navy and gold (`text-[#FACC15]`) design language.
  </action>
  <verify>Get-ChildItem src/components/Process.jsx</verify>
  <done>File is created and exports a valid React component with the 3 abstract phases.</done>
</task>

<task type="auto">
  <name>Assemble Process into App</name>
  <files>src/App.jsx</files>
  <action>
    - Import and render `<Process />` inside `src/App.jsx` just below the `<Hero />` component.
  </action>
  <verify>npm run build</verify>
  <done>The application builds successfully with the Process component included.</done>
</task>

## Success Criteria
- [ ] Process component exists and contains the 3-phase pitch.
- [ ] No proprietary specifics are revealed in the copy.
- [ ] `App.jsx` successfully renders the component.
