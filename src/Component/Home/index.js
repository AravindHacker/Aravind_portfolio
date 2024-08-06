import TypedText from '../Skills';
import profile1 from '../profile/profile1.jpeg';
import './index.css';
import React from 'react';

const Home = () => {
  return (
    <div id='home' className=''>
      <div className='home-cont'>
        <img src={profile1} alt='profile_img' className='profile-img' />
        <div className='home-info'>
          <h1>Hello,</h1>
          <h1>I'm Aravind Maloth, And</h1>
          <h1><span><TypedText/></span></h1>
        </div>
      </div>
      <div className='home-actions'>
        <div className='home-connect'>Connect with me</div>
        <div className='home-resume'>
        <a 
            href={`${process.env.PUBLIC_URL}/Aravind_Maloth_Resume519.pdf`} 
            target='_blank' 
            rel='noopener noreferrer'
            className='resume-link'
          >
           My Resume
         </a>   
        </div>
      </div>
    </div>
  );
}

export default Home;
