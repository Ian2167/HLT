import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MCTB from './pages/MCTB';
import Quotes from './pages/Quotes';
import RAG from './pages/RAG';
import BusinessRead from './pages/BusinessRead';
// The rebuilt catalogue-service pages, 14 September 2026 (Ian's ruling 3.1). The older service
// routes below stay live on purpose; only the nav stops pointing at them.
import AiosAudit from './pages/AiosAudit';
import BrandOs from './pages/BrandOs';
import ExecutiveAssistant from './pages/ExecutiveAssistant';
import OpsCockpit from './pages/OpsCockpit';
import OpenBrain from './pages/OpenBrain';
import Websites from './pages/Websites';
import HomeServices from './pages/HomeServices';
import Clinics from './pages/Clinics';
import Salons from './pages/Salons';
import AiosDiagnostic from './pages/AiosDiagnostic';
import AiosDiagnosticLanding from './pages/AiosDiagnosticLanding';
// The simplified public site, 18 September 2026 (Ian's directive of 17 September, his GO of
// 07:41 Bangkok on the 18th). NOTHING BELOW IS REMOVED: every retired service and sector route
// still resolves to the page it always did, on his opening line "Do not delete existing service
// or methodology content". What changed is that the header stops pointing at them.
import HowItWorks from './pages/HowItWorks';
import Examples from './pages/Examples';
import About from './pages/About';
import Contact from './pages/Contact';
import ClientLogin from './pages/ClientLogin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
// The visibility refresh, 30 September 2026 (bridge row 4007 and Ian's fuller spec). Three new
// public pages and two legal placeholders.
import HuaHin from './pages/HuaHin';
import BusinessBlindspots from './pages/BusinessBlindspots';
import OwnerDependency from './pages/OwnerDependency';
import PdpaPolicy from './pages/PdpaPolicy';
import CookiePolicy from './pages/CookiePolicy';
import {
  ROUTE_AIOS_AUDIT,
  ROUTE_AIOS_AUDIT_ALIAS,
  ROUTE_EXECUTIVE_ASSISTANT,
  ROUTE_EXECUTIVE_ASSISTANT_ALIAS,
  ROUTE_HOW_IT_WORKS,
  ROUTE_EXAMPLES,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_CLIENT_LOGIN,
  ROUTE_HUA_HIN,
  ROUTE_BUSINESS_BLINDSPOTS,
  ROUTE_OWNER_DEPENDENCY,
  ROUTE_BUSINESS_READ,
  ROUTE_TERMS,
  ROUTE_PRIVACY,
  ROUTE_PDPA,
  ROUTE_COOKIES,
} from './constants/routes';
import { LANGS } from './constants/lang';
import ScrollToTop from './components/ScrollToTop';

// THE LANGUAGE IN THE URL, 30 September 2026. Every public page is served twice: at its Thai
// address, which is the address the site has always had, and under /en. This layout route sits
// on the optional first segment. No segment or "en" is a language; "th" is redirected to the
// unprefixed address so the Thai page has one URL; anything else is not a language and is a 404.
// The retired service routes are declared as static paths below and outrank this dynamic one, so
// /mctb still reaches MCTB and never lands here. See src/constants/lang.js for the shape.
const LangLayout = () => {
  const { lang } = useParams();
  const { pathname, search, hash } = useLocation();
  if (lang === 'th') {
    const rest = pathname.replace(/^\/th(?=\/|$)/, '') || '/';
    return <Navigate to={`${rest}${search}${hash}`} replace />;
  }
  if (lang !== undefined && !LANGS.includes(lang)) return <NotFound />;
  return <Outlet />;
};

// A prerendered page arrives with window.__PRERENDERED__ set, which keeps React's first render
// animation-free (src/lib/motion.js). Once React has mounted the flag has done its job; clearing
// it lets every later client-side navigation animate as it always did.
const ClearPrerenderFlag = () => {
  useEffect(() => {
    window.__PRERENDERED__ = false;
  }, []);
  return null;
};

// A public path without its leading slash, for the child routes of the language layout.
const child = (route) => route.replace(/^\//, '');

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <ClearPrerenderFlag />
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
          <Navbar />
          <main className="flex flex-col min-h-screen">
            <Routes>
              {/* The public site, in both languages. */}
              <Route path="/:lang?" element={<LangLayout />}>
                <Route index element={<Home />} />
                <Route path={child(ROUTE_BUSINESS_READ)} element={<BusinessRead />} />
                <Route path={child(ROUTE_HOW_IT_WORKS)} element={<HowItWorks />} />
                <Route path={child(ROUTE_EXAMPLES)} element={<Examples />} />
                <Route path={child(ROUTE_ABOUT)} element={<About />} />
                <Route path={child(ROUTE_CONTACT)} element={<Contact />} />
                <Route path={child(ROUTE_HUA_HIN)} element={<HuaHin />} />
                <Route path={child(ROUTE_BUSINESS_BLINDSPOTS)} element={<BusinessBlindspots />} />
                <Route path={child(ROUTE_OWNER_DEPENDENCY)} element={<OwnerDependency />} />
                <Route path={child(ROUTE_CLIENT_LOGIN)} element={<ClientLogin />} />
                <Route path={child(ROUTE_TERMS)} element={<Terms />} />
                <Route path={child(ROUTE_PRIVACY)} element={<PrivacyPolicy />} />
                <Route path={child(ROUTE_PDPA)} element={<PdpaPolicy />} />
                <Route path={child(ROUTE_COOKIES)} element={<CookiePolicy />} />
                <Route path="*" element={<NotFound />} />
              </Route>

              {/* The retired service, sector and funnel routes. Thai-only addresses, off the
                  header, carrying a noindex header from vercel.json, and still live on Ian's
                  "Do not delete existing service or methodology content". */}
              <Route path="/mctb" element={<MCTB />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/rag" element={<RAG />} />
              <Route path={ROUTE_AIOS_AUDIT} element={<AiosAudit />} />
              <Route path={ROUTE_AIOS_AUDIT_ALIAS} element={<AiosAudit />} />
              <Route path="/brand-os" element={<BrandOs />} />
              <Route path={ROUTE_EXECUTIVE_ASSISTANT} element={<ExecutiveAssistant />} />
              <Route path={ROUTE_EXECUTIVE_ASSISTANT_ALIAS} element={<ExecutiveAssistant />} />
              <Route path="/ops-cockpit" element={<OpsCockpit />} />
              <Route path="/openbrain" element={<OpenBrain />} />
              <Route path="/websites" element={<Websites />} />
              <Route path="/home-services" element={<HomeServices />} />
              <Route path="/clinics" element={<Clinics />} />
              <Route path="/salons" element={<Salons />} />
              <Route path="/aios-diagnostic" element={<AiosDiagnosticLanding />} />
              <Route path="/diagnostic" element={<AiosDiagnostic />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
