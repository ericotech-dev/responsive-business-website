import React from 'react'
import  '../Styles/About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <p>At Thompson Legacy, we're passionate about redefining the guest experience in the ever-evolving
             world of hospitality, with a specialized focus on the Airbnb platform. With the rise of the sharing
             economy, we recognized a need for expert guidance and innovative solutions to help hosts maximize
             their potential and stand out in a competitive market.
             </p>
            <p>Our team of seasoned consultants provide  personalized Airbnb hosting solutions. Whether you're
             optimizing listings or starting fresh, we're here to help you every step of the way. What sets us
             apart is our personalized approach to hospitality consulting. 
            </p>
            <p>Our strength lies in grasping your
             distinct requirements, delivering thorough evaluations, refined plans, and continuous assistance,
             exceeding anticipated outcomes.
             </p>
        </div>
    </div>
  )
}

export default About