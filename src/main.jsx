import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
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
// scripts/prerender.mjs), so a crawler reads the copy without JavaScript. When that static page
// loads, React HYDRATES the markup rather than replacing it: the page the visitor already sees is
// the page React takes over, with no flash. The static page carries window.__PRERENDERED__, which
// keeps that first render animation-free so it matches (src/lib/motion.js). The head tags the
// prerender wrote carry `data-seo`; React renders its own on mount, so the shipped copies are
// removed first and the page keeps one title and one canonical.
//
// A URL the prerender did not cover (the retired service routes, an unknown path) arrives as the
// empty app shell and renders from scratch, exactly as the site always did.
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
const container = document.getElementById('root');
if (container.hasChildNodes()) {
  document.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
