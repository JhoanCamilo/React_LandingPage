import './App.css'
import {NavBar} from './Components/NavBar/NavBar'
import {HeroSection} from './Components/Hero/HeroSection'
import {ResponsiveSection} from './Components/ResponsiveSection/Responsive'

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection
        CTA='Put your brand online for the world to see'
      />
      <ResponsiveSection/>
    </>
  )
}

export default App
