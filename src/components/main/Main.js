import About from "./about/About"
import Home from "./home/Home"

const Main = () => {
  return (
    <main className="main" id="main">
      <div className="wrap">
        <Home />
        <About />
      </div>
    </main>
  )
}

export default Main
