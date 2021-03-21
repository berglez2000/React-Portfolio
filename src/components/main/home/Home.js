import { useRef, useEffect } from 'react'
import { TweenMax } from 'gsap'
import HomeImg from '../../../assets/img/spletna-stran-jaz.png'
import CV from '../../../assets/files/Aljaž Berglez CV.pdf'

const Home = () => {
  let about = useRef(null)
  let img = useRef(null)
  useEffect(() => {
    const welcomeText = about.firstElementChild; 
    const text = about.children[1];
    const btn = about.children[2];
    TweenMax.from([welcomeText, text], 1, {opacity: 0, x: -25})
    TweenMax.from(btn, 1, {opacity: 0})
    TweenMax.from(img, 1, {opacity: 0, x: 25})
  })
  return (
    <section id="home" >
      <div className="about" ref={el => about = el}>
        <strong className="welcome__text" >
          Dobrodošli na moji spletni strani
        </strong>
        <p className="name__text" >Moje ime je Aljaž</p>
        <a href={CV} download className="btn">DOWNLOAD CV</a>
      </div>
      <img src={HomeImg} alt="home-img-me" className="home__img" ref={el => img = el} />
    </section>
  )
}

export default Home
