import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useState } from 'react';
import "slick-carousel/slick/slick-theme.css";

const MainSlider = (): JSX.Element => {
  const [nav1, setNav1] = useState<any>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section className="top-slider">
        <Slider className="slide headslide" ref={slide => setNav1(slide)} {...settings}>
          <img className="slide__image" src="/assets/img/main-banner/1.jpg" alt="slide-1" />
          <img className="slide__image" src="/assets/img/main-banner/2.jpg" alt="slide-1" />
          <img className="slide__image" src="/assets/img/main-banner/3.jpg" alt="slide-1" />
          <img className="slide__image" src="/assets/img/main-banner/4.png" alt="slide-1" />
          <img className="slide__image" src="/assets/img/main-banner/5.jpg" alt="slide-1" />
        </Slider>
      </section>
    </>
  )
}

export default MainSlider;