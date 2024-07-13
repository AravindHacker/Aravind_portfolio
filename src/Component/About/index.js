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
                        <p> I'm  passionate full-stack web developer with a keen interest in building
                                dynamic and responsive web pages. I recently completed an internship where I gained valuable 
                                experience in both front-end and back-end development.</p>
                        <p className='intership-context'> My internship at Innovate Interns provided me with hands-on experience in developing full-stack 
                                web applications. I collaborated with cross-functional teams to design, develop, and deploy 
                                features that improved user experience and functionality.  </p>
                    </div>
                    <div className='about-left'>
                    <img src={profile2} alt='profile' className='profile-pic-img' />
                     </div>
                </div>
                   <div id="skills" className='Skill-section'>
                    <h1 className='Skill-header'>My Skills</h1>
                        <div className='about-skills'>
                            <div className='about-skill'><p>HTML </p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p>CSS</p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p>JavaScript</p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p>React Js</p><hr style={{width:"75%"}} /></div>
                            <div className='about-skill'><p>Node js</p><hr style={{width:"65%"}} /></div>
                            <div className='about-skill'><p>Express js</p><hr style={{width:"50%"}} /></div>
                            <div className='about-skill'><p>Python</p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p>SQL</p><hr style={{width:"80%"}} /></div>
                            <div className='about-skill'><p>AWS</p><hr style={{width:"50%"}} /></div>


                        </div>
                   </div>
               
            </div>
            
        </div>
    )
}
export default About;