import './styles.scss';
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
      </div>
  );
}

export default Home;
