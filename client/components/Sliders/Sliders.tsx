import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {useState} from 'react';
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const [nav1, setNav1] = useState<any>();
  const [size, setSize] = useState([0, 0]);

  function updateSize() {
    setSize([window.innerWidth, window.innerHeight]);
  }

  //onInit: window.resize https://github.com/kenwheeler/slick/issues/235
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    onInit : () => {
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }
  };

  const slidesUrls = [
    "/assets/img/main-banner/3.png",
    "/assets/img/main-banner/1.jpg",
    "/assets/img/main-banner/2.jpg",
    "/assets/img/main-banner/4.png",
    "/assets/img/main-banner/5.jpg"
  ]

  return (
      <>
        <section className="top-slider main-slider">
          <Slider className="slide headslide" ref={slide => setNav1(slide)} {...settings}>
            {slidesUrls.map(urlEl => {
              return <img key={urlEl} className="slide__image" src={urlEl} alt="slide-1"/>
            })
            }
          </Slider>
        </section>
      </>
  )
}

export default MainSlider;
