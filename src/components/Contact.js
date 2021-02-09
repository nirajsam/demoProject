
import React, {useEffect, useState,useRef} from 'react';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import { Switch } from 'react-router-dom';
import emailjs from 'emailjs-com'

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName]=useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [mail, setMail] = useState('')
    // const [disabled, setDisabled] = useState(true)
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('gmail', 'template_pz4qfec', e.target, 'user_HYImqyNA2H0p8YsBrLgBT')
        .then((result) => {
            console.log(result.text);
            setMail('success')
        }, (error) => {
            console.log(error.text);
            setMail('error')
        });
        setEmail('')
        setMessage('')
        setName('')
        
    }

    return (
        <div className="contact text-center" style={{color:"white"}}>
           <h1>Contact Me</h1>
           <div className="row">
             <div className="col-lg-6">
               <p>Hello....</p>
              <p>Do you speak Hindi  ??... It's ok if you don't, I speak English too</p>
              <Facebook/>&nbsp; &nbsp;<span>Like me on facebook</span><br/><br/>
              <Instagram/>&nbsp; &nbsp; <span>Follow me on Instagram</span><br/><br/>
              <Linkedin/>&nbsp; &nbsp;<span>connect me on linkedin</span><br/><br/>
             </div>
             <div className="col-lg-6">
                <h5 style={{color:"grey"}}>have a question or want to work together??</h5><br/>
                <div className="container">
                <form className="query" onSubmit={sendEmail}>
                          
                      <label>
                          <input
                          name="email"
                          type="email"
                          value={email}
                          placeholder="Enter Your Email"
                          onChange={e => setEmail(e.target.value)}
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          required 
                          />
                      </label>
                      <br/>
                      <label>
                          <input
                          name="name"
                          type="name"
                          value={name}
                          placeholder="Enter Name"
                          onChange={e => setName(e.target.value)}
                          minLength="3"
                          maxLength="10"
                          required />
                      </label><br/>

                      <label>
                          <textarea
                          name="message"
                          value={message}
                          placeholder="Your Message"
                          onChange={e => setMessage(e.target.value)}
                          required>
                          </textarea>
                      </label><br/>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
          <h3 className="text-center">{(mail=='success')?<b className="text-success">Successfully sent</b>:(mail=='error')?<b className="text-danger">Mail errror</b>:''}</h3>
          </div>
             </div>
           </div>
           
           
        </div>
    )
}

export default Contact
