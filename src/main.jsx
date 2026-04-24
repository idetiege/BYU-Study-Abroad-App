import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ── §5 Virtual keyboard height → --kb CSS variable ──────────────────────────
// Reliable on both iOS Safari and Android Chrome; used by .sticky-footer
if (window.visualViewport) {
  const setKb = () => {
    const h = window.innerHeight - window.visualViewport.height;
    document.documentElement.style.setProperty('--kb', `${Math.max(0, h)}px`);
  };
  window.visualViewport.addEventListener('resize', setKb);
  window.visualViewport.addEventListener('scroll', setKb);
  setKb();
}

// ── §16 iOS standalone: keep same-origin navigation inside the PWA ───────────
// Without this, tapping <a href> in standalone mode opens Safari, losing state
if ('standalone' in navigator && navigator.standalone) {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a || !a.href) return;
    if (a.target === '_blank') return; // let external links open normally
    if (a.href.startsWith(location.origin)) {
      e.preventDefault();
      location.href = a.href;
    }
  });
}

// ── §14 Request persistent storage (protects against iOS ITP 7-day wipe) ────
if (navigator.storage?.persist) {
  navigator.storage.persist();
}

// ── §13 Service worker registration + hourly update check ────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        // Poll for SW updates once per hour so users get fresh content
        // without needing to close all tabs
        setInterval(() => reg.update(), 60 * 60 * 1000);
      })
      .catch(() => {});
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
