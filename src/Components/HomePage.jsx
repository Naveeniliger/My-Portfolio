import React from 'react'
import img from '../assets/myimg.jpg'
import git from '../assets/social.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import x from '../assets/twitter.png'
import dwonarrow from '../assets/down-arrow.gif'


const HomePage = () => {
    
  return (
    <div className='homepage'>

    <div className='frontendtext'>
        <h1>Bringing ideas to life through clean code and captivating design.</h1>
        <p>I'm a Front-End Developer skilled in crafting seamless, responsive, and engaging web experiences.
            I design and develop responsive, user-centric web experiences that feel as good as they look.</p>
        <div className='home2'>
            <a href="#contact"><h3>➤  Contact </h3></a>
            <a target='_blank'rel='noopener noreferrer' href="https://drive.google.com/file/d/1mpEmlRAW6uELCel1KPESOptcFjLuxnxp/view?usp=sharing"><h3>My Resume </h3></a>
        </div>
        
    </div>



    <div className='myimg'>

        <img className='img' src={img} alt="" />
        

    </div>



    <div className='connections'>
            <img className='arrow' src={dwonarrow} alt="" />
        <a target='_blank' href="https://github.com/Naveeniliger"><img className='connects' src={git} alt="" /></a>
        <a target='_blank' href="https://www.linkedin.com/in/naveen-iliger-0328b1259"><img className='connects' src={linkedin} alt="" /></a>
        <a target='_blank' href="https://www.instagram.com/naveen_iliger/"><img className='connects' src={instagram} alt="" /></a>
        <a target='_blank' href="https://twitter.com/Naveeniliger1"><img className='connects' src={x} alt="" /></a>
      

    </div>


    </div>
  )
}

export default HomePage