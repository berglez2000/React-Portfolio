import { useRef, useEffect } from 'react'
import Title from '../Title'
import Card from './Card'

const About = () => {
  return (
    <section className="about" id="about" >
      <Title upperTitle="O meni" mainTitle="Who am I?" />
      <div className="content">
        <div className="about__me">
          <p>
            Moje ime je Aljaž Berglez, doma sem iz okolice Idrije 
            in imam 20 let. Letos obiskujem 2. letnik fakultete 
            za organizacijske vede v Kranju, kjer sem si izbral 
            smer informacijski sistemi. Za to smer sem se odločil, 
            ker me to področje zelo zanima in se bo še posebej 
            razvijalo. V prostem času se rad ukvarjam s športom, 
            družino, prijatelji ter programiranjem, kar bi tudi 
            postal po poklicu, ko zaključim šolanje.
          </p>
        </div>
        <div className="cards__field">
          <Card color="blue" text="Web Developer" icon="fas fa-code" />
          <Card color="gold" text="Student" icon="fas fa-graduation-cap" />
          <Card color="green" text="Athlete" icon="fas fa-running" />
        </div>
      </div>
    </section>
  )
}

export default About
