import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpeg';
import { IoIosSchool } from 'react-icons/io';
import { GiTeacher } from 'react-icons/gi';
import { FaAmazon } from 'react-icons/fa';

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        <div className='about_me'>
          
         <div className='about_me_image'>
              <img src={ME} alt="About Image"/>

         </div>

         </div>

         <div className='about_content'>

          <div className='about_cards'>
              
              <article className='about_card'>
                <IoIosSchool className='about_icon'/>
                 <h5>Education</h5>
                 <small>B.Tech CSE MUJ</small>
              </article>

              <article className='about_card'>
                <GiTeacher className='about_icon'/>
                 <h5>Mentorship</h5>
                 <small>500+ students</small>
              </article>

              <article className='about_card'>
                <FaAmazon className='about_icon'/>
                 <h5>Internship</h5>
                 <small>System Dev Engineer</small>
              </article>

          </div>

          <p>I am a computer science graduate from Manipal University Jaipur, deeply passionate about leveraging technology to create positive change in the world. My enthusiasm lies in collaborating on projects that embody innovation, drive impact, and prioritize customer satisfaction, regardless of the technology stack or industry. With a strong adaptability to new technologies and unwavering dedication, I have had the privilege to contribute across diverse domains within the realm of software development. And yet, I believe that I am only at the beginning of my journey.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

         </div>


      </div>

    </section>
  )
}

export default About