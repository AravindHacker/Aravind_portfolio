import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_fop1osn', 
      'template_6p3ilc5', 
      formData,
      'C7bYhDjiNlLIvCYzQ'     
    ).then(
      (result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      },
      (error) => {
        alert('An error occurred, please try again.');
      }
    );
  };

  return (
    <div id='Contact' className='contact'> 
      <div className='contact-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm eager to start my professional journey and open to opportunities that allow me to leverage my skills in full-stack web development...</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src='https://logodix.com/logo/447066.png' alt="Email Icon" className='contact-icon'/><p>aravindmaloth@outlook.com</p>
            </div>
            <div className='contact-detail'>
              <img src='https://th.bing.com/th/id/OIP.LDeqKUslJ2__Sr-HkdQ2dwHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3' alt="Phone Icon" className='contact-icon'/><p>9392574857</p>
            </div>
            <div className='contact-detail'>
              <img src='https://th.bing.com/th/id/OIP.crD1AUYRH3ASje3kPEFs4wHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3' alt="Location Icon" className='contact-icon'/><p>India, Telangana</p>
            </div>
          </div>
        </div>
        <form className='contact-right' onSubmit={handleSubmit}>
          <label htmlFor='name'>Your Name</label>
          <input 
            type='text' 
            placeholder='Enter your name' 
            name="name" 
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor='email'>Your Email</label>
          <input 
            type='email' 
            placeholder='Enter your email' 
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor='message'>Write your message here</label>
          <textarea 
            name='message' 
            rows='8' 
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
