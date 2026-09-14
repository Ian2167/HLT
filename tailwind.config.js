import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Defaults (Slate-50 based)
        // Dark Mode Defaults (Slate-950 based)
        primary: {
          DEFAULT: '#6366f1', // Indigo 500
          dark: '#8b5cf6',    // Violet 500
        },
        surface: {
          light: '#ffffff',
          dark: '#0f172a', // Slate 900
          card: '#1e293b', // Slate 800 (for dark mode cards)
        },

        // THE CARD NAVY, standardised 14 September 2026 on Ian's ruling: "the Navy used on
        // both documents must be standardised as the Card navy" (#0A1F44). Done ONCE here, at
        // the theme level, rather than page by page, so every page that already says
        // bg-slate-950 or dark:bg-slate-900 picks it up without being edited. That includes
        // /business-read, which this build is not allowed to touch, and the older pages.
        //
        // WHAT MAPS TO WHAT, and why 800 is not the same value:
        //   slate-950  the dark page ground and the dark section grounds  -> the card navy
        //   slate-900  the same, as Ian ruled                             -> the card navy
        //   slate-800  borders and the older pages' dark cards            -> a lift of it
        // One flat navy on 800 as well would have left dark mode with no visible edge between
        // a card and the page behind it. The lift is the same hue, so nothing reads as a second
        // navy; it exists only so an edge survives. Flagged for Ian in the build notes.
        hltNavy: {
          DEFAULT: '#0A1F44',
          lift: '#17356B',
        },
        slate: {
          ...colors.slate,
          800: '#17356B',
          900: '#0A1F44',
          950: '#0A1F44',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
