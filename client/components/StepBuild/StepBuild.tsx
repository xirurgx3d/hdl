import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useRef, useState } from 'react';
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
    type BuildingPerMonth = {
        monthAndYear: string;
        imgUrls: string[]
    }

    const buildingPicturePerMonth: BuildingPerMonth = {
        monthAndYear: 'Март 2022',
        imgUrls: [
            "/assets/step/2022/март/DJI_0024.jpg",
            "/assets/step/2022/март/DJI_0033.jpg",
            "/assets/step/2022/март/DJI_0034.jpg",
            "/assets/step/2022/март/DJI_0058.jpg",
            "/assets/step/2022/март/DJI_0063.jpg",
            "/assets/step/2022/март/DJI_0072.jpg",
            "/assets/step/2022/март/DJI_0076.jpg",
            "/assets/step/2022/март/DJI_0091.jpg",
            "/assets/step/2022/март/DJI_0093.jpg",
        ]
    }

  const goTo = (e: any) => {
    setSlid(e)
    nav1.slickGoTo(e)
  }

    return (
        <>
            <Slider className="coruselus steps__slider" ref={slide => setNav1(slide)} {...settings}>
                {buildingPicturePerMonth.imgUrls.map((imgUrl: string, idx: number) => {
                    return <div key={idx.toString()} className="coruselus-itemes">
                        <img src={imgUrl} alt="infrastructure"/>
                        <div className="step__date">{buildingPicturePerMonth.monthAndYear}</div>
                    </div>
                })
                }
            </Slider>
        </>
    )
}

export default StepBuild
