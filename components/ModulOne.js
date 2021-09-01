import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Swiper.module.css";

const ModulOne = () => {
 return (
  <Carousel>
   <Carousel.Item interval={5000}>
    <img
     className="carouselImg d-block h-30 w-100"
     src="https://images.byub.org/82f5e5fd-0d68-426f-b669-99b2e3593001/1280x720"
     alt="First slide"
    />
    <Carousel.Caption>
     <h3>First slide label</h3>
     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item interval={5000}>
    <img
     className="carouselImg d-block h-30 w-100"
     src="https://images.designtrends.com/wp-content/uploads/2016/01/04085621/A-Cold-Sunset-Background.jpg"
     alt="Second slide"
    />
    <Carousel.Caption>
     <h3>Second slide label</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item interval={5000}>
    <img
     className="carouselImg d-block h-30 w-100"
     src="https://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Buenos-Aires-.jpg"
     alt="Third slide"
    />
    <Carousel.Caption>
     <h3>Third slide label</h3>
     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
   </Carousel.Item>
  </Carousel>
 );
};

export default ModulOne;
