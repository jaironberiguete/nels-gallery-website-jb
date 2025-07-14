import Navbar from './components/Navbar'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Gallery />
      <Contact/>
      <About/>
      <Footer />
    </>
  )
}

export default App