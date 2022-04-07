import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import {SetStateAction, useState} from 'react';
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = (): JSX.Element => {
  const [nav, setNav] = useState<SetStateAction<any>>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      useCSS: true
  };

  return (
    <>
      <section className="top-slider allstile aboutslide">
      <Slider className="slide  aboutslide" ref={slide => setNav(slide)} {...settings}>
          <img src="/assets/img/about-slider/img1.jpg" alt="middle slider" />
          <img src="/assets/img/about-slider/img2.jpg" alt="middle slider" />
          <img src="/assets/img/about-slider/img3.jpg" alt="middle slider" />
          <img src="/assets/img/about-slider/img4.jpg" alt="middle slider" />
          <img src="/assets/img/about-slider/img5.jpg" alt="middle slider" />
          <img src="/assets/img/about-slider/img6.jpg" alt="middle slider" />
          <img src="/assets/img/about-slider/img7.jpg" alt="middle slider" />
          <img src="/assets/img/about-slider/img8.jpg" alt="middle slider" />
        </Slider>
      </section>
    </>
  )
}

export default AboutSlider;