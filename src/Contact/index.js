import './styles.css';
import Card from '../Card';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useParams } from "react-router-dom";



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
  let params = useParams();

  return (
    <div>
        
      <Container>
        <Row >
          <Col>
          <h1>Contact Us {params.productId}</h1>
          </Col>
        </Row>
      </Container>
      </div>
  );
}

export default Home;
