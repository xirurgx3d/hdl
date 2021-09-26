import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useRef, useState } from 'react';
import styles from './Sliders.module.scss'
import "slick-carousel/slick/slick-theme.css"; 

const Courusels = (): JSX.Element => {
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
      
        <Slider className="coruselus" ref={slide => setNav1(slide)} {...settings}>
              <div >
                    <img src="/assets/img/infrastructure-shop.png" alt="infrastructure"/>

                    <div className="location__infrastructure__title">Продукты</div>
                    <div className="location__infrastructure__time d-flex">
                        <div className="foot">5 минут</div>
                        <div className="car">7 минут</div>
                    </div>
            </div>
            <div>
                <img src="/assets/img/infrastructure-shop.png" alt="infrastructure"/>

                <div className="location__infrastructure__title">Продукты</div>
                <div className="location__infrastructure__time d-flex">
                    <div className="foot">5 минут</div>
                    <div className="car">7 минут</div>
                </div>
            </div>
            <div>
              <img src="/assets/img/infrastructure-shop.png" alt="infrastructure"/>

              <div className="location__infrastructure__title">Продукты</div>
              <div className="location__infrastructure__time d-flex">
                  <div className="foot">5 минут</div>
                  <div className="car">7 минут</div>
              </div>
            </div>
            <div>
              <img src="/assets/img/infrastructure-shop.png" alt="infrastructure"/>

              <div className="location__infrastructure__title">Продукты</div>
              <div className="location__infrastructure__time d-flex">
                  <div className="foot">5 минут</div>
                  <div className="car">7 минут</div>
              </div>
            </div>
            <div>
              <img src="/assets/img/infrastructure-shop.png" alt="infrastructure"/>

              <div className="location__infrastructure__title">Продукты</div>
              <div className="location__infrastructure__time d-flex">
                  <div className="foot">5 минут</div>
                  <div className="car">7 минут</div>
              </div>
            </div>
          </Slider>
      
    </>
  )
}

export default Courusels