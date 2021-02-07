import {React} from 'react'
import video from '../../public

function MyWork() {
    
    return (
        <div className="work ">
        <div>
        <div className="row" style={{paddingLeft:"10%",paddingRight:"10%"}}>
            <div className="col-lg-4 col-md-6 col-sm-1"  style={{marginTop:"5%"}}>
                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4"/>
                </video>
                <p>subjective and objective test project</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-1" style={{marginTop:"5%"}}>
                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4"/>
                </video>
                <p>Ekart project with paytm payment getway</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-1" style={{marginTop:"5%"}}>
                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4"/>
                </video>
                <p>Whats app clone</p>
            </div>
        </div>
        </div>
            
            
        </div>
    )
}

export default MyWork
