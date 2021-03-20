import { useState } from 'react'


const Link = ({ href, text }) => {
  return (
    <li>
      <a href={href} >{text}</a>
    </li>
  )
}

export default Link
