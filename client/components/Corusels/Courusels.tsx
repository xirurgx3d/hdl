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
    slidesToScroll: 4,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
                    <img src="/assets/img/corus1/img1.png" alt="infrastructure"/>

                    <div className="location__infrastructure__title">до Объездной дороги</div>
                    <div className="location__infrastructure__time d-flex">
                        
                        <div className="car">7 минут</div>
                    </div>
            </div>
            <div>
                <img src="/assets/img/corus1/img2.png" alt="infrastructure"/>

                <div className="location__infrastructure__title">до трассы «Таврида»</div>
                <div className="location__infrastructure__time d-flex">
                    
                    <div className="car">7 минут</div>
                </div>
            </div>
            <div>
              <img src="/assets/img/corus1/img3.png" alt="infrastructure"/>

              <div className="location__infrastructure__title">до Керченского моста</div>
              <div className="location__infrastructure__time d-flex">
                  
                  <div className="car">7 минут</div>
              </div>
            </div>
            <div>
              <img src="/assets/img/corus1/img4.png" alt="infrastructure"/>

              <div className="location__infrastructure__title">до Аэропорта «Симферополь»</div>
              <div className="location__infrastructure__time d-flex">
                  
                  <div className="car">7 минут</div>
              </div>
            </div>
            <div>
              <img src="/assets/img/corus1/img5.png" alt="infrastructure"/>

              <div className="location__infrastructure__title">ТРЦ «Южная Галерея»</div>
              <div className="location__infrastructure__time d-flex">
                  
                  <div className="car">7 минут</div>
              </div>
            </div>
            <div>
              <img src="/assets/img/corus1/img6.png" alt="infrastructure"/>

              <div className="location__infrastructure__title">ТРК «Меганом»</div>
              <div className="location__infrastructure__time d-flex">
                  
                  <div className="car">7 минут</div>
              </div>
            </div>
            <div>
              <img src="/assets/img/corus1/img7.png" alt="infrastructure"/>

              <div className="location__infrastructure__title">парк «Аграрник»</div>
              <div className="location__infrastructure__time d-flex">
                  
                  <div className="car">7 минут</div>
              </div>
            </div>
          </Slider>
      
    </>
  )
}

export default Courusels