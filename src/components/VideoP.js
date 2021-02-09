import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import video from '../../src/videos/ekart_record.mp4'
import qvideo from '../../src/videos/quiz_record.mp4'
import car from '../../src/videos/car.mp4'

function VideoP(props) {
    const [state, setstate] = useState('')

    if(props.sel=='test'){
    return (
        <div className="row">
            
            <div className="col-lg-6 col-md-1 col-sm-1">
                <video width="100%" height="500" muted autoplay="true" loop controls>
                    <source src={qvideo} type="video/mp4"/>
                </video>        
            </div>
            <div className="col-lg-6 col-md-1 col-sm-1">
                <h4>about</h4>
                <p>This is subjective and objective online test website, it is made on Mern stack technology and deployed
                    on atlas, heroku and netlify.
                    In this website three login option given admin, teacher and student,
                    <b>student:</b> student can give subjective and objective tests whichever is available, 
                    see their results on his profile
                    <b>teacher:</b> He can add questions, check answers and see marks of all students
                    <b>admin:</b> He can see all users , verify them as student and teachers
                    <b>Link: </b> https://nirajsam-quizapp.netlify.app
                    </p>
                    <div className="center"><button onClick={e=>{return window.location.reload()}}>Back Home</button></div>
            </div>
        </div>
        
    )}else if(props.sel=='ekart'){
        return(
        <div className="row" style={{padding:"1%", marginBottom:"5%"}}>
            
            <div className="col-lg-6">
                <video width="100%" height="500" muted autoplay="true" loop controls>
                    <source src={video} type="video/mp4"/>
                </video>        
            </div>
            <div className="col-lg-6">
                <h4>about</h4>
                <p>This is ecommerce website made using Mern stack technology, two login options given
                    <b>seller:</b> add  edit, delete, see, products , see order of customers
                    <b>users:</b> see, order, add cart, rate, comment on prducts
                    </p> 
                    <div className="center"><button onClick={e=>{return window.location.reload()}}>Back Home</button></div>
            </div>
            
        </div>)
    }else if(props.sel=='car'){
        return(
        <div className="row" style={{padding:"1%", marginBottom:"5%"}}>
            
            <div className="col-lg-6">
                <video width="100%" height="500" muted autoplay="true" loop controls>
                    <source src={car} type="video/mp4"/>
                </video>        
            </div>
            <div className="col-lg-6">
                <h4>about</h4>
                <p>This is basic python game , i made this game using pygame liabrary of python.
                    </p> 
                    <div className="center"><button onClick={e=>{return window.location.reload()}}>Back Home</button></div>
            </div>
            
        </div>)}
}

export default VideoP
