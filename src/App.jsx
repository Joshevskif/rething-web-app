import Banner from "./components/Banner/Banner"
import ContentWrapper from "./components/ContentWrapper/ContentWrapper"
import DemoBooking from "./components/DemoBooking/DemoBooking"
import Hero from "./components/Hero/Hero"
import NavigationMenu from "./components/NavigationMenu/NavigationMenu"
import Roadmap from "./components/Roadmap/Roadmap"
import Services from "./components/Services/Services"
import Technologies from "./components/Technolgies/Technologies"

function App() {
  return (
    <div className='main-div'>
      <NavigationMenu/>
      <Banner/>
      <Hero/>
      <Technologies/>
      <Services/>
      <Roadmap/>
      <DemoBooking/>
    </div>
  )
}

export default App
