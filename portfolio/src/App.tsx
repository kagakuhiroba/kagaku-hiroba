import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Works } from './components/Works'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { InkSplatterDefs } from './components/InkSplatter'

function App() {
  return (
    <>
      <InkSplatterDefs />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
