import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useRef, useState } from 'react';
import styles from './Sliders.module.scss'
import "slick-carousel/slick/slick-theme.css";

const SlidePlan1 = ({plan}:any) => {
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
      <section className="top-slider allstile aboutslide">
      <Slider className="slide  aboutslide" ref={slide => setNav1(slide)} {...settings}>
          <img src="/assets/img/plans/1/1.png" alt="middle slider" /> 
          <img src="/assets/img/plans/1/2.png" alt="middle slider" />
          <img src="/assets/img/plans/1/3.png" alt="middle slider" />
          <img src="/assets/img/plans/1/4.png" alt="middle slider" />
          <img src="/assets/img/plans/1/5.png" alt="middle slider" />
          <img src="/assets/img/plans/1/6.png" alt="middle slider" />
        </Slider> 
      </section>
    </>
  )
}
export default SlidePlan1