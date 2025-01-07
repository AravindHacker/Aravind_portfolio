import profile2 from '../profile/profile2.jpeg';
import './index.css'

const About=()=>{
    return(
        <div id='about' className='about-cont'>
            <div className='about-title'>
                <h1>About <span>Me</span></h1>
            </div>
            <div className='about-section'>
               
                <div className='about-right-side'>
                    <div className='about-para'>
                        <p>
                             I am a passionate full-stack web developer with a knack for building innovative, user-friendly web applications. With expertise in technologies like HTML,CSS,JavaScript,React.js, Node.js,Express Js, MySQL,MongoDB ,Python and AWS ,  I thrive on creating solutions that simplify complex processes and provide exceptional user experiences. My journey in software development has been fueled by curiosity, continuous learning, and a deep love for coding.
                        </p>
                        <p>
                             Skills and Interests I have hands-on experience in frontend development using modern frameworks, backend API development, and database management. Beyond coding, I enjoy solving algorithmic challenges and optimizing solutions for performance and scalability. I believe in the power of collaboration and am always excited to work on projects that make a difference.
                        </p>
                        {/* <p className='intership-context'> 
                            My internship at Innovate Interns provided me with hands-on experience in developing full-stack 
                            web applications. I collaborated with cross-functional teams to design, develop, and deploy 
                            features that improved user experience and functionality.
                         </p> */}
                    </div>
                    <div className='about-left'>
                    <img src={profile2} alt='profile' className='profile-pic-img' />
                     </div>
                </div>
                   <div id="skills" className='Skill-section'>
                    <h1 className='Skill-header'><span>My</span> Skills</h1>
                        <div className='about-skills'>
                            <div className='about-skill'><p><strong>HTML </strong></p><hr style={{width:"90%"}} /></div>
                            <div className='about-skill'><p><strong>CSS</strong></p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p><strong>JavaScript</strong></p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p><strong>React Js</strong></p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p><strong>Node js</strong></p><hr style={{width:"75%"}} /></div>
                            <div className='about-skill'><p><strong>Express js</strong></p><hr style={{width:"75%"}} /></div>
                            <div className='about-skill'><p><strong>Python</strong></p><hr style={{width:"70%"}} /></div>
                            <div className='about-skill'><p><strong>SQL</strong></p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p><strong>AWS</strong></p><hr style={{width:"50%"}} /></div>


                        </div>
                   </div>
               
            </div>
            
        </div>
    )
}
export default About;