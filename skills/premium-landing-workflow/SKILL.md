---
name: premium-landing-workflow
description: End-to-end workflow to build a premium static landing page with a team of agents — measured reference audit, page plan, copy register fixed before building, foundations, parallel section writers, quality loop, independent critique, arbitration, explicit sign-off. Use when designing or rebuilding a marketing page that must feel high-end.
---

# Premium landing page — workflow

Orchestration rules (briefs, delegation, verification) live in `agent-team-orchestration`; general working rules in `agent-workflow-lessons`. Details: `references/` (copy, motion, roles); technical SEO lives in the `technical-seo` skill (dev-framework). `scripts/` holds browser snippets.

## Steps
1. **Measure a reference.** Never just "look at" a reference site: measure it (`scripts/measure_reference.js`) and write a numeric spec: grid, type scale, spacing, keyframes, transitions, sticky behaviour. Take inspiration from rhythm, structure and motion; never copy shapes or content.
2. **Page plan.** One architect decides sections, order, scale and conventions (class names, spacing tokens, section skeleton). One call to action for the whole page.
3. **Fix the copy register BEFORE building.** Write all text first (see `references/copy-standards.md`), pass it through a compliance review, then build around it. Changing the register late means redoing every section.
4. **Foundations.** One developer builds the skeleton: build script, tokens, base CSS, animation engine, conventions file. Static, no runtime dependency, sections as partials, a version hash on the stylesheet.
5. **Sections in parallel.** One writer per file; each agent owns 1-2 named files and touches nothing else. The brief includes the capture tool and the visual criterion (agents that cannot see the render produce blind work).
6. **Quality loop.** Build, capture desktop and mobile (final state), list defects per owning agent, fix, repeat. Then test real motion by script (trigger, timeline, jank, console errors) and run `scripts/qa_checks.js`.
7. **Independent critical review.** A fresh art-director agent reviews captures ruthlessly (about 15 prioritised points); a cheaper cross-reviewer covers design plus marketing (at most 8 points).
8. **Arbitrate.** The orchestrator sorts the critiques. Anything the owner explicitly liked is protected: no critique changes it without their agreement. Keep a register of validated sections.
9. **Explicit sign-off.** Ask for validation or concrete feedback. "I have feedback" without content is not sign-off.

## Per-element premium filter
Does it elevate or damage? If unsure, remove it. No decorative icons inside text unless the owner likes them. Illustrations stay homogeneous: the section the owner likes becomes the benchmark for the others.

## Done when
- Compliance review passed on all public text; nothing placeholder-like is visible.
- `qa_checks.js` reports no horizontal overflow, duplicate ids, stuck hidden elements, small text, small tap targets or console errors, on desktop and in real mobile emulation.
- Motion works with reduced-motion and the global "still" switch.
- `technical-seo` checklist (dev-framework) all OK.
- Independent review arbitrated; owner signed off in writing.

## Costly lessons
- Agents with no rendering: give them the capture tool and the visual criterion in the brief.
- Late retouching damaged what the owner liked: keep the register of untouchable sections.
- Copy register fixed too late: fix it before building.
- An automatic "keep going until done" loop needs a goal the agent can reach itself, or an explicit "validate or provide feedback" step.
- Browser pitfalls (fixed menu trapped by a parent filter, cached CSS, headless viewport floor) are in `references/motion-standards.md`.
