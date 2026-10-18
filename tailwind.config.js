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
          lift: '#1B4384', // Ian, 15 Sept 2026: cards must pop on the navy; lifted from #17356B
        },
        // DIRECTION A, 18 October 2026 (Ian: "this still feels very flat and the color selection
        // apart from the first Hero section above the fold is very poor and bland"; he asked to
        // see direction A: navy, sand and saffron). Sand replaces the cool greys as the light
        // ground; saffron marks what matters (numbers, the fix-first points, the price, tags);
        // indigo stays for buttons only. The navy above is unchanged.
        sand: {
          50: '#FCFAF6',
          100: '#F6F0E6',
          200: '#ECE1CE',
          300: '#DCCAA9',
        },
        saffron: {
          300: '#F6CD7E',
          400: '#EFB54E',
          500: '#E09B2D',
          600: '#C47F1C',
          700: '#9A6116',
        },
        slate: {
          ...colors.slate,
          800: '#1B4384',
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
