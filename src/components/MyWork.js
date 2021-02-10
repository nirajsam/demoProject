
import React, { Component } from 'react'
import { Github } from 'react-bootstrap-icons';
import video from '../../src/videos/ekart_record.mp4'
import qvideo from '../../src/videos/quiz_record.mp4'
import car from '../../src/videos/car.mp4'
import VideoP from './VideoP';


export default class MyWork extends Component {
    constructor(){
        super()
        this.state={
            selectVideo:""
        }
    }
    sVideo =(vid)=>{
        this.setState({selectVideo:vid})
    }
    render() {
        
        if(this.state.selectVideo!==""){
            return (
                <div>
                <div className="text-right"><button className="btn btn-success" onClick={e=>{return this.setState({selectVideo:''})}}>Back Home</button></div>
            <VideoP sel={this.state.selectVideo}/>
            </div>)
        }
        return (
            <div className="work ">
            <div>
                <h4 className="text-center" style={{color:"white"}}>MY PROJECTS</h4>
            <div className="row" style={{paddingLeft:"8%",paddingRight:"10%"}}>
                <div className="col-lg-4 col-md-6 col-sm-1"  style={{marginTop:"5%",border:"2px black"}}>
                    <video width="320" height="240" muted autoplay="true" loop>
                        <source src={qvideo} type="video/mp4"/>
                    </video>
                    <p><b>subjective and objective test project</b></p>
                    <button className="btn btn-primary" onClick={e=>this.sVideo("test")}>know more</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-1" style={{marginTop:"5%"}}>
                    <video width="320" height="240" muted autoplay="true" loop >
                        <source src={video} type="video/mp4"/>
                    </video>
                    <p><b>Ekart project with paytm payment getway</b></p>
                    <button className="btn btn-primary" onClick={e=>this.sVideo("ekart")} >know more</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-1" style={{marginTop:"5%"}}>
                    <video width="320" height="240" muted autoplay="true" loop>
                        <source src={car} type="video/mp4"/>
                    </video>
                    <p><b>basic car game</b></p>
                    <button className="btn btn-primary" onClick={e=>this.sVideo("car")} >know more</button>
                </div>
            </div><br/><br/>
            <div className="text-center">
            <a style={{color:"blue"}}  href="https://github.com/nirajsam"><b><Github width="40px" height="40px"/> visit my github page for all projects repository</b></a>
            </div>
            </div>
                
                
            </div>
        )
        
    }
}

