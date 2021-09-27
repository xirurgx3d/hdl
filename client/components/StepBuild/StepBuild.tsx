import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useRef, useState } from 'react';
import styles from './Sliders.module.scss'
import "slick-carousel/slick/slick-theme.css"; 

const StepBuild = (): JSX.Element => {
  const slider1 = useRef<any>();
  const [nav1, setNav1] = useState<any>();
  const [slid, setSlid] = useState<any>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  console.log(nav1);

  const goTo = (e: any) => {
    setSlid(e)
    nav1.slickGoTo(e)
  }

  return (
    <>
      
        <Slider className="coruselus steps__slider" ref={slide => setNav1(slide)} {...settings}>
              <div >
                    <img src="/assets/img/step1.png" alt="infrastructure"/>

                    <div className="step__date">Март 2021</div>
                    <div className="step__photo-count">5 фото</div>
            </div>
            <div >
            <img src="/assets/img/step2.png" alt="infrastructure"/>

                    <div className="step__date">Март 2021</div>
                    <div className="step__photo-count">5 фото</div>
        </div>
        <div >
        <img src="/assets/img/step3.png" alt="infrastructure"/>

                    <div className="step__date">Март 2021</div>
                    <div className="step__photo-count">5 фото</div>
        </div>
        <div >
        <img src="/assets/img/step4.png" alt="infrastructure"/>

                    <div className="step__date">Март 2021</div>
                    <div className="step__photo-count">5 фото</div>
        </div>
        <div >
        <img src="/assets/img/step1.png" alt="infrastructure"/>

                    <div className="step__date">Март 2021</div>
                    <div className="step__photo-count">5 фото</div>
            </div>
          </Slider>
      
    </>
  )
}

export default StepBuild