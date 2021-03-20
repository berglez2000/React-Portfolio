import Profile from "./Profile"
import ProfileImg from '../../assets/img/rounded-small-img.jpg'
import Links from "./Links"
import SocialLinks from "./SocialLinks"

const Navbar = () => {
  return (
    <nav className="nav__tab">
      <Profile img={ProfileImg} name="Aljaž Berglez" position="Junior Web Developer" />  
      <Links />
      <SocialLinks />
      <p>© Copyright ©2020 All rights reserved</p>
    </nav>
  )
}

export default Navbar
