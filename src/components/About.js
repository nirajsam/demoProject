import React from 'react'
import { Facebook, Hexagon, DiResponsive} from 'react-bootstrap-icons';
import resume from '../../src/videos/Resume_Niraj-compressed.pdf'
import profile from '../../src/videos/sam.jpg'


function About() {
    return (
        <div className="about center">
    
        <img src={profile} className="profile"  style={{borderRadius:"50%",transform: "rotate(-90deg)"}}/>
        <div className="container">
            <h4 className="text-center"><b>Niraj Kumar Modi</b></h4>
            <div className="jumbotron text-center">
                <h4>I'm a Full stack Developer from dhanbad in Jharkhand, India.
                Currently working on Infosys.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</h4>
                <p>Here you can refer to my resume for more information about me</p>
                <a href={resume} download="resume">
                download
                </a>
                
                
            </div>
            
        </div>
        </div>
    )
}

export default About
