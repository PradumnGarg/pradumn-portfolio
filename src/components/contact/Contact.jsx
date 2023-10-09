import React,{useRef} from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { FaTelegram } from 'react-icons/fa'; 

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j794rhm', 'template_tws7i8b', form.current, '2gTx8OBxkPsjVwRXH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">

     <h5>Get in Touch</h5>
     <h2>Contact Me</h2>

     <div className='container contact_container'>
         <div className='contact_options'>

          <article className='contact_option'>
            <MdOutlineEmail  className='contact_option_icon'/> 
             <h4>Email</h4>
             <h5>pradungarg4050@gmail.com</h5>
             <a href="mailto:pradumngarg4050@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <FaTelegram className='contact_option_icon'/> 
            <h4>Telegram</h4>
            <h5>@pgarg09</h5>
            <a href="https://t.me/pgarg09" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/> 
             <h4>Whatsapp</h4>
             <h5>+123456789</h5>
             <a href="https://wa.me/919776652513" target='_blank'>Send a message</a>
          </article>

          </div>  

          <form ref={form} onSubmit={sendEmail}> 

          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7"placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>

          </form>

     </div>

    </section>
  )
}

export default Contact