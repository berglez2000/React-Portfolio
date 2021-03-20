import Link from './Link'

const Links = () => {
  return (
    <ul className="links">
      <Link href="#home" text="Home" />
      <Link href="#about" text="About" />
      <Link href="#skills" text="Skills" />
      <Link href="#projects" text="Projects" />
      <Link href="#contact" text="Contact" />
    </ul>
  )
}

export default Links
