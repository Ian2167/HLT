import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ONE HEADER, ONE THEME. Ian, 12:2x Bangkok, 18 September 2026, verbatim: "I just want one
// common header with the blue logo." The site had a theme toggle that wrote localStorage.theme
// and put a `dark` class on <html>. This runs once, before React renders: strip the class, drop
// the key. Safe to leave in place permanently: with no toggle, nothing writes the key again.
document.documentElement.classList.remove('dark');
try {
  localStorage.removeItem('theme');
} catch {
  // A browser with storage blocked has nothing stored to clear, so there is nothing to do.
}

// PRERENDERED PAGES, 30 September 2026. Every public page is also shipped as static HTML (see
// scripts/prerender.mjs), so a crawler reads the copy without JavaScript. That static page arrives
// with the head elements React rendered at build time — title, description, canonical, hreflang,
// Open Graph — each marked `data-seo`. React will render its own set on mount, so the shipped copies
// are removed first; otherwise a page would carry two titles and two canonicals. The page body is
// replaced by React's render in the same commit, and src/lib/motion.js keeps that first render
// animation-free on a prerendered page so the swap is invisible.
document.querySelectorAll('[data-seo]').forEach((el) => el.remove());

// The language provider now lives inside the router (src/App.jsx), because the language is read
// from the URL.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
