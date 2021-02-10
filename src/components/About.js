import React from 'react'

import resume from '../../src/videos/Resume_Niraj-compressed.pdf'
import profile from '../../src/videos/sam.jpg'


function About() {
    return (
        <div className="about center">
            
        <img src={profile} className="profile" alt=""   style={{borderRadius:"50%",transform: "rotate(-90deg)"}}/>
        <div className="container">
            
            <div className="jumbotron text-center">
            <h4 className="text-center"><b>Niraj Kumar Modi</b></h4>
                <h5>I'm a Full stack Developer from dhanbad, India.
                Currently working on Infosys as Mern stack developer.
                I love to work in UI effects, animations and creating intuitive, dynamic user experiences.</h5>
                <b>I make websites which is :-</b><br/>
                1.responsive &nbsp; 2.Modern &nbsp; 3.relevent content &nbsp; 4.optimized &nbsp; 5. high speed &nbsp; 6.scalable and secure <br/>
                <p>Here you can refer to my resume for more information about me</p>
                <a href={resume} download="resume">
                download Resume
                </a>
                
                
            </div>
            
        </div>
        </div>
    )
}

export default About
