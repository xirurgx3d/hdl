import {NextPage} from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React, {useState} from "react";
import "slick-carousel/slick/slick-theme.css";
import BuildsHeader from "./builds/BuildsHeader";
import {SRLWrapper} from "simple-react-lightbox";

const Builds: NextPage = () => {
    const [nav1, setNav1] = useState<any>();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
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

    type BuildingPerMonth = {
        building: string;
        monthAndYear: string;
        imgUrls: string[]
    }

    const sliderBuildingPerMonth: BuildingPerMonth[] = [
        {
            building: 'Дом 1, 2 и 3',
            monthAndYear: 'Май 2022',
            imgUrls: [
                "/assets/step/2022/май/0ZiZdZdpW5E.jpg",
                "/assets/step/2022/май/2_psGRHWa-M.jpg",
                "/assets/step/2022/май/8pJfiwh-0Mo.jpg",
                "/assets/step/2022/май/G3HIDIPHoVA.jpg",
                "/assets/step/2022/май/vpPMjrIjfec.jpg",
                "/assets/step/2022/май/wBWPfDwXaJg.jpg",
                "/assets/step/2022/май/XN-UlJEnAYo.jpg",
                "/assets/step/2022/май/zkbVFqgtTq8.jpg",
            ]
        },
        {
            building: 'Дом 1, 2 и 3',
            monthAndYear: 'Апрель 2022',
            imgUrls: [
                "/assets/step/2022/апрель/DJI_0359.jpg",
                "/assets/step/2022/апрель/DJI_0360.jpg",
                "/assets/step/2022/апрель/DJI_0362.jpg",
                "/assets/step/2022/апрель/DJI_0364.jpg",
                "/assets/step/2022/апрель/DJI_0366.jpg",
                "/assets/step/2022/апрель/DJI_0368.jpg",
                "/assets/step/2022/апрель/DJI_0379.jpg",
            ]
        },
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
            building: 'Дом 1, 2 и 3',
            monthAndYear: 'Феравль 2022',
            imgUrls: [
                "/assets/step/2022/февраль/DJI_0024.jpg",
                "/assets/step/2022/февраль/DJI_0027.jpg",
                "/assets/step/2022/февраль/DJI_0029.jpg",
                "/assets/step/2022/февраль/DJI_0033.jpg",
                "/assets/step/2022/февраль/DJI_0034.jpg",
                "/assets/step/2022/февраль/DJI_0038.jpg",
                "/assets/step/2022/февраль/DJI_0039.jpg",
                "/assets/step/2022/февраль/DJI_0042.jpg",
                "/assets/step/2022/февраль/DJI_0043.jpg",
                "/assets/step/2022/февраль/DJI_0047.jpg",
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

  const wrapperOptions = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      size: '40px'
    },
    caption: {
      captionColor: "#e8eddf",
      captionFontSize: "18px"
    },
    settings: {
      overlayColor: "rgba(0,0,0,0.7)",
      boxShadow: "5px 5px 15px black"
    },
    thumbnails: {
      showThumbnails: false,
    }
  };

    return (
        <>
            <BuildsHeader/>
            <section className="steps">
                <div className="container">
                    <SRLWrapper options={wrapperOptions}>
                        {sliderBuildingPerMonth.map((buildingEl: BuildingPerMonth, idx: number) => {
                            return <div key={idx.toString()}>
                                <div className="maaaar"/>
                                <div className="col-6 characteristic_h1 section-header">{buildingEl.building}</div>
                                <Slider
                                    className="coruselus steps__slider"
                                    ref={(slide) => setNav1(slide)}
                                    {...sliderSettings}
                                    slidesToShow={buildingEl.imgUrls.length < 4 ? buildingEl.imgUrls.length : 4}
                                >
                                    {buildingEl.imgUrls.map((url: string) => {
                                        return <div key={url} className="coruselus-itemes">
                                            <img src={url} alt={buildingEl.monthAndYear} style={{cursor: 'pointer'}}/>
                                            <div className="step__date">{buildingEl.monthAndYear}</div>
                                        </div>
                                    })
                                    }
                                </Slider>
                            </div>
                        })
                        }
                    </SRLWrapper>
                </div>
            </section>
        </>
    );
};

export default Builds;
