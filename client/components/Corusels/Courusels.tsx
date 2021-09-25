import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useRef, useState } from 'react';
import styles from './Sliders.module.scss'
//import "slick-carousel/slick/slick-theme.css";

export default (): JSX.Element => {
  const slider1 = useRef<any>();
  const [nav1, setNav1] = useState<any>();
  const [slid, setSlid] = useState<any>(0);

  const settings = {
    dots: true,
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
      <section className="top-slider">

        <div className="slide">
            <img className="slide__image" src="/assets/img/slide.png" alt="slide-1" />

            <div className="container">
                <div className="row align-self align-items-center justify-content-between">

                    <div className="arrow left"></div>


                    <div className="slide__header col-md-6 col-12">
                        Всегда<br />на солнечной стороне!
                    </div>

                    <div className="arrow right ml"></div>

                </div>
            </div>
        </div>

        <div className="top-slider__navigation row justify-content-around align-items-center">
            <div className="navigation__point active"></div>
            <div className="navigation__point"></div>
            <div className="navigation__point"></div>
            <div className="navigation__point"></div>
            <div className="navigation__point"></div>
        </div>
        </section>
    <Slider className={styles.slide} ref={slide => setNav1(slide)} {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
      </Slider>
      <input
          onChange={e => goTo(e.target.value)}
          value={slid}
          type="range"
          min={0}
          max={3}
        />
    </>
  )
}