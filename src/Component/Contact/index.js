
import React from 'react'

import './index.css'

 const Contact = () => {
  return (
    <div id='Contact' className='contact'> 
       <div className='contact-title'>
            <h1>Get in touch</h1>

       </div>
       <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currently available to take new projects, so feel free to send me a message about anything that yout want me to work on .you can cantact anytime. </p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src='https://logodix.com/logo/447066.png' alt=""  className='contact-icon'/><p>aravindmaloth@outlook.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src='https://th.bing.com/th/id/OIP.LDeqKUslJ2__Sr-HkdQ2dwHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3' alt='' className='contact-icon' /><p>9392574857</p>
                    </div>
                    <div className='contact-detail'>
                        <img src=' https://th.bing.com/th/id/OIP.crD1AUYRH3ASje3kPEFs4wHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3' alt='' className='contact-icon'/><p>India,Telangana</p>
                    </div>
                    
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name="name" />
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor=''>Write your message here</label>
                <textarea name='message' rows='8' placeholder='Enter your message ' ></textarea>
                <buttom type='submit' className='contact-submit'>Submit now</buttom>
           </form>
       </div>
         
    </div>
  )
}
export default Contact;
