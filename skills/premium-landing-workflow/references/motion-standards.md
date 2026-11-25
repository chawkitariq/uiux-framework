# Motion standards and technical pitfalls

## Rules
- One sequence per mock-up, played once on entry (IntersectionObserver).
- Animate only `transform`, `opacity`, `stroke-dashoffset`.
- Easing `cubic-bezier(.16,1,.3,1)`, 0.4 to 1.2 s, no bounce.
- Everything neutralised under `prefers-reduced-motion` and under a global switch (e.g. `data-still` on the root element).
- Content must stay visible if the script fails: hide-until-reveal only once JS has marked the page as active.

## Pitfalls
- `backdrop-filter` or `transform` on a parent makes it the containing block of `position: fixed` children: a mobile menu gets trapped in the parent's height. Move the menu outside that parent.
- Duplicate ids silently break anchors and observers.
- Cached CSS: version the stylesheet URL with a content hash, and hard-reload when verifying.
- Headless Chromium has a minimum window width (about 500 px): use device emulation for real mobile widths.
- Headless captures with `--force-prefers-reduced-motion` show the final state: good for layout checks, useless for motion.
- Test motion by script: record class/style changes with a `MutationObserver` to get the timeline, check the trigger fires once, watch the console.
- An agent report is not proof: open a real browser (centering, cache and fixed-position bugs were only found this way).
