import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import TypedText from '../Skills';
// import profile1 from '../profile/profile1.jpeg';
import profile3 from '../profile/profile3.png';

import './index.css';

const Home = () => {
  
  return (
    <div id='home' className=''>
      <div className='home-cont'>
        <img src={profile3} alt='profile_img' className='profile-img' />
        <div className='home-info'>
          <h1>Hello,</h1>
          <h1>I'm Aravind Maloth, And</h1>
          <h1><span><TypedText/></span></h1>
        </div>
      </div>
      <div className='home-actions'>

        <div className='home-connect'>
          <Link 
              to='Contact' 
              smooth={true} 
              duration={500} 
              className='connect-link'
            >
              Connect With Me
            </Link>
        </div>

        <div className='home-resume'>
        <a 
            href={`${process.env.PUBLIC_URL}/ARAVIND_MALOTH (2024).pdf`} 
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
