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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
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
      
        <Slider className="coruselus steps__slider" ref={slide => setNav1(slide)} {...settings}>
              <div className="coruselus-itemes">
                    <img src="/assets/step/2022/февраль/DJI_0024.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
            </div>
            <div className="coruselus-itemes">
            <img src="/assets/step/2022/февраль/DJI_0027.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
        </div>
        <div className="coruselus-itemes">
        <img src="/assets/step/2022/февраль/DJI_0029.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
        </div>
        <div className="coruselus-itemes">
        <img src="/assets/step/2022/февраль/DJI_0033.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
        </div>
        <div className="coruselus-itemes">
        <img src="/assets/step/2022/февраль/DJI_0034.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
        </div>
        <div className="coruselus-itemes">
        <img src="/assets/step/2022/февраль/DJI_0038.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
        </div>
        <div className="coruselus-itemes">
        <img src="/assets/step/2022/февраль/DJI_0039.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
        </div>
        <div className="coruselus-itemes">
        <img src="/assets/step/2022/февраль/DJI_0042.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
        </div>
        <div className="coruselus-itemes">
        <img src="/assets/step/2022/февраль/DJI_0043.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
        </div>
        <div className="coruselus-itemes">
        <img src="/assets/step/2022/февраль/DJI_0047.jpg" alt="infrastructure"/>

                    <div className="step__date">Февраль 2022</div>
                    
            </div>
          </Slider>
      
    </>
  )
}

export default StepBuild