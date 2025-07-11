import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Tentang from './pages/Tentang';
import Investasi from './pages/Investasi';
import Layanan from './pages/Layanan';
import Outlet from './pages/Outlet';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/investasi" element={<Investasi />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/outlet" element={<Outlet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
