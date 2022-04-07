import { NextPage } from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import BuildsHeader from "./builds/BuildsHeader";

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
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goTo = (e: any) => {
    setSlid(e);
    nav1.slickGoTo(e);
  };

  type BuildingPerMonth = {
    building: string;
    monthAndYear: string;
    imgUrls: string[]
  }

  const sliderBuildingPerMonth: BuildingPerMonth[] = [
    {
      building: 'Дом 1, 2 и 3',
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
    },
    {
      building: 'Дом 1, 2',
      monthAndYear: 'Январь 2022',
      imgUrls: [
        "/assets/step/2022/январь_1_2/8epfzbnGAKM.jpg",
        "/assets/step/2022/январь_1_2/GbGTj3FiSf0.jpg",
        "/assets/step/2022/январь_1_2/mJKYaHUejXY.jpg",
        "/assets/step/2022/январь_1_2/nr73FZ0XmfE.jpg",
        "/assets/step/2022/январь_1_2/wvvvZfS1ToU.jpg",
      ]
    },
    {
      building: 'Дом 3',
      monthAndYear: 'Январь 2022',
      imgUrls: [
        "/assets/step/2022/январь_3/mcYI45lp06k.jpg",
        "/assets/step/2022/январь_3/z_PJdXC2ddc.jpg",
      ]
    },
    {
      building: 'Дом 2',
      monthAndYear: 'Декабрь 2021',
      imgUrls: [
        "/assets/step/2021/15_Декабрь 2021_ДОМ 2/3NV7q4_2MJ0.jpg",
        "/assets/step/2021/15_Декабрь 2021_ДОМ 2/l5G77VL1tAs.jpg",
        "/assets/step/2021/15_Декабрь 2021_ДОМ 2/LMQml-oy5q0.jpg",
        "/assets/step/2021/15_Декабрь 2021_ДОМ 2/OUzGGsfI8Yg.jpg",
        "/assets/step/2021/15_Декабрь 2021_ДОМ 2/-VmWI8uJDQk.jpg",
        "/assets/step/2021/15_Декабрь 2021_ДОМ 2/z-4vJ2k0lhM.jpg",
        "/assets/step/2021/15_Декабрь 2021_ДОМ 2/ZAZ_bI4ombI.jpg",
      ]
    },
    {
      building: 'Дом 3',
      monthAndYear: 'Ноябрь 2021',
      imgUrls: [
        "/assets/step/2021/14_Ноябрь 2021_ДОМ 3/pw960hhyaD8.jpg",
        "/assets/step/2021/14_Ноябрь 2021_ДОМ 3/sFoiQrwWwKQ.jpg",
        "/assets/step/2021/14_Ноябрь 2021_ДОМ 3/UNYyTpXxf64.jpg",
        "/assets/step/2021/14_Ноябрь 2021_ДОМ 3/yymJT1ZTbW0.jpg",
      ]
    },
    {
      building: 'Дом 2',
      monthAndYear: 'Ноябрь 2021',
      imgUrls: [
        "/assets/step/2021/13_Ноябрь 2021_ДОМ 2/9ao_v4xpeg8.jpg",
        "/assets/step/2021/13_Ноябрь 2021_ДОМ 2/cEiTq9LUC4U.jpg",
        "/assets/step/2021/13_Ноябрь 2021_ДОМ 2/hknvdRwakho.jpg",
        "/assets/step/2021/13_Ноябрь 2021_ДОМ 2/o7evEumzrFU.jpg",
      ]
    },
    {
      building: 'Дом 1, 2',
      monthAndYear: 'Октябрь 2021',
      imgUrls: [
        "/assets/step/2021/12_Октябрь 2021_ДОМ 1 и ДОМ 2/gU0UjmT0LpQ.jpg",
        "/assets/step/2021/12_Октябрь 2021_ДОМ 1 и ДОМ 2/jtm7kEp3zBo.jpg",
        "/assets/step/2021/12_Октябрь 2021_ДОМ 1 и ДОМ 2/McgwtSNzyfk.jpg",
        "/assets/step/2021/12_Октябрь 2021_ДОМ 1 и ДОМ 2/oIcDSMO2Jsc.jpg",
        "/assets/step/2021/12_Октябрь 2021_ДОМ 1 и ДОМ 2/rP8dyOuZ8PY.jpg",
      ]
    },
    {
      building: 'Дом 1, 2',
      monthAndYear: 'Сентябрь 2021',
      imgUrls: [
        "/assets/step/2021/11_Сентябрь 2021_ДОМ 1 и ДОМ 2/1nv2HmJz5-w.jpg",
        "/assets/step/2021/11_Сентябрь 2021_ДОМ 1 и ДОМ 2/cD0BreGtJCc.jpg",
        "/assets/step/2021/11_Сентябрь 2021_ДОМ 1 и ДОМ 2/cF8d_-td7pM.jpg",
        "/assets/step/2021/11_Сентябрь 2021_ДОМ 1 и ДОМ 2/ka8--hH2Dog.jpg",
        "/assets/step/2021/11_Сентябрь 2021_ДОМ 1 и ДОМ 2/O-rzsuNF0g0.jpg",
        "/assets/step/2021/11_Сентябрь 2021_ДОМ 1 и ДОМ 2/RDuzCS5_RO0.jpg",
        "/assets/step/2021/11_Сентябрь 2021_ДОМ 1 и ДОМ 2/SfIbx-rJHP8.jpg",
        "/assets/step/2021/11_Сентябрь 2021_ДОМ 1 и ДОМ 2/ZQWF-t-mj9M.jpg",
      ]
    },
    {
      building: 'Дом 2',
      monthAndYear: 'Август 2021',
      imgUrls: [
        "/assets/step/2021/10_Август 2021_ДОМ 2/0jNXULzJQDo.jpg",
        "/assets/step/2021/10_Август 2021_ДОМ 2/94ws3PDjcHo.jpg",
        "/assets/step/2021/10_Август 2021_ДОМ 2/jTpnQCLmoM8.jpg",
        "/assets/step/2021/10_Август 2021_ДОМ 2/mC06PCdUXOU.jpg",
        "/assets/step/2021/10_Август 2021_ДОМ 2/RWPuU_VsdtA.jpg",
        "/assets/step/2021/10_Август 2021_ДОМ 2/vDPwliBAtbc.jpg",
        "/assets/step/2021/10_Август 2021_ДОМ 2/zFGOemHN3Ws.jpg",
      ]
    },
  ]

  return (
    <>
      <BuildsHeader />
      <section className="steps">
        <div className="container">
          {sliderBuildingPerMonth.map((buildingEl:BuildingPerMonth, idx: number) => {
            if (buildingEl.imgUrls.length < 4) {settings.slidesToShow = buildingEl.imgUrls.length}
            else {settings.slidesToShow = 4};
           return <div key={idx.toString()} >
              <div className="maaaar"/>
              <div className="col-6 characteristic_h1 section-header">{buildingEl.building}</div>
              <Slider
                  className="coruselus steps__slider"
                  ref={(slide) => setNav1(slide)}
                  {...settings}
              >
                {buildingEl.imgUrls.map((imageUrl: string, i: number) => {
                  return <div key={i.toString()} className="coruselus-itemes">
                    <img src={imageUrl} alt="infrastructure"/>
                    <div className="step__date">{buildingEl.monthAndYear}</div>
                  </div>
                })
                }
              </Slider>
            </div>
          })
          }
        </div>
      </section>
    </>
  );
};

export default Builds;