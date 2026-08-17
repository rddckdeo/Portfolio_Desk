import DeskBackground from './components/layouts/DeskBackground'
import AboutMe from './sections/AboutMe/AboutMe'
import Hero from './sections/Hero/Hero'

function App() {
  return (
    <>
      <DeskBackground>
        <Hero />
        <AboutMe />
      </DeskBackground>
    </>
  )
}

export default App