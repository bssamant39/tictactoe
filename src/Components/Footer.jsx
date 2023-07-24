import React from 'react'
import github from "../images/icons8-github.gif"
const Footer = () => {
  return (
    <footer>
      <div>Created by Bhavesh Samant</div>
        <a href="https://github.com/bssamant39">
        <img className="git" src={github} alt="github"/></a>
    </footer>
  )
}

export default Footer