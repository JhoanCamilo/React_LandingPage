import './App.css'
import {NavBar} from './Components/NavBar/NavBar'
import {HeroSection} from './Components/Hero/HeroSection'
import {ResponsiveSection} from './Components/ResponsiveSection/Responsive'
import {Carousel} from './Components/Carousel/Carousel'
import {Footer} from './Components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection
        CTA='Put your brand online for the world to see'
      />
      <ResponsiveSection/>
      <Carousel/>
      <Footer/>
    </>
  )
}

export default App
