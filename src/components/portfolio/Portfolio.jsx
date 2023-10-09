import React from 'react';
import './portfolio.css';
import portfoiio1 from "../../assets/portfolio1.png";
import portfoiio2 from "../../assets/portfolio2.png";
import portfoiio3 from "../../assets/portfolio3.png";
import portfoiio4 from "../../assets/portfolio4.png";
import portfoiio5 from "../../assets/portfolio5.jpeg";
import portfoiio6 from "../../assets/portfolio6.png";
import SRS from "../../assets/SRS.pdf";

const data=[
  {
    id:1,
    image:portfoiio1,
    description:"Created using ReactJs and deployed via firebase to the cloud",
    title:"Netflix Clone",
    demo:"https://netflix-clone-2ec38.web.app/"
  },
  {
    id:2,
    image:portfoiio2,
    description:"SpringBoot backend with SQL driver won Dell 2021 Hackathon",
    title:"Chat Bot Assist",
    demo:"https://github.com/manavendrasen/Virtual-Assistant-Team-2-Dell-H2H-Backend"
  },
  {
    id:3,
    image:portfoiio3,
    description:"Created Using ReactJS and working on improving the same",
    title:"Portfolio Website",
    demo:"#"
  },
  {
    id:4,
    image:portfoiio4,
    description:"Web3 app created using Solidity,NextJs with all SE documents intact",
    title:"NFT Marketplace",
    demo:SRS
  },
  {
    id:5,
    image:portfoiio5,
    description:"Python Script making use of the SMTP,Pandas module deployed in the cloud",
    title:"Birthday Wisher",
    demo:"https://x.com/Paddy57687398/status/1708751596119888239?s=20"
  },
  {
    id:6,
    image:portfoiio6,
    description:"Created Using Flutter and Dart",
    title:"Meals App",
    demo:"https://www.linkedin.com/posts/pradumn-garg-0894b81b4_flutter-dart-android-activity-6847860443768348672-94q1?utm_source=share&utm_medium=member_desktop"
  },
]


function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className='container portfolio_container'>

        {
          data.map(({id,image,title,demo,description})=>{
            return (<article key={id} className='portfolio_item'>

            <div className='portfolio_item_image'>
              <img src={image} alt="project Image"/>
            </div>
            <h3>{title}</h3>
            <small>{description}</small>
            <div className='portfolio_item_cta'>
            {id === 4 ? (
                  <a href={demo} className='btn download' target='_blank' download>
                    Check it out
                  </a>
                ) : (
                  <a href={demo} className='btn' target='_blank'>
                    Check it out!!
                  </a>
                )}
            </div>
  
          </article>)
          })
        }

      </div>
    </section>
  )
}

export default Portfolio