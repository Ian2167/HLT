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
import AiOpportunityAudit from './pages/AiOpportunityAudit';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
import { ROUTE_EXECUTIVE_ASSISTANT, ROUTE_EXECUTIVE_ASSISTANT_ALIAS } from './constants/routes';
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
            <Route path="/ai-opportunity-audit" element={<AiOpportunityAudit />} />
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
