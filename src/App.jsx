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
      <HeroSection
        CTA='Put your brand online for the world to see'
        complement='Make your brand grow and be known worldwide, increase your sales with a visually powerful appeal.'
      />
      <ResponsiveSection/>
      <Carousel/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
