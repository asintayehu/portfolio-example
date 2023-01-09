import React from 'react'
import "./footer.css"
import {BsTwitter, BsInstagram, BsFacebook} from 'react-icons/bs' 

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">AARON</a>

      <ul className="permalinks">
        <li><a href="#"></a></li>
        <li><a href="#about"></a></li>
        <li><a href="#experience"></a></li>
        <li><a href="#services"></a></li>
        <li><a href="#portfolio"></a></li>
        <li><a href="#testimonials"></a></li>
        <li><a href="#contact"></a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsTwitter/></a>
        <a href="https://twitter.com"><BsInstagram/></a>
        <a href="https://instagram.com"><BsFacebook/></a>
      </div>
    </footer>
  )
}

export default Footer