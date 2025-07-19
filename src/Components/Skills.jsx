import React from 'react'
import skills from '../assets/multitasking.gif'
import html from '../assets/htmllogo.png'
import css from '../assets/csslogo.png'
import js from '../assets/jslogo.png'
import react from '../assets/reactlogo.png'
import tailwind from '../assets/tailwindlogo.png'
import github from '../assets/githublogo.png'

const Skills = () => {
    return (
        <div id='skills'>
            <div className='header'>
                <h1 className='skills'>My Skills</h1>
            </div>


            <div className='section1flex'>
                <div className='section1'>
                    <h1>front-end</h1>
                    <p>I'm actively learning the core technologies of front-end development — HTML, CSS, and JavaScript — to create responsive and interactive web experiences.</p>
                </div>


                <div>
                    <img className='skillsimg' src={skills} alt="" />
                </div>

                <div className='section3'>
                    <h1>Libraries & Frameworks</h1>
                    <p>I'm also learning the Libraries, Frameworks and tools like : React.Js, React-router, Redux-ToolKit , Tailwind CSS, git and github</p>
                </div>
            </div>

            <div className='skillicons'>
                <img className='logos' src={html} alt="" /> 
                <img className='logos' src={css} alt="" />
                <img className='logos' src={js} alt="" />
                <img className='logos' src={react} alt="" />
                <img className='logos' src={tailwind} alt="" />
                <img className='logos' src={github} alt="" />

            </div>
        </div>
    )
}

export default Skills