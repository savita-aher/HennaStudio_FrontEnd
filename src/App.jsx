import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Design from './pages/Design';
import FAQ from './pages/FAQ';
import Admin from './pages/AdminLogin';
import Dashboard from'./pages/AdminDashboard';
import './App.css';

function App() {
 return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Designs" element={<Design />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/login" element={<Admin />} />
      <Route path="login/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
