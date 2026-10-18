// scripts/offer-copy-to-md.mjs — writes every English line of src/copy/offerRefresh1018.js to one
// markdown file, so the voice checker scores exactly the strings the site renders. Added 18 October
// 2026 (A-044). Slots marked "[IAN: ...]" are left out: they are Ian's to write, not copy to score.
//
// RUN: node scripts/offer-copy-to-md.mjs <out.md>
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const out = process.argv[2];
if (!out) {
    console.error('usage: node scripts/offer-copy-to-md.mjs <out.md>');
    process.exit(2);
}
const mod = await import(pathToFileURL(path.resolve('src/copy/offerRefresh1018.js')).href);
const lines = [];
const push = (v) => {
    if (typeof v !== 'string') return;
    if (v.startsWith('[IAN:')) return;
    lines.push(v);
};
for (const v of Object.values(mod.offerRefreshCopy)) push(v);
const w = mod.websitesCapability;
push(w.description);
push(w.headline);
for (const [k, v] of Object.entries(w.extra)) {
    if (k === 'connect') v.forEach((c) => lines.push(`${c.name}: ${c.body}`));
    else push(v);
}
// Prose is a line that ends a sentence and runs to five words or more; everything else is a
// label (a button, a tag, a table cell, a heading). Prose is scored for rhythm; labels go to a
// sibling file, checked for the hard rules only, because a one-word button is not a sentence.
const isProse = (l) => /[.?!]$/.test(l.trim()) && l.trim().split(/\s+/).length >= 5 && !l.includes(' | ');
const prose = lines.filter(isProse);
const labels = lines.filter((l) => !isProse(l));
const labelsOut = out.replace(/\.md$/, '-labels.md');
writeFileSync(out, `${prose.join('\n\n')}\n`, 'utf8');
writeFileSync(labelsOut, `${labels.join('\n\n')}\n`, 'utf8');
console.log(`${prose.length} prose lines to ${out}; ${labels.length} labels to ${labelsOut}`);
