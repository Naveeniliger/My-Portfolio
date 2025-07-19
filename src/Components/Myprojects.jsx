import React from 'react'
import swiggy from '../assets/swiggy1.png'
import utube from '../assets/utube.png'
import netflix from '../assets/netflix1.png'

const Myprojects = () => {
  return (

    <div className='projectsection' id='projects'>
      <div className='myprojectsheader1'>
        <h1 className='myprojectsheader'>My Projects</h1>
      </div>

      <div className='project1'>
        <a target='_blank' href="http://swiggy-web-app.netlify.app/"><img src={swiggy} alt="" /></a>
        <div className='project1text'>
          <h2>Swiggy-like Food Ordering Web App</h2>
          <span>
            <ul>
              <li> Used Swiggy's real-time API to fetch restaurant data.</li>

              <li> Performance optimization: Filter top rated restaurents , searching, code-splitting.</li>

              <li> Front-end: ReactJS, HTML, CSS, React Router.</li>

              <li> State management: Redux Toolkit for building Cart.</li>
            </ul>
          </span>
        </div>
      </div>

      <br />

      <div className='project1'>
        <a target='_blank' href="http://my-net-flix-gpt.netlify.app/"><img src={netflix} alt="" /></a>
        <div className='project1text'>
          <h2>NetflixGPT Movie Suggestion Web App</h2>
          <span>
            <ul>
              <li> Used Google's AI model Gemini for movie suggestions</li>

              <li> Used Firebase for user sign-in/sign-up authentication.</li>

              <li> Performance optimization: design inspired by Netflix, responsive across all devices.</li>

              <li> Front-end: ReactJS, HTML, CSS, Redux Toolkit, React Router.</li>
            </ul>
          </span>
        </div>
      </div>

      <br />

      <div className='project1'>
        <a target='_blank' href="https://youtube-ver-1.netlify.app/"><img src={utube} alt="" /></a>
        <div className='project1text'>
          <h2>YouTube Clone Web App</h2>
          <span>
            <ul>
              <li> Used YouTube's real-time API to fetch videos.</li>

              <li> Performance optimization: search using debouncing, search data caching, suggestions like YouTube, dynamic pages.</li>

              <li> Front-end: ReactJS, HTML, CSS, Redux Toolkit, React Router.</li>
            </ul>
          </span>
        </div>
      </div>



    </div>


  )
}

export default Myprojects