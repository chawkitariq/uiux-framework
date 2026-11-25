// Paste in a browser console / JS tool on the built page (desktop width, then mobile emulation).
// Scroll the whole page first so reveal-on-scroll elements trigger. Empty arrays = OK.
(() => {
  const label = e => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + '.' + String(e.className).split(' ')[0];
  const visible = e => { const b = e.getBoundingClientRect(); return b.width > 0 && b.height > 0 && getComputedStyle(e).visibility !== 'hidden'; };
  const ids = {}; document.querySelectorAll('[id]').forEach(e => ids[e.id] = (ids[e.id] || 0) + 1);
  const textEls = [...document.querySelectorAll('body *')].filter(e =>
    [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && visible(e));
  return {
    horizontalOverflow: document.documentElement.scrollWidth > innerWidth
      ? [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 10).map(label)
      : [],
    duplicateIds: Object.keys(ids).filter(k => ids[k] > 1),
    // Adapt the selector to your reveal convention.
    stuckHidden: [...document.querySelectorAll('[class*=reveal],[data-reveal]')]
      .filter(e => +getComputedStyle(e).opacity < 0.05).map(label),
    textUnder13px: textEls.filter(e => parseFloat(getComputedStyle(e).fontSize) < 13).slice(0, 15).map(label),
    tapTargetsUnder44px: [...document.querySelectorAll('a,button,input,select,textarea,[role=button]')]
      .filter(e => { const b = e.getBoundingClientRect(); return visible(e) && (b.width < 44 || b.height < 44); })
      .slice(0, 15).map(e => { const b = e.getBoundingClientRect(); return label(e) + ' ' + Math.round(b.width) + 'x' + Math.round(b.height); }),
    // Runtime errors: hook BEFORE load, then reload:
    //   window.addEventListener('error', e => (window.__qaErrors ||= []).push(e.message))
    // or read the tool's console log directly.
    errors: window.__qaErrors || [],
  };
})();
