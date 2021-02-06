
import React, {useEffect, useState,useRef} from 'react';
import { Switch } from 'react-router-dom';

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName]=useState('');
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);
    // const [disabled, setDisabled] = useState(true)
    const firstRender = useRef(true)
    

      const formValidation = () => {
        if (name === "") {
          setError('Name cant be blank!')
          return true
        } else {
          setError(null)
          return false
        }
      }
    return (
        <div className="contact text-center" style={{color:"white"}}>
           <h1>Contact</h1>
           <h5 style={{color:"grey"}}>have a question or want to work together??</h5><br/>
           <div className="container">
           <form className="query">
                    
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
                    name="query"
                    value={query}
                    placeholder="Your Message"
                    onChange={e => setQuery(e.target.value)}
                    required>
                    </textarea>
                </label><br/>
      <button className="btn btn-primary">Submit</button>
    </form>
    </div>
        </div>
    )
}

export default Contact
