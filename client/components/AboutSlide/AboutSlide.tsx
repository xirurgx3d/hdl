import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import {useState} from 'react';
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
  const [nav, setNav] = useState<any>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      useCSS: true
  };

  return (
      <section className="top-slider allstile aboutslide">
      
      </section>
  )
}

export default AboutSlider;