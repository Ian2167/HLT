import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx';

// ONE HEADER, ONE THEME. Ian, 12:2x Bangkok, 18 September 2026, verbatim: "I just want one
// common header with the blue logo." The site had a theme toggle that wrote localStorage.theme
// and put a `dark` class on <html>, and Ian's own browser was still holding theme=dark, so his
// header came up dark with the white lockup while a fresh browser came up light with the blue
// one. Removing the toggle alone would have left those browsers dark for ever, because nothing
// would be left to clear what they had already stored.
//
// So this runs once, before React renders: strip the class, drop the key. A visitor who had
// dark stored gets the light header on their very next load and never sees a flash of the old
// theme, because this happens ahead of the first paint rather than in a component's effect.
// It is safe to leave in place permanently: with no toggle, nothing writes the key again.
document.documentElement.classList.remove('dark');
try {
  localStorage.removeItem('theme');
} catch {
  // A browser with storage blocked has nothing stored to clear, so there is nothing to do.
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
