import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MCTB from './pages/MCTB';
import Quotes from './pages/Quotes';
import RAG from './pages/RAG';
import Websites from './pages/Websites';
import HomeServices from './pages/HomeServices';
import Clinics from './pages/Clinics';
import Salons from './pages/Salons';
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
            <Route path="/websites" element={<Websites />} />
            <Route path="/home-services" element={<HomeServices />} />
            <Route path="/clinics" element={<Clinics />} />
            <Route path="/salons" element={<Salons />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
