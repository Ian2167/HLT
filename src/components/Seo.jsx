// Seo.jsx — one component, one head per page. Added 30 September 2026, the visibility refresh.
//
// WHAT IT RENDERS, for the page it sits on: the title, the description, the canonical URL, the
// three hreflang alternates (th, en, x-default), the Open Graph and Twitter card fields, and, on
// the home page only, the Organization schema (spec section 33: Organization now, LocalBusiness
// only once a genuine eligible Hua Hin address exists, so there is deliberately no address here).
//
// HOW IT REACHES <head>. In the browser React 19 hoists <title>, <meta> and <link> rendered
// anywhere in the tree into the document head and removes them when the page unmounts. Every
// element carries a `data-seo` mark so the prerendered copies can be told from React's own.
//
// ON THE SERVER (the static prerender, scripts/prerender.mjs) there is no head to hoist into, so
// the tags are not rendered; the same values go to src/lib/head.js and the prerender writes the
// head itself, tag for tag as below. The JSON-LD script is ordinary body content and renders in
// both places, so the server markup and the client markup match for hydration.
//
// WHY index.html NO LONGER CARRIES A DESCRIPTION. React appends a rendered <meta name="description">
// beside a static one rather than replacing it. With the static tag gone, the one rendered here is
// the only one.
import { useLanguage } from '../context/LanguageContext';
import { OG_LOCALE, SITE_URL, absoluteUrl, isThaiPending } from '../constants/lang';
import { CONTACT_PHONE_E164, LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { captureHead } from '../lib/head';

const SITE_NAME = 'High Level Thai';
const DEFAULT_IMAGE = `${SITE_URL}/brand/og-image.png`;

// 18 October 2026 (A-044, the website status report's fix 4): breadcrumbs on every page but the
// home, and a Service entry on the Business Read. The crumb's name is the page's own nav label.
const CRUMB_KEYS = {
    '/business-read': 'brNavLink',
    '/how-it-works': 'hiwNavLink',
    '/problems-we-fix': 'problemsNavLink',
    '/who-we-help': 'whoNavLink',
    '/examples': 'exNavLink',
    '/about': 'aboutNavLink',
    '/contact': 'contactNavLink',
    '/hua-hin': 'huaHinNavLink',
    '/business-blindspots': 'blindNavLink',
    '/owner-dependency': 'odNavLink',
};

const Seo = ({ title, description, route, image = DEFAULT_IMAGE, organization = false, noindex = false, service = null }) => {
    const { contentLang, t } = useLanguage();
    // A Thai address still waiting for its Thai copy is the English page in all but address
    // (src/constants/lang.js, THAI_PENDING_ROUTES), so both addresses name the English page as
    // canonical and offer no Thai alternate until the Thai exists.
    const language = contentLang;
    const url = absoluteUrl(route, language);
    const alternates = isThaiPending(route)
        ?{ en: absoluteUrl(route, 'en'), 'x-default': absoluteUrl(route, 'en') }
        : {
              th: absoluteUrl(route, 'th'),
              en: absoluteUrl(route, 'en'),
              'x-default': absoluteUrl(route, 'th'),
          };

    const crumbName = CRUMB_KEYS[route] ? t(CRUMB_KEYS[route]) : String(title).split('|')[0].trim();
    const breadcrumbs =
        route === '/' || noindex
            ? null
            : {
                  '@context': 'https://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'High Level Thai', item: absoluteUrl('/', language) },
                      { '@type': 'ListItem', position: 2, name: crumbName, item: url },
                  ],
              };

    // No price, no offer and no person, by the status report's own wording.
    const serviceLd = service
        ? {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: service.name,
              description: service.description,
              url,
              areaServed: ['Hua Hin', 'Thailand'],
              provider: { '@type': 'Organization', name: 'High Level Thai Ltd.', url: SITE_URL },
          }
        : null;

    const org = organization
        ? {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'High Level Thai Ltd.',
              alternateName: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/brand/hlt-lockup-colour.png`,
              // No email here since 20 October 2026: Ian ruled "an 'email us' link with no name", and
              // search engines show this field as text. The phone and LINE stay.
              telephone: CONTACT_PHONE_E164,
              areaServed: ['Hua Hin', 'Thailand'],
              sameAs: [LINE_OFFICIAL_ACCOUNT],
              knowsLanguage: ['th', 'en'],
          }
        : null;

    if (import.meta.env.SSR) {
        captureHead({ title, description, url, alternates, image, locale: OG_LOCALE[language], siteName: SITE_NAME, noindex, lang: language });
    }

    return (
        <>
            {import.meta.env.SSR ? null : (
                <>
                    <title data-seo="">{title}</title>
                    <meta data-seo="" name="description" content={description} />
                    <link data-seo="" rel="canonical" href={url} />
                    {alternates.th ? <link data-seo="" rel="alternate" hrefLang="th" href={alternates.th} /> : null}
                    <link data-seo="" rel="alternate" hrefLang="en" href={alternates.en} />
                    <link data-seo="" rel="alternate" hrefLang="x-default" href={alternates['x-default']} />
                    <meta data-seo="" property="og:type" content="website" />
                    <meta data-seo="" property="og:site_name" content={SITE_NAME} />
                    <meta data-seo="" property="og:title" content={title} />
                    <meta data-seo="" property="og:description" content={description} />
                    <meta data-seo="" property="og:url" content={url} />
                    <meta data-seo="" property="og:image" content={image} />
                    <meta data-seo="" property="og:locale" content={OG_LOCALE[language]} />
                    <meta data-seo="" name="twitter:card" content="summary_large_image" />
                    {noindex ? <meta data-seo="" name="robots" content="noindex" /> : null}
                </>
            )}
            {org ? <script type="application/ld+json">{JSON.stringify(org)}</script> : null}
            {breadcrumbs ? <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script> : null}
            {serviceLd ? <script type="application/ld+json">{JSON.stringify(serviceLd)}</script> : null}
        </>
    );
};

export default Seo;
