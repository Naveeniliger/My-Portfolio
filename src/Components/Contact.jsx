import React from 'react'
import phone from '../assets/phone-solid.svg'
import mail from '../assets/envelope-solid.svg'
import git from '../assets/social.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'


const Contact = () => {




    return (

        <div id='contact' className='contact'>


            <div className='contactheader'>
                <h1 className='glow-text'>Get In Touch</h1>
            </div>

            <div className='section'>
                <div className='contactsection'>

                    <div className='info'>

                        <img src={phone} alt="" />
                        <h2> +91 9008841667</h2>

                    </div>
                    <div className='info'>
                        <img src={mail} alt="" />
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=naveeniligerm@gmail.com" target='_blank'><h2>naveeniligerm@gmail.com</h2></a>
                    </div>

                    <div className='info'>
                        <a href="https://github.com/Naveeniliger"><img className='logos' src={git} alt="" /></a>
                        <a href="https://www.linkedin.com/in/naveen-iliger-0328b1259"><img className='logos' src={linkedin} alt="" /></a>
                        <a href="https://www.instagram.com/naveen_iliger/"><img className='logos' src={instagram} alt="" /></a>
                    </div>

                </div>


                <div className='formbox'>
                    <p>Whether you're planning to build a new website or enhance your existing one, I'm here to help you every step of the way.</p>

                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="c4c44582-e2f8-4ff2-a0af-dd349f8c9df6"></input>
                        <input type="text" name='name' placeholder='Enter Your Name' />
                        <input type="email" name='email' placeholder='Enter Your Email Address' />
                        <input type="text" name='message' placeholder='Enter Your Thoughts...' />
                        <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                        <button type='submit' className='send-btn'>➤  Send message</button>
                    </form>

                </div>
            </div>


        </div>
    )
}

export default Contact