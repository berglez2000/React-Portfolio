import About from "./about/About"
import Home from "./home/Home"
import Projects from "./projects/Projects"
import Skills from "./skills/Skills"

const Main = () => {
  return (
    <main className="main" id="main">
      <div className="wrap">
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  )
}

export default Main
