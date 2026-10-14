import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Experience } from './components/Experience/Experience'
import { Pricing } from './components/Pricing/Pricing'
import { Contacts } from './components/Contacts/Contacts'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Pricing />
      <Contacts />
      <Footer />
    </>
    
  )
}

export default App
