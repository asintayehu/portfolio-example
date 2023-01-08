import React from 'react'
import "./about.css"
// import ME from "../../assets/kdot-real.png"
// import ME from "../../assets/Kendrick.png"
import ME from "../../assets/kdot-hs.jpg"
import {BsFillAwardFill} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <BsFillAwardFill className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>

          </div>
          <div className="about__text-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sapiente soluta unde tenetur facere quis ad repudiandae tempore pariatur architecto commodi explicabo perspiciatis, totam, odio qui rem maxime iure? Eveniet!</p>
              <br />
              <a href="#contact" className='btn btn-primary'> Let's Talk!</a>
            </div>
        </div>
        
      </div>

      </section>
  )
}

export default About