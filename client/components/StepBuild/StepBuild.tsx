import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useEffect, useState } from 'react';
import {SRLWrapper} from "simple-react-lightbox";
import "slick-carousel/slick/slick-theme.css";
import Api from "../../Api/Api";
import Link from "next/link";

const StepBuild = (): JSX.Element => {
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
        monthAndYear: ' Май 2022',
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
    }

  const goTo = (e: any) => {
    setSlid(e)
    nav1.slickGoTo(e)
  }

	const [slide, setSlide] = useState<any>(null);
	const getSlide = async () =>{
		const {data}:any = await Api.stepslidelist()
		//console.log(data[data.lenght -1]);
		if(data){
			setSlide(data[0])
		}else{
			setSlide(null)
		}
	}

	const [video, setVideo] = useState<any>(null);
	const getvideo = async () =>{
		const {data}:any = await Api.videolidelist()
		if(data){
			setVideo(data[0])
		}else{
			setVideo(null)
		}
	}
	
		useEffect(()=>{
			getSlide()
			getvideo()
		},[])

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
        <SRLWrapper options={wrapperOptions}>
            <Slider className="coruselus steps__slider" ref={slide => setNav1(slide)} {...settings}>
                

								{
									slide && slide.img.map((val:any)=>{
											return (
												<div key={val} className="coruselus-itemes">
												<img src={process.env.NEXT_PUBLIC_API_URL + '/static/img/' + String(val)} />
												<div className="step__date">{slide.year}</div>
												</div>
											)
										})
									
								}
								
            </Slider>
        </SRLWrapper>
				<div className='maaaar'/>
                    <div className="row align-items-center mb-5">
                        <div className="col-6 characteristic_h1 section-header">
                            {video && video.title}
                        </div>
                        <div
                            className="col-6 characteristic_h1  section-btn d-flex justify-content-md-end align-self-center">
                            <Link
                                href="https://www.youtube.com/channel/IhZ80AXpsk8">
                                <a className="btn" target="_blank"> Смотреть всё</a>
                            </Link>
                        </div>
                    </div>

										<div className='characteristic_video'>
                        <iframe width="560" height="315" src={video && video.url}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                    </div>
				</>
    )
}

export default StepBuild
