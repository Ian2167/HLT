import process from 'node:process'
import { defineConfig, build } from 'vite'
import react from '@vitejs/plugin-react'

// THE STATIC PRERENDER RIDES INSIDE `vite build`, 30 September 2026 (Stage 3 of the visibility
// refresh). When the client bundle has been written, this plugin builds src/entry-server.jsx with
// Vite's SSR mode into dist-ssr/ and runs scripts/prerender.mjs, which writes every public page
// as static HTML in both languages plus the sitemap. It is a plugin rather than an npm script so
// it runs whatever command builds the site, here or on Vercel. Set HLT_SKIP_PRERENDER=1 to build
// the plain app shell only.
const prerenderPlugin = () => {
  let isSsrBuild = false
  return {
    name: 'hlt-prerender',
    apply: 'build',
    configResolved(config) {
      isSsrBuild = !!config.build.ssr
    },
    async closeBundle() {
      if (isSsrBuild || process.env.HLT_SKIP_PRERENDER === '1') return
      await build({
        configFile: false,
        plugins: [react()],
        logLevel: 'warn',
        build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr', emptyOutDir: true },
      })
      const { prerender } = await import('./scripts/prerender.mjs')
      await prerender()
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPlugin()],
})
