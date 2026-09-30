// motion.js — the site's entrance animations, in one place, and the switch that turns them off.
// Added 30 September 2026, the visibility refresh.
//
// WHY A SWITCH EXISTS. The build now prerenders every public page to static HTML (see
// scripts/prerender.mjs), so a crawler reads the copy without running any JavaScript. Two things
// have to be true for that snapshot to be right and for the page to look right when it loads:
//
//   1. WHILE THE SNAPSHOT IS TAKEN nothing may be sitting at opacity 0 waiting for a scroll. Every
//      band below the first screen used framer-motion's whileInView, which fires only once an
//      IntersectionObserver has seen the element, so a snapshot of an unscrolled page held most of
//      the site invisible. The prerender script sets window.__PRERENDERING__ before the page loads
//      and these helpers then hand back no animation at all, so the snapshot is the finished page.
//
//   2. WHEN THE SNAPSHOT LOADS IN A BROWSER React renders over the static markup. If that first
//      render started every band at opacity 0 the visitor would see the page, watch it vanish, and
//      watch it fade back in. The snapshot carries window.__PRERENDERED__ = true, so the first
//      render is animation-free too and the swap is invisible. App.jsx clears the flag once React
//      has mounted, so every later client-side navigation animates exactly as it did before.
//
// HOW TO USE. Spread `fadeUp` on a scroll-revealed element and `heroIn` on a hero block, exactly
// as the pages did with their own local copies of these objects. The getters mean the flag is read
// at spread time, on every render, not once at import.
// On the server (the static prerender) there is no window at all, and the markup must be the
// finished page: every band visible, nothing waiting for a scroll.
const noMotion = () =>
    typeof window === 'undefined' || window.__PRERENDERING__ === true || window.__PRERENDERED__ === true;

// The scroll reveal every band on the site uses. Same values as the local `fadeUp` constants the
// pages carried before this file existed: a 24px rise and a fade, once, at 15 per cent visible.
export const fadeUp = {
    get initial() {
        return noMotion() ? false : { opacity: 0, y: 24 };
    },
    get whileInView() {
        return noMotion() ? undefined : { opacity: 1, y: 0 };
    },
    get viewport() {
        return noMotion() ? undefined : { once: true, amount: 0.15 };
    },
    get transition() {
        return noMotion() ? { duration: 0 } : { duration: 0.5 };
    },
};

// The hero entrance: the same rise and fade, on mount rather than on scroll.
export const heroIn = {
    get initial() {
        return noMotion() ? false : { opacity: 0, y: 24 };
    },
    get animate() {
        return noMotion() ? undefined : { opacity: 1, y: 0 };
    },
    get transition() {
        return noMotion() ? { duration: 0 } : { duration: 0.6 };
    },
};

// A staggered reveal for lists: the same fadeUp with a per-item delay.
export const fadeUpDelayed = (index, step = 0.04) => ({
    ...fadeUp,
    transition: noMotion() ? { duration: 0 } : { duration: 0.5, delay: index * step },
});
