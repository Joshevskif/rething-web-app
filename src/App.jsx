import Banner from "./components/Banner/Banner"
import ContentWrapper from "./components/ContentWrapper/ContentWrapper"
import DemoBooking from "./components/DemoBooking/DemoBooking"
import Hero from "./components/Hero/Hero"
import NavigationMenu from "./components/NavigationMenu/NavigationMenu"
import Roadmap from "./components/Roadmap/Roadmap"
import Services from "./components/Services/Services"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Technologies from "./components/Technolgies/Technologies"
import LandingPage from "./components/LandingPage/LandingPage"
import Contact from "./components/Contact/Contact"
import Career from "./components/Career/Career"

function App() {
  return (
    <div className='main-div'>
       <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Career/>} />
      </Routes>
    </Router>
     
    </div>
  )
}

export default App
