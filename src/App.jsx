import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HorseStorePage from './pages/HorseStorePage';
import LandingPage from "./pages/LandingPage.jsx";
import NavBar from "./components/Navbar.jsx";
import HorsePage from "./pages/HorsePage.jsx";
import Lessons from "./components/Lessons.jsx";

function App() {

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/horse-store" element={<HorseStorePage />} />
          <Route path="/horses" element={<HorsePage />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>
  )
}

export default App
