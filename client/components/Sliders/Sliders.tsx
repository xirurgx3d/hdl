import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useRef, useState } from 'react';
import styles from './Sliders.module.scss'
import "slick-carousel/slick/slick-theme.css";

const Sliders = (): JSX.Element => {
  const slider1 = useRef<any>();
  const [nav1, setNav1] = useState<any>();
  const [slid, setSlid] = useState<any>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  console.log(nav1);

  const goTo = (e: any) => {
    setSlid(e)
    nav1.slickGoTo(e)
  }

  return (
    <>
      <section className="top-slider">
        <Slider className="slide headslide" ref={slide => setNav1(slide)} {...settings}>
          <img className="slide__image" src="/assets/img/banner1/3.jpg" alt="slide-1" />
          <img className="slide__image" src="/assets/img/banner1/1.jpg" alt="slide-1" />
          <img className="slide__image" src="/assets/img/banner1/2.jpg" alt="slide-1" />
          
        </Slider>
      </section>  
      
    </>
  )
}
export default Sliders