import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
// 07:41 Bangkok on the 18th). Six public pages and one login stub. NOTHING BELOW IS REMOVED:
// every retired service and sector route still resolves to the page it always did, on his
// opening line "Do not delete existing service or methodology content". What changed is that
// the header stops pointing at them.
import HowItWorks from './pages/HowItWorks';
import Examples from './pages/Examples';
import About from './pages/About';
import Contact from './pages/Contact';
import ClientLogin from './pages/ClientLogin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
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
} from './constants/routes';
import ScrollToTop from './components/ScrollToTop'; // We will need this to scroll top on nav

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <main className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mctb" element={<MCTB />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/rag" element={<RAG />} />
            <Route path="/business-read" element={<BusinessRead />} />
            {/* The simplified public site, 18 September 2026. Business Read above is the
                second nav item and is unchanged; these five are the rest of the locked
                seven. Client Login is a stub with no authentication behind it: see the
                header of src/pages/ClientLogin.jsx for Ian's security rule. */}
            <Route path={ROUTE_HOW_IT_WORKS} element={<HowItWorks />} />
            <Route path={ROUTE_EXAMPLES} element={<Examples />} />
            <Route path={ROUTE_ABOUT} element={<About />} />
            <Route path={ROUTE_CONTACT} element={<Contact />} />
            <Route path={ROUTE_CLIENT_LOGIN} element={<ClientLogin />} />
            {/* Renamed 14 September 2026 on Ian's correction at 17:50. The old path stays
                live as an alias so nothing anybody has already opened 404s. */}
            <Route path={ROUTE_AIOS_AUDIT} element={<AiosAudit />} />
            <Route path={ROUTE_AIOS_AUDIT_ALIAS} element={<AiosAudit />} />
            <Route path="/brand-os" element={<BrandOs />} />
            {/* Renamed 14 September 2026 on Ian's ruling. The old path stays live as an alias
                so no link anybody has already opened 404s. */}
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
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
