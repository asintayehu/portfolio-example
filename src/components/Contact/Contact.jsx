import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';


const Contact = () => {

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options"> 
          <article className="contact__option">
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:dummyemail@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>aaronthing</h5>
            <a href="instagram.com">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp/>
            <h4>Email</h4>
            <h5>123-456-7890</h5>
            {/* <a href="https://api.whatsapp.com/send?phone+fakenumber">Send a message</a> */}
            <a href="https://www.facebook.com">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input type="text" name="name" placeholder="Full Name" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact