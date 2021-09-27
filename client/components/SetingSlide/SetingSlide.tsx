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
    slidesToShow: 5,
    slidesToScroll: 5
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
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        <div className="characteristic__slider__item ">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
        </div>
        <div className="characteristic__slider__item">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
                </div>
          </Slider>
      
    </>
  )
}

export default SetingSlide