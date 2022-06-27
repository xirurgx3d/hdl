import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {useEffect, useState} from 'react';
import "slick-carousel/slick/slick-theme.css";
import Api from "../../Api/Api";

const Courusels = (): JSX.Element => {
    const [nav1, setNav1] = useState<any>();
		const [slide, setSlide] = useState<any>(null);

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


		const getSlide = async () =>{
			const {data}:any = await Api.corusslidelist()
			if(data){
				setSlide(data)
			}else{
				setSlide(null)
			}
		}
		
			useEffect(()=>{
				getSlide()
			},[])



    type carouselItem = {
        imageUrl: string,
        title: string,
        timeDistanceCar: string,
        timeDistanceFoot: string | null,
    }

    const carouselArray: carouselItem[] = [
        {
            imageUrl: "/assets/img/corus1/img1.png",
            title: "до Объездной дороги",
            timeDistanceCar: '3 минуты',
            timeDistanceFoot: null
        },
        {
            imageUrl: "/assets/img/corus1/img2.png",
            title: "до трассы «Таврида»",
            timeDistanceCar: "7 минут",
            timeDistanceFoot: null
        },
        {
            imageUrl: "/assets/img/corus1/img3.png",
            title: "до Керченского моста",
            timeDistanceCar: "2 ч. 15 мин.",
            timeDistanceFoot: null
        },
        {
            imageUrl: "/assets/img/corus1/img4.png",
            title: "до Аэропорта «Симферополь»",
            timeDistanceCar: "15 мин",
            timeDistanceFoot: null
        },
        {
            imageUrl: "/assets/img/corus1/img5.png",
            title: "ТРЦ «Южная Галерея»",
            timeDistanceCar: "5 мин.",
            timeDistanceFoot: "20 мин."
        },
        {
            imageUrl: "/assets/img/corus1/img6.png",
            title: "ТРК «Меганом»",
            timeDistanceCar: "7 минут",
            timeDistanceFoot: null
        },
        {
            imageUrl: "/assets/img/corus1/img7.png",
            title: "парк «Аграрник»",
            timeDistanceCar: "2 мин.",
            timeDistanceFoot: "15 мин."
        },
    ]

    return (
        <>
            <Slider className="coruselus" ref={slide => setNav1(slide)} {...settings}>
               
								{
									slide && slide.map((el: any, idx:number) => {
                    return <div className="coruselus-itemes" key={idx.toString()}>
												<img className="slide__image" src={process.env.NEXT_PUBLIC_API_URL + '/static/img/' + String(el.img)} />
                        <div className="location__infrastructure__title">{el.title}</div>
                        <div className="location__infrastructure__time d-flex">
                            {el.run && <div className="foot">{el.run}</div>}
                            {el.car && <div className="car">{el.car}</div>}
                        </div>
                    </div>
                	})
								}
            </Slider>
        </>
    )
}

export default Courusels;