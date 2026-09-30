import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // dist-ssr is the server bundle the static prerender builds (vite.config.js), generated code.
  globalIgnores(['dist', 'dist-ssr']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // WHY `^motion$` SITS BESIDE `^[A-Z_]`, added 18 September 2026.
      // This config carries no eslint-plugin-react, so nothing marks an identifier used when it
      // appears only inside JSX. That is what the existing `^[A-Z_]` pattern is for: every
      // component import (Link, ArrowRight, ProcessNumber) starts with a capital and is excused
      // by it. `motion` from framer-motion is the one import on this site that is used only as
      // `<motion.div>` and starts lowercase, so it was the single identifier the pattern missed,
      // and it failed `npm run lint` on eleven pages, six of which predate this branch.
      // These are false positives, not dead code. The alternative fix is to add
      // eslint-plugin-react and drop both patterns, which is a dependency change and a whole-repo
      // lint pass; it is logged as an improvement rather than smuggled into a copy restructure.
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]|^motion$' }],
    },
  },
])
