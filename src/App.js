
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter,Route,Link, Redirect} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import MyWork from './components/MyWork';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import profile from '../src/videos/sam.jpg'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <img src={profile}  width="30" height="30" alt="" style={{borderRadius:"50%",transform: "rotate(-90deg)"}}/>
      <span className="home"><Link to="/home" id="link" ><b className="text-left">Home</b></Link></span>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id="lk"><Link to="/about" id="link" >About Me</Link></Nav.Link>
          <Nav.Link id="lk"><Link to="/mywork" id="link">My Work</Link></Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          
          <Nav.Link id="lk"><Link to="/contact" id="link">contact us</Link>
             </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    <footer className="bg-dark footer">
      <div class="d-flex justify-content-between mb-3">
      <div class="p-2">&copy;  copyright Niraj sam</div>
      <div class="p-2"><a href="https://www.facebook.com/profile.php?id=100009016844805"><Facebook style={{fontSize:"20px",color:"white"}}/></a>
      &nbsp;<a href="https://www.instagram.com/niraj.sam/"><Instagram style={{fontSize:"20px",color:"white"}}/></a>
      &nbsp;<a href="https://www.linkedin.com/in/niraj-kumar-7625281b8/"><Linkedin style={{fontSize:"20px",color:"white"}}/></a></div>
      <div class="p-2">term and conditions</div>
      </div>
      
    </footer>
    </div>
    <div className="content">
              {/* <Route path="/upload" component={FileUpload}/> */}
              <Route path={"/home"}component={Home}/>
              <Route path="/" exact={true}><Redirect to="/home"></Redirect></Route>
              <Route path={"/contact"}component={Contact}/>
              <Route path={"/about"}component={About}/>
              <Route path={"/mywork"}component={MyWork}/> 
    </div>
    
    </BrowserRouter>
  );
}

export default App;
