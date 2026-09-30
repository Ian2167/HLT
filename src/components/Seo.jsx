// Seo.jsx — one component, one head per page. Added 30 September 2026, the visibility refresh.
//
// WHAT IT RENDERS, for the page it sits on: the title, the description, the canonical URL, the
// three hreflang alternates (th, en, x-default), the Open Graph and Twitter card fields, and, on
// the home page only, the Organization schema (spec section 33: Organization now, LocalBusiness
// only once a genuine eligible Hua Hin address exists, so there is deliberately no address here).
//
// HOW IT REACHES <head>. React 19 hoists <title>, <meta> and <link> rendered anywhere in the tree
// into the document head and removes them when the page unmounts. Every element carries a
// `data-seo` mark so that src/main.jsx can strip the copies a prerendered page arrived with before
// React renders its own, which is what keeps a page at one title and one canonical whether it was
// served as static HTML or navigated to inside the app.
//
// WHY index.html NO LONGER CARRIES A DESCRIPTION. React appends a rendered <meta name="description">
// beside a static one rather than replacing it, which is the duplicate the older pages worked
// around with a querySelector swap. With the static tag gone, the one rendered here is the only one.
import { useLanguage } from '../context/LanguageContext';
import { OG_LOCALE, SITE_URL, absoluteUrl } from '../constants/lang';
import { CONTACT_EMAIL, CONTACT_PHONE_E164, LINE_OFFICIAL_ACCOUNT } from '../constants/contact';

const SITE_NAME = 'High Level Thai';
const DEFAULT_IMAGE = `${SITE_URL}/brand/og-image.png`;

const Seo = ({ title, description, route, image = DEFAULT_IMAGE, organization = false, noindex = false }) => {
    const { language } = useLanguage();
    const url = absoluteUrl(route, language);

    const org = organization
        ? {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'High Level Thai Ltd.',
              alternateName: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/brand/hlt-lockup-colour.png`,
              email: CONTACT_EMAIL,
              telephone: CONTACT_PHONE_E164,
              areaServed: ['Hua Hin', 'Thailand'],
              sameAs: [LINE_OFFICIAL_ACCOUNT],
              knowsLanguage: ['th', 'en'],
          }
        : null;

    return (
        <>
            <title data-seo="">{title}</title>
            <meta data-seo="" name="description" content={description} />
            <link data-seo="" rel="canonical" href={url} />
            <link data-seo="" rel="alternate" hrefLang="th" href={absoluteUrl(route, 'th')} />
            <link data-seo="" rel="alternate" hrefLang="en" href={absoluteUrl(route, 'en')} />
            <link data-seo="" rel="alternate" hrefLang="x-default" href={absoluteUrl(route, 'th')} />
            <meta data-seo="" property="og:type" content="website" />
            <meta data-seo="" property="og:site_name" content={SITE_NAME} />
            <meta data-seo="" property="og:title" content={title} />
            <meta data-seo="" property="og:description" content={description} />
            <meta data-seo="" property="og:url" content={url} />
            <meta data-seo="" property="og:image" content={image} />
            <meta data-seo="" property="og:locale" content={OG_LOCALE[language]} />
            <meta data-seo="" name="twitter:card" content="summary_large_image" />
            {noindex ? <meta data-seo="" name="robots" content="noindex" /> : null}
            {org ? <script type="application/ld+json">{JSON.stringify(org)}</script> : null}
        </>
    );
};

export default Seo;
