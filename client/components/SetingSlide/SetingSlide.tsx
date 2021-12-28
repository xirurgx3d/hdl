import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useRef, useState } from 'react';
import styles from './Sliders.module.scss'
import "slick-carousel/slick/slick-theme.css"; 

const SetingSlide = (): JSX.Element => {
  const slider1 = useRef<any>();
  const [nav1, setNav1] = useState<any>();
  const [slid, setSlid] = useState<any>(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  console.log(nav1);

  const goTo = (e: any) => {
    setSlid(e)
    nav1.slickGoTo(e)
  }

  return (
    <>
      
        <Slider className="coruselus setingslide" ref={slide => setNav1(slide)} {...settings}>
            <div className="characteristic__slider__item">
                    <img src="/assets/img/seting1.png" alt="1"/>

                    <div className="characteristic__slider__title">
                    Архитектура и фасады
                    </div>
        </div>
        <div className="characteristic__slider__item ">
                    <img src="/assets/img/seting2.png" alt="1"/>

                    <div className="characteristic__slider__title">
                    Технология строительства
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="/assets/img/seting3.png" alt="1"/>

                    <div className="characteristic__slider__title">
                    Инфраструктура
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="/assets/img/seting1.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        
          </Slider>
      
    </>
  )
}

export default SetingSlide