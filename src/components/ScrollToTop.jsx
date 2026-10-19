// ScrollToTop.jsx — where the page lands after a navigation.
//
// 19 October 2026: FRAGMENT LINKS LANDED AT THE TOP. This used to call window.scrollTo(0, 0) on every
// pathname change, which also ran on first load, so /en/examples#website-demonstration opened at
// scrollY 0 whether it was followed from another page or opened directly: the browser jumped to the
// anchor, then this reset it. Now:
//   no hash    scroll to the top, as before
//   a hash     find the element with that id and bring it into view under the fixed header. The
//              element may not exist on the first frame (a client-side navigation renders the new
//              page after this runs), so it is looked for again for up to two seconds. Late images
//              above it can push it down, so it is aligned once more when the page has loaded,
//              unless the visitor has scrolled in the meantime.
// The header offset is CSS: every element with an id carries scroll-margin-top (src/index.css), so
// scrollIntoView stops below the header in both languages and at every width.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RETRY_MS = 50;
const RETRY_LIMIT = 40;

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return undefined;
        }

        let id;
        try {
            id = decodeURIComponent(hash.slice(1));
        } catch {
            id = hash.slice(1);
        }

        let timer;
        let tries = 0;
        let userMoved = false;
        const onUserScroll = () => {
            userMoved = true;
        };

        const align = () => {
            const el = document.getElementById(id);
            if (!el) return false;
            // 19 October 2026 evening: a target inside a closed <details> (How It Works' "See how we
            // build it") can't be scrolled to while hidden, so every closed <details> around it opens.
            for (let node = el; node; node = node.parentElement) {
                if (node.tagName === 'DETAILS' && !node.open) node.open = true;
            }
            el.scrollIntoView({ block: 'start' });
            return true;
        };

        const realignAfterLoad = () => {
            if (!userMoved) align();
        };

        const attempt = () => {
            if (align()) {
                // Listen for the visitor's own scrolling only after our jump, so it doesn't count.
                window.setTimeout(() => {
                    window.addEventListener('wheel', onUserScroll, { passive: true });
                    window.addEventListener('touchmove', onUserScroll, { passive: true });
                    window.addEventListener('keydown', onUserScroll);
                }, 0);
                if (document.readyState === 'complete') {
                    timer = window.setTimeout(realignAfterLoad, 300);
                } else {
                    window.addEventListener('load', realignAfterLoad, { once: true });
                }
                return;
            }
            tries += 1;
            if (tries < RETRY_LIMIT) {
                timer = window.setTimeout(attempt, RETRY_MS);
            } else {
                window.scrollTo(0, 0);
            }
        };

        attempt();

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('load', realignAfterLoad);
            window.removeEventListener('wheel', onUserScroll);
            window.removeEventListener('touchmove', onUserScroll);
            window.removeEventListener('keydown', onUserScroll);
        };
    }, [pathname, hash]);

    return null;
}
