import Title from '../Title'
import Progress from './Progress'
import Skill from './Skill'

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Title upperTitle="my specialty" mainTitle="Znanja in izkušnje" />
      <div className="content">
        <div className="progress__field">
          <Progress skill="HTML5" />
          <Progress skill="CSS3" />
          <Progress skill="Javascript" />
          <Progress skill="Python" />
        </div>
        <div className="add__skills">
          <p>Dodatna znanja:</p>
          <ul className="skills" >
            <Skill skillName="Osnovno poznavanje tehnologije React JS," />
            <Skill skillName="Delo z računalniki, poznavanje Windows, Linux, delo z internetom, virtualizacija, strežniško okolje, protokoli,," />
            <Skill skillName="Dobro poznavanje CSS frameworkov (Sass, Bootstrap, GSAP),"/>
            <Skill skillName="Osnovno poznavanje Wordpressa," />
            <Skill skillName="Osnovno poznavanje Git in Github," />
            <Skill skillName="Aktivno znanje angleškega jezika," />
            <Skill skillName="Vozniški izpit kategorije B," />
            <Skill skillName="Poznavanje MS Office programov, Photoshop, Altium Designer, Figma" />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
