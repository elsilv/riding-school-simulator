import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HorseStorePage from './pages/HorseStorePage';
import LandingPage from "./pages/LandingPage.jsx";
import { useSelector } from "react-redux";

function App() {
  const horses = useSelector((state) => state.horses.ownedHorses);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage horses={horses} />} />
          <Route path="/horse-store" element={<HorseStorePage />} />
        </Routes>
      </Router>
  )
}

export default App
