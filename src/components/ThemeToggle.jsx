import { Sun } from 'lucide-react';

// RETIRED 18 September 2026, NOT DELETED. Ian, 12:2x Bangkok that day, verbatim: "I just want
// one common header with the blue logo." One header means one theme, so the site no longer has a
// dark mode and nothing imports this component any more. It is kept on disk because the file is
// the record of what the toggle used to do, and because deleting it would lose that.
//
// IT CAN NO LONGER TURN THE SITE DARK. The effect that added the `dark` class to
// document.documentElement and wrote localStorage.theme is gone. If some future file imports it
// again by mistake, the worst it can do is render a sun button that does nothing. The one-time
// clear for browsers that still hold theme=dark from before this ruling lives in src/main.jsx,
// not here, because this component no longer mounts.
//
// The `dark:` utility classes elsewhere in the tree were left in place on the same ruling: they
// are dead styling now, and sweeping them was out of scope for this commit.
const ThemeToggle = () => (
    <button
        type="button"
        disabled
        aria-hidden="true"
        tabIndex={-1}
        className="hidden"
        aria-label="Theme toggle, retired"
    >
        <Sun size={20} />
    </button>
);

export default ThemeToggle;
