import React from 'react';
import './index.css'; 

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social'>
        <a 
          href='https://www.linkedin.com/in/aravind-maloth-a88381278' 
          target='_blank' 
          rel='noopener noreferrer'
          aria-label="LinkedIn"
        >
          <img 
            src='https://cdn-icons-png.flaticon.com/128/3991/3991775.png' 
            alt='LinkedIn' 
            className='linkdin'
          />
        </a>
        
        <a 
          href='https://github.com/AravindHacker' 
          target='_blank' 
          rel='noopener noreferrer'
          aria-label="GitHub"
        >
          <img 
            src='https://cdn-icons-png.flaticon.com/128/25/25657.png' 
            alt='GitHub' 
            className='github'
          />
        </a>
      </div>
      <div className='footer-info'>
          <p>&copy; {new Date().getFullYear()} Aravind Maloth. All rights reserved.</p>
          <p>Built with ❤️ using React.js</p>
        </div>

    </footer>
  );
};

export default Footer;
