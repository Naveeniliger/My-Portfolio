import React from 'react'
import mygif from '../assets/letter-n.gif'




const NavBar = () => {
    return (
        <div className='navbar'>

            <div className='name'>
                <img src={mygif} alt="" /><h1>aveen</h1>
            </div>
            <div className='navbarlists'>
                <a href="#"><h4>Home</h4></a>
                <a href="#contact"><h4>About Me</h4></a>
                <a href="#skills"><h4>Skills</h4></a>
                <a href="#projects"><h4>My Projects</h4></a>
                
            </div>

            <div className='connect'>
                <h4>Connect With Me </h4>
            </div>

        </div>
    )
}

export default NavBar