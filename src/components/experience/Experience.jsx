import React from 'react';
import  './experience.css';
import amazon from "../../assets/amazon.png";
import Mulltiply from "../../assets/mulltiply.jpeg";
import Chegg from "../../assets/chegg.png";
import IEEE from "../../assets/IEEE.jpeg";
import Astorianz from "../../assets/astorianz.jpeg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data=[
  {
    avatar:amazon,
    name:'Amazon',
    role:'System Development Engineering Intern',
    review:" I developed a robust tool, spanning 30,000+ lines of code, with the goal of widespread adoption across the company. My expertise extended to diverse ordering services like UberCart-V2, PAPA, CASE, and more, allowing me to effectively address and resolve over 30+ tickets during On-call duties. I engineered a full-stack web application using Python, CDK, AWS, ReactTS, and Katal, enabling Amazonians to streamline infrastructure audits across 100+ services, reducing manual engineering effort by over 10 days. My commitment to quality was evident through comprehensive testing and documentation, resulting in a code coverage rate of 100%"
  },
  {
    avatar:Mulltiply,
    name:'Mulltiply',
    role:'Software Engineering Intern',
    review:"I rapidly transitioned from having no prior Angular experience to becoming a valuable contributor on the team within a short span. During my time, I took the lead in designing essential components, including global search APIs, an Image converter module, Excel mapping module, Notification module, and more, utilizing cutting-edge frameworks like Node.js, GraphQL, Express.js, and others. Additionally, I played a pivotal role in conducting alpha testing of the application, ensuring its stability and readiness for further development. Because of my dedication to work I was also in charge of recruitng interns and marketing for the company"
  },
  {
    avatar:Chegg,
    name:'Chegg',
    role:'Computer Science Expert',
    review:" I effectively communicated and presented ideas to address queries from a diverse group of over 500 students from around the world. This experience allowed me to enhance my skills in various fundamental areas, including Data Structures and Algorithms, Relational Database Management Systems , Object-Oriented Programming , Compiler Design, Computer Networks , Software Engineering , Operating Systems , and more. It was a valuable opportunity to both share knowledge and deepen my understanding of these core concepts . In the process, I had the opportunity to interact with individuals from diverse backgrounds and locations worldwide"
  },
  {
    avatar:IEEE,
    name:'IEEE',
    role:'C++ Mentor',
    review:" I provided guidance and mentoring to over 50+ students, helping them grasp the fundamentals of C++ programming. By incorporating Competitive Programming challenges and introducing innovative coursework into the curriculum, I successfully enhanced the cognitive abilities of students. This approach not only encouraged creative thinking but also facilitated a deeper understanding of the subject matter. Few individuals from the cirriculum have gone ahead and become proficient developers with 4-5 stars on various coding platforms while some have gone ahead and won various hackathons which could easily prove the cirriculum's effectiveness."
  },
  {
    avatar:Astorianz,
    name:'Astorianz Industries',
    role:'Digital Marketing Intern',
    review:" While working as a Digital Marketing Intern at Astorianz Industries, I achieved a 5% increase in social reach on LinkedIn,Instagram and Facebook through strategic marketing efforts. Additionally, I actively participated in discussions and brainstorming sessions, contributing to the generation of innovative ideas aimed at boosting lead generation for the company. Was incharge of keeping record of  minutes of meetings . During my internship I had done several courses on marketing from Udemy and Google which honed my expertise and helped me to provide insights to various stakeholders. Even got a chance to attend several workshops on marketing."
  }
]

function Experience() {
  return (
    <section id="experience">
      <h5>Roles & Responsibilities</h5>
      <h2>Work Experience</h2>

      <Swiper className='container expereince_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,role,review},index)=>{
            return <SwiperSlide>
              <article key={index} className='experience'>
            <div className='client_avatar'>
                <img src={avatar} alt="company"/>
            </div>
  
            <h4>{name}</h4>
                <h5 className='client_name'>{role}</h5>
                <small className='client_review'>
                {review}
                </small>
  
          </article>
            </SwiperSlide>  
          })
        }
       

       
      </Swiper>
    </section>
  )
}

export default Experience