
import React, { Component } from 'react'
import video from '../../src/videos/ekart_record.mp4'
import qvideo from '../../src/videos/quiz_record.mp4'
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
        console.log(this.state.selectVideo)
        if(this.state.selectVideo!=""){
            return <VideoP sel={this.state.selectVideo}/>
        }
        return (
            <div className="work ">
            <div>
            <div className="row" style={{paddingLeft:"10%",paddingRight:"10%"}}>
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
                        <source src={video} type="video/mp4"/>
                    </video>
                    <p><b>Whats app clone</b></p>
                    <button className="btn btn-primary" onClick={e=>this.sVideo("wp")} >know more</button>
                </div>
            </div>
            </div>
                
                
            </div>
        )
        
    }
}

