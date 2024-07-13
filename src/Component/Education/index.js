
import React from 'react'
import './index.css'

 const Education = () => {
  return (
    <div className='education-cont'>
        <h2 className='edu-heading'>Education</h2>
        <div className='timeline-items'>
            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    <div className='timeline-date'>2017-18</div>
                    <div className='timeline-content'>
                        <h3>High School</h3>
                        <p>Ashrama High School,Sarvaram,Bhadhradri Kothagudem,Telangana.CGPA:8.3</p>
                    </div>
            </div>
            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    <div className='timeline-date'>2018-20</div>
                    <div className='timeline-content'>
                        <h3>Intermediate</h3>
                        <p>Netaji Jr College,Palvoncha,Bhadhradri Kothagudem,Telangana.Marks:897</p>
                    </div>
            </div>
            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    <div className='timeline-date'>2020-24</div>
                    <div className='timeline-content'>
                        <h3>Bachelor of Technology</h3>
                        <p>Jawaharlal nehru technological university, hyderabad ,Telangana.CGPA:7.92</p>
                    </div>
            </div>
            
        </div>
    </div>
  )
}
export default Education;
