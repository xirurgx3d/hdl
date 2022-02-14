import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useRef, useState } from 'react';
import styles from './Sliders.module.scss'
import "slick-carousel/slick/slick-theme.css";

const AboutSliders = ({cls}:any): JSX.Element => {
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