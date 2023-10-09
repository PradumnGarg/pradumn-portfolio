import React from 'react';
import {BiCheck} from 'react-icons/bi';
import './services.css';

function Services() {
  return (
    <section id="services">
      
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
              <h3>Software Development</h3>
          </div>
          <ul className='service_list'>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Frontend Development Using ReactJs and AngularJS</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Backend Development Using NodeJs,Springboot and GraphQl</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Database Design using SQL.MongoDB</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Proficiency in C,C++,Java,Python</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>App Development using Flutter and Java </p>
               </li>
          </ul>

        </article>

        <article className='service'>
          <div className='service_head'>
              <h3>Cloud Solutions</h3>
          </div>
          <ul className='service_list'>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Knowledge of AWS services e.g lambda,cloudwatch,cdk,etc</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Well versed with the GCP interface</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Familiar with firebase console for both app and web applications</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Knowledge of CI/CD Development and Testing</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Familiar with the IBM cloud quantum conputer </p>
               </li>
          </ul>

        </article>

        <article className='service'>
          <div className='service_head'>
              <h3>Miscellaneous</h3>
          </div>
          <ul className='service_list'>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Well versed with digital marketing tools and technologies</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Familiar with professional video editing softwares</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Experienced in teaching and mentoring students</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Brief Knowledge of UI/UX Design</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Excellent problem solving skills </p>
               </li>
          </ul>

        </article>
      </div>

    </section>
  )
}

export default Services;