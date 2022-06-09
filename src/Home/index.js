import './styles.css';
import Card from '../Card';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Home() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };

  return (
    <div>
        <Slider {...settings}>
        <div>
          <div className='imageCarousel' style={{ backgroundImage: "url(https://www.fitfatherproject.com/wp-content/uploads/2019/06/muscle-building-workout.jpg)" }}></div>
        </div>
        <div>
          <div className='imageCarousel' style={{ backgroundImage: "url(https://generationiron.com/wp-content/uploads/2022/01/header.jpg)" }}></div>
        </div>
        <div>
          <div className='imageCarousel' style={{ backgroundImage: "url(https://posts.avatarnutrition.com/wp-content/uploads/2017/10/Eat.-Lift.-Rest.-The-3-Rules-for-Muscle-Gain.-1024x536.jpg)" }}></div>
        </div>
        <div>
          <div className='imageCarousel' style={{ backgroundImage: "url(https://miro.medium.com/max/1400/1*xk4zmUpGTcs3HpevFU9QgQ.jpeg)" }}></div>
        </div>
      </Slider>
      <Container>
        <Row >
          <Col>
          <h1>Our Products</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Card image="https://m.media-amazon.com/images/I/81E8gs3rGwL._AC_SL1500_.jpg"
                  title="Protein Strawberry " 
                  description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  price="25$"
                  button="More Details"/>
          </Col>
          <Col>
            <Card image="https://c.scdn.gr/images/sku_main_images/008298/8298068/20201001112400_optimum_nutrition_100_whey_gold_standard_2273gr_vanilla_ice_cream.jpeg"
                  title="Protein Vanilla" 
                  description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  price="25$"
                  button="More Details"/>
          </Col>
          <Col>
            <Card image="https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFVTDZ5OXEyZUwuX0FDX1NMMTUwMF8uanBn.jpg"
                  title="Protein Chocolate" 
                  description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  price="25$"
                  button="More Details"/>
          </Col>
        </Row>
      </Container>
      </div>
  );
}

export default Home;
