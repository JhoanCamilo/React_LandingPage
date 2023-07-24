import './App.css'
import {NavBar} from './Components/NavBar/NavBar'
import {HeroSection} from './Components/Hero/HeroSection'
import {ResponsiveSection} from './Components/ResponsiveSection/Responsive'
import {Carousel} from './Components/Carousel/Carousel'
import {ContactForm} from './Components/Form/Form'
import {Footer} from './Components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Carousel/>
      <ResponsiveSection/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
