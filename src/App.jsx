import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Pages/Home';
import EssentialDrugs from './Pages/EssentialDrugs';
import Team from './Pages/Team';
import About from './Pages/About';
import Footer from './Components/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/essential-drugs" element={<EssentialDrugs />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
