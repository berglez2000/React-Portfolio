import SocialLink from "./SocialLink"

const SocialLinks = () => {
  return (
    <div className="social__links">
      <SocialLink href="https://www.facebook.com/alyo.berglez" icon="fab fa-facebook-f" className="fb" />
      <SocialLink href="https://www.instagram.com/aljaz_berglez/" icon="fab fa-instagram" className="ig" />
      <SocialLink href="https://github.com/berglez2000" icon="fab fa-github" className="git" />
    </div>
  )
}

export default SocialLinks
