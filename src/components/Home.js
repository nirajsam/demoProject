
import { Carousel } from 'react-bootstrap';
import MyWork from './MyWork';
import About from './About';
import Contact from './Contact'
import c1 from '../../src/videos/c1.jpg'
import c2 from '../../src/videos/c2.jpg'
import c3 from '../../src/videos/c3.jpg'



function home() {
  return (
    <div style={{justifyContent:"center"}} className="home">
    <header ><div className="marquee text-center"><h2  >welcome to Niraj sam's official website</h2></div></header>
    <main>
    <div className="corosel" style={{justifyContent:"center"}}>
    <Carousel>
  <Carousel.Item interval={1000}>
  
    <img
      className=" w-100"
      src={c1}
      alt="First slide"
      height="500"
    />
    <Carousel.Caption>
      <h2 style={{color:"blue"}}>Hello...</h2>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="w-100"
      src={c2}
      alt="Third slide"
      height="500"
    />
    <Carousel.Caption>
      <h2 style={{color:"blue"}}>people!!!</h2>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src={c3}
      alt="Third slide"
      height="500"
    />
    <Carousel.Caption>
      <h2 style={{color:"blue"}}>...........</h2>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div><br/>
    </main>
    <div className="com">
    <About/>
  <MyWork/>
  <Contact/> 
  </div> 
    </div>
  );
}

export default home;