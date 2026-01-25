import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-light-bg dark:bg-dark-bg text-light-text-primary dark:text-dark-text-primary min-h-screen antialiased">
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
