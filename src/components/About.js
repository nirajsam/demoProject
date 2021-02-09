import React from 'react'
import { Facebook, Hexagon, DiResponsive} from 'react-bootstrap-icons';
import resume from '../../src/videos/Resume_Niraj-compressed.pdf'


function About() {
    return (
        <div className="about center">
    
        <img src="https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612"  width="20%" height="35%" style={{borderRadius:"50%"}}/>
        <div className="container">
            <h4 className="text-center">Who is this guy?</h4>
            <div className="jumbotron text-center">
                <h3>I'm a Full stack Developer from dhanbad in Jharkhand, India.
                Currently working on Infosys.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</h3>
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
