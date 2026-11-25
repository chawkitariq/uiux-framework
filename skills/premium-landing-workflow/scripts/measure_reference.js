// Paste in a browser console / JS tool on a reference page. Returns one JSON string.
(() => {
  const r = e => { const b = e.getBoundingClientRect(); return { x: Math.round(b.x), y: Math.round(b.y + scrollY), w: Math.round(b.width), h: Math.round(b.height) }; };
  const cs = (e, props) => Object.fromEntries(props.map(p => [p, getComputedStyle(e)[p]]));
  const typo = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'color'];
  const sections = [...document.querySelectorAll('header, section, footer, main > *')].map(e => ({
    tag: e.tagName, id: e.id, cls: String(e.className).slice(0, 60), ...r(e),
    ...cs(e, ['paddingTop', 'paddingBottom', 'backgroundColor']),
  }));
  const type = [...document.querySelectorAll('h1,h2,h3,h4,p,a,button,li')].slice(0, 80)
    .map(e => ({ tag: e.tagName, text: e.textContent.trim().slice(0, 30), ...cs(e, typo) }));
  const cards = [...document.querySelectorAll('[class*=card],article')].slice(0, 20)
    .map(e => ({ ...r(e), ...cs(e, ['borderRadius', 'boxShadow', 'padding', 'backgroundColor', 'border']) }));
  const keyframes = [], transitions = new Set();
  for (const sh of document.styleSheets) {
    let rules; try { rules = sh.cssRules; } catch { continue; } // cross-origin sheets are unreadable
    for (const rule of rules) {
      if (rule.type === CSSRule.KEYFRAMES_RULE) keyframes.push(rule.cssText.slice(0, 300));
      if (rule.style && rule.style.transition) transitions.add(rule.style.transition);
    }
  }
  const sticky = [...document.querySelectorAll('*')]
    .filter(e => ['sticky', 'fixed'].includes(getComputedStyle(e).position))
    .map(e => ({ tag: e.tagName, cls: String(e.className).slice(0, 40), pos: getComputedStyle(e).position, top: getComputedStyle(e).top, ...r(e) }));
  return JSON.stringify({ viewport: [innerWidth, innerHeight], sections, type, cards, keyframes, transitions: [...transitions], sticky }, null, 1);
})();
