import { NextPage } from "next"
import Link from "next/link"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useRef, useState } from 'react';
import styles from './Sliders.module.scss'
import "slick-carousel/slick/slick-theme.css"; 

const flartis = global.window as any
    const handlefratis = () => {
        flartis.create_chess() as any
    }

const Builds: NextPage = () => {
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
    <header>
        <div className="container">
            <div className="row head">
                <div className="logo col-md-2 col-3">
                    <Link  href='/'><img src="/assets/img/logo3.svg" alt="logotype" /></Link >
                </div>
                
                <div className="flats_box col-2 px-0">
                    <a onClick={handlefratis} className="nav-menu__link green_link col">
                        <img src="/assets/ico/kvartiri.svg" alt="kvartiri" />

                        КВАРТИРЫ
                    </a>
                    <a onClick={handlefratis} className="nav-menu__link green_link col">
                        <img src="/assets/ico/estate.svg" alt="estate" />

                        Коммерческая<br />недвижимость
                    </a>
                </div>
                <div className="contacts col-md-2 col-6">
                    <div className="contacts_box">
                        <div className="contacts__phone">
                           <Link href="tel:+7 9787180808"> +7 978 718 08 08</Link>
                        </div>
                        <div className="contacts__memo">
                            
                        </div> 
                    </div>
                    
                    <img src="/assets/img/call.png" className="contacts_call" alt="contacts"/>
                    
                </div>
                
                
                
            </div>
        </div>
      </header>
    <div className="maaaar"></div>
        <section className="steps">
        <div className="container">
        <div className="row align-items-center mb-5">
                <div className="col-6 characteristic_h1 section-header">
                Дом 1
                </div>
            
            </div>
            <Slider className="coruselus steps__slider" ref={slide => setNav1(slide)} {...settings}>
              <div className="coruselus-itemes">
                    <img src="/assets/step/2022/1_Январь_ДОМ 1 и ДОМ 2/8epfzbnGAKM.jpg" alt="infrastructure"/>

                        <div className="step__date">Январь 2022</div>
                        
                </div>
                <div className="coruselus-itemes">
                <img src="/assets/step/2022/1_Январь_ДОМ 1 и ДОМ 2/GbGTj3FiSf0.jpg" alt="infrastructure"/>

                        <div className="step__date">Январь 2022</div>
                        
            </div>
            <div className="coruselus-itemes">
            <img src="/assets/step/2022/1_Январь_ДОМ 1 и ДОМ 2/mJKYaHUejXY.jpg" alt="infrastructure"/>

                        <div className="step__date">Январь 2022</div>
                        
            </div>
            <div className="coruselus-itemes">
            <img src="/assets/step/2022/1_Январь_ДОМ 1 и ДОМ 2/nr73FZ0XmfE.jpg" alt="infrastructure"/>

                        <div className="step__date">Январь 2022</div>
                        
            </div>
            <div className="coruselus-itemes">
            <img src="/assets/step/2022/1_Январь_ДОМ 1 и ДОМ 2/wvvvZfS1ToU.jpg" alt="infrastructure"/>

                        <div className="step__date">Январь 2022</div>
                        
            </div>
            
          </Slider>
          <div className="maaaar"></div>
          <div className="col-6 characteristic_h1 section-header">
            Дом 2
          </div>
            
           
          <div className="coruselus steps__slider steps__slider-nosa" ref={slide => setNav1(slide)} {...settings}>
              <div className="coruselus-itemes">
              <img src="/assets/step/2022/2_Январь_ДОМ 3/mcYI45lp06k.jpg" alt="infrastructure"/>

                        <div className="step__date">Январь 2022</div>
                        
                </div>
                <div className="coruselus-itemes">
                <img src="/assets/step/2022/2_Январь_ДОМ 3/z_PJdXC2ddc.jpg" alt="infrastructure"/>

                        <div className="step__date">Январь 2022</div>
                        
            </div>
            
              </div>
              
          </div>
      </section>

    </>
  )
}
export default Builds