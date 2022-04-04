import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import {SetStateAction, useState} from 'react';
import "slick-carousel/slick/slick-theme.css";

const AboutSliders = (): JSX.Element => {
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
          <img src="/assets/img/slide2/img2.jpg" alt="middle slider" />
          <img src="/assets/img/slide2/img3.jpg" alt="middle slider" />
          <img src="/assets/img/slide2/img4.jpg" alt="middle slider" />
          <img src="/assets/img/slide2/img1.jpg" alt="middle slider" /> 
        </Slider> 
      </section>
    </>
  )
}

export default AboutSliders