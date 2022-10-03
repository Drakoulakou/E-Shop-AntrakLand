import './styles.scss';
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
    <div className='slick-slider-wrapper'>
        <Slider {...settings}>
        <div>
          <div className='imageCarousel' style={{ backgroundImage: "url(https://www.popsci.com/uploads/2022/03/02/aviv-rachmadian-7F7kEHj72MQ-unsplash-scaled.jpg?auto=webp)" }}></div>
        </div>
        <div>
          <div className='imageCarousel' style={{ backgroundImage: "url(https://assets.teenvogue.com/photos/5a860a2d3c63d553492aabf6/16:9/w_1280,c_limit/GettyImages-845094604.jpg)" }}></div>
        </div>
        <div>
          <div className='imageCarousel' style={{ backgroundImage: "url(https://f.hubspotusercontent10.net/hub/491011/hubfs/FT_Electronics.jpg?length=2000&name=FT_Electronics.jpg)" }}></div>
        </div>
        <div>
          <div className='imageCarousel' style={{ backgroundImage: "url(https://static.independent.co.uk/2022/01/28/16/Best%20online%20clothes%20shops%20and%20brands%20Indybest%20copy.jpg?quality=75&width=982&height=726&auto=webp)" }}></div>
        </div>
      </Slider>
      </div>
  );
}

export default Home;
