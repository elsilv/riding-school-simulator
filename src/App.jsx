import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HorseStorePage from './pages/HorseStorePage';
import LandingPage from "./pages/LandingPage.jsx";
import NavBar from "./components/Navbar.jsx";
import HorsePage from "./pages/HorsePage.jsx";
import Lessons from "./components/Lessons.jsx";
import Bills from "./components/Bills.jsx";

function App() {

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/horse-store" element={<HorseStorePage />} />
          <Route path="/horses" element={<HorsePage />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </Router>
  )
}

export default App
