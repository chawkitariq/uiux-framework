---
name: visual-verification
description: Rules for verifying visual work (web pages, 3D renders, video) by actually looking at the render instead of trusting lint or tests. Covers real rendering, measuring state, private-page fallbacks, iterative comparison against references, removing clutter, AI-generated images and browser-script limits. Use whenever a change has a visual result to check.
---

# Visual verification

Green lint and tests do not prove the result looks right. Render it, look at it, then report what you saw.

## Rules
- **Render for real** (browser or headless) and read the captures yourself. Expose a dev-only debug hook (`window.__x`) to measure state (scroll, active step, sizes) instead of guessing it from pixels.
- **Private page unreachable?** Fall back to a local headless render with a separate `--user-data-dir`. Say what you could not see. Never type the user's credentials.
- **Reference site:** measure it into a numeric spec (`premium-landing-workflow`, step 1), then compare section by section.
- **Iterative visual work:** each pass, re-read the references and the current render, compare point by point, respect the iteration cap, and report "conforms / to improve" per point.
- **"Too busy":** remove, then list what was removed. Question any decorative element nobody can justify, remove it, and propagate the removal everywhere it appears.
- **AI image or video generators** validate mood and intent, not UI (text, bubbles, controls). Validate the UI in the real site, behind a v1/v2 switch. Check what a received file really shows (a GIF may be a single frame).
- **Brief vs reference conflict:** follow the brief, report the gap, and state every deviation with old and new values.

## Browser scripts
- Injected scripts hit a tool cutoff of about 45 s: run long tests in-page and poll for the result.
- Avoid `networkidle` in dev (HMR keeps the network busy); wait on a concrete element or state.
- Under `tsx`, write the code inline in `page.evaluate` (no helper references that the transform would rewrite).
