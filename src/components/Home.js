import react from 'react';
import { Button, Navbar, Nav,Container,NavDropdown,Carousel } from 'react-bootstrap';



function home() {
  return (
    <div style={{justifyContent:"center"}}>
    <header ><h2 className="center" ><marquee>welcome to Niraj sam's official website</marquee></h2></header>
    <main>
    <div className="corosel" style={{justifyContent:"center"}}>
    <Carousel>
  <Carousel.Item interval={1000}>
  
    <img
      className=" w-100"
      src="https://www.forecasttrendz.com/images/sample/portfolio12-big.jpg"
      alt="First slide"
      height="500"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="w-100"
      src="https://i.ytimg.com/vi/dtsrVjMG_nU/maxresdefault.jpg"
      alt="Third slide"
      height="500"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://media.gettyimages.com/photos/business-concept-decide-commit-focus-success-wood-block-picture-id1201418769?s=612x612"
      alt="Third slide"
      height="500"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    </main>
    
    </div>
  );
}

export default home;