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
        }
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
