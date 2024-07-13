import React from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import './index.css';

const projects = [
    { 
        id: 1,
        img: "https://www.sourcecodester.com/sites/default/files/images/oretnom23/public_page_0.png",
        name: "Efficient Vehicle Service Management and Reminder System",
        description: "Service Track is a comprehensive web application designed to streamline vehicle service management and ensure timely maintenance through an intuitive reminder system. With Service Track, users can effortlessly track service histories, schedule upcoming maintenance tasks, and receive automated reminders for service due dates, helping them maintain their vehicles in optimal condition.",
    },
    { 
        id: 2,
        img: "https://th.bing.com/th/id/OIP.U_q6jhlGpCn2gsTogcaargHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "E-Commerce Application",
        description: "Developed a dynamic and user-friendly e-commerce website aimed at providing a seamless shopping experience for customers. The website utilized modern web technologies to ensure responsiveness, performance, and security.",
    },
    { 
        id: 3,
        img: "https://i.ytimg.com/vi/uDzLxos0lNU/maxresdefault.jpg",
        name: " Emotion Based Music Recommendation System ",
        description: "Developed an innovative emotion-based music recommendation system aimed at enhancing user experience by providing personalized music suggestions based on their emotional state"
    },
    { 
        id: 4,
        img: "https://th.bing.com/th/id/OIP.5geN_z2sJG5f2xpA2_FP1AHaDt?w=344&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: " Real-Time Heart Disease Prediction ",
        description: "Developed a sophisticated heart disease prediction system utilizing machine learning (ML) techniques to analyse clinical data, aiming to forecast the likelihood of developing cardiovascular diseases (CVD) among patients"
    },
    { 
        id: 4,
        img: "https://th.bing.com/th/id/OIP.0zoUteg8Xu5KRbz6jZv8OwHaEc?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: " Portfolio",
        description: "The portfolio project in React.js is designed to present a professional showcase of your skills and accomplishments as a full-stack web developer"
    },
  
];

const Projects = () => {
    return (
        <div id='projects'>
                <h1 className='pro-heading'>Projects</h1>     <div className="projects-container">
            {projects.map(project => (
                <div key={project.id} className="project-card">
                    <img src={project.img} alt={project.name} className="project-image" />
                    <div className='project-description'>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className='icon-more'>
                             <FaArrowUpRightFromSquare />
                        </div>
                     </div>   
                </div>
            ))}
        </div>
    </div>
    );
};

export default Projects;
