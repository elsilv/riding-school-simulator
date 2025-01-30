import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HorseStorePage from './pages/HorseStorePage';
import { useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  const [balance, setBalance] = useState(1000);
  const [horses, setHorses] = useState([]);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage horses={horses} />} />
          <Route path="/horse-store" element={<HorseStorePage balance={balance} setBalance={setBalance} horses={horses} setHorses={setHorses} />} />
        </Routes>
      </Router>
  )
}

export default App
