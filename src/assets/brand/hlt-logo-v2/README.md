# HLT Logo v2 — the real mark

Built 14 September 2026 by the code-builder lane, on bridge row 3406.

This is the High Level Thai logo as Ian drew it: a solid upward chevron dissolving into a
pixel field, in `#007bff`, with the wordmark HIGH LEVEL THAI and the Thai subline
ไฮ เลเวล ไทย. Every file here is **derived** from the Canva source vector by fill
substitution and viewBox cropping. No path data was rewritten, so nothing here is a redraw.

Source of truth: `../hlt-logo-source/HLT Logo.svg` (350 x 90, viewBox `0 0 262.5 67.499998`).
The wordmark and the Thai subline are outlined paths in that file, not live text, so no font
is needed to render them.

## One correction was applied, and it matters

In the Canva source the final glyph of the Thai subline — the ย of ไทย — is filled `#ffffff`.
On a white background the word reads "ไท" with its last letter invisible. That is an export
defect, not a design choice, and it is visible in the source PNG as well as the SVG.
`build-logo-set.mjs` recolours that one `fill` attribute to `#007bff`, matching its eleven
siblings. The glyph's geometry is untouched.

**If Ian wants the source shipped exactly as Canva exported it, that correction is one line
to remove** — the `corrected` step in `build-logo-set.mjs`. The set would then carry a
missing letter across the site.

## Palette

Read from the source vector, not chosen here.

| Role | Value | Where |
|---|---|---|
| Brand blue | `#007bff` | the chevron and the Thai subline |
| Wordmark ink | `#191919` | HIGH LEVEL THAI |
| White | `#ffffff` | the reversed lockup, for dark surfaces |

## Files

### `svg/`

| File | Use |
|---|---|
| `hlt-lockup-colour.svg` | The primary lockup. White and pale backgrounds. This is the header logo in light mode. |
| `hlt-lockup-white.svg` | The lockup reversed to all white. Navy, slate-900 and any dark surface. This is the header logo in dark mode. |
| `hlt-lockup-mono-black.svg` | Single-colour black. Print, fax, stamps, anywhere one ink is all you get. |
| `hlt-icon.svg` | The chevron alone, square viewBox, brand blue. Favicon, app icon, avatar, mobile nav. |
| `hlt-icon-white.svg` | The chevron alone, square, white. Dark app tiles and dark compact headers. |

### `png/`

Transparent PNG at 2x, for anywhere SVG is not accepted — slide decks, Google Docs, email
signatures, third-party profiles.

| File | Size |
|---|---|
| `hlt-lockup-colour@2x.png` | 700 x 180 |
| `hlt-lockup-white@2x.png` | 700 x 180 |
| `hlt-lockup-mono-black@2x.png` | 700 x 180 |
| `hlt-icon@2x.png` | 512 x 512 |
| `hlt-icon-white@2x.png` | 512 x 512 |

### `favicon/`

| File | Use |
|---|---|
| `favicon.svg` | The modern favicon. Browsers that support SVG icons take this one. |
| `favicon-16.png` | Browser tab fallback. |
| `favicon-32.png` | Browser tab and bookmark fallback. |
| `favicon-48.png` | Windows shortcut and larger tab fallback. |
| `apple-touch-icon-180.png` | iOS home screen. White background with a 14% inset, because Apple tiles ignore transparency and round the corners. |

Working copies of the four the site actually links are in `/public/brand/`, because
`index.html` cannot import from `src/`. `/public/hlt.svg`, the old favicon, is left in place
and unreferenced.

### Scripts

| File | Use |
|---|---|
| `build-logo-set.mjs` | Derives every SVG from the source vector. Refuses to run if the source does not match what it was written against. |
| `rasterise-logo-set.mjs` | Renders the SVGs to the PNG and favicon sizes above, using Chromium. |
| `shoot-proof.mjs` | Serves `dist/` and screenshots the header and hero at desktop and mobile, light and dark, into `proof/`. |
| `verify-logo-v2.mjs` | The fixture. Checks the set is present, derived byte-for-byte from the source, correctly coloured, square where it needs to be, wired into the header and the favicon links, and that nothing imports the archived violet set. Exit 0 is a pass. |

Neither `rasterise-logo-set.mjs` nor `shoot-proof.mjs` adds a dependency to `package.json`.
They borrow the Playwright already installed at
`C:\Projects\video-studio-teleprompter\node_modules`; the site build must not grow a browser
dependency for a one-off asset job.

### `proof/`

Screenshots of the built site carrying this set: `header-` and `hero-`, each at `desktop`
and `mobile`, each in `light` and `dark`. Shot 14 September 2026 against `npm run build`
output, not the dev server.

## The violet set is archived, not deleted

`../hlt-logo-system/` holds the earlier "refined" violet redraw. It is still on disk, its
README is marked ARCHIVED, and nothing in `src/` imports it. Leave it there: the history of
the decision is worth more than the disk space.

## Usage notes

- Use the lockup wherever the brand needs naming. Use the icon only where the name is
  already obvious or there is no room for it.
- The header carries both lockups and swaps them on Tailwind's `dark` class. If you add the
  logo anywhere else, do the same — the ink wordmark disappears on dark surfaces.
- Do not recolour the chevron to the site's indigo accent. The mark is `#007bff`.
- Do not rebuild these by hand. Change `build-logo-set.mjs` and re-run it, so the next
  person can see what was derived and what was decided.
