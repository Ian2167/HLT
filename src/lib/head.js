// head.js — how the server render learns what each page puts in <head>.
// Added 30 September 2026, Stage 3 of the visibility refresh (the static prerender).
//
// In the browser React 19 hoists <title>, <meta> and <link> rendered by src/components/Seo.jsx
// into the document head on its own. On the server there is no document: the prerender renders
// each page to a string with react-dom's renderToString, and hoistable tags rendered there would
// land inline in the body. So Seo.jsx renders its tags only in the browser, and on the server it
// hands the same values to this sink instead; scripts/prerender.mjs reads the sink after each
// render and writes the real head itself. One source of truth for the values, two ways out.
let sink = null;

export const startHeadCapture = () => {
    sink = [];
};

export const captureHead = (entry) => {
    if (sink) sink.push(entry);
};

export const stopHeadCapture = () => {
    const out = sink || [];
    sink = null;
    return out;
};
