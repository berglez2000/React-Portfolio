import { useState } from 'react'

const SocialLink = ({ href, icon, className }) => {
  return (
    <a href={href} target="_blank" className={`social__link ${className}`} >
      <i className={icon}></i>
    </a>
  )
}

export default SocialLink
