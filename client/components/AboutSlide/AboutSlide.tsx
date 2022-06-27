import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick-theme.css";
import Api from "../../Api/Api";

const AboutSlider = () => {
  const [nav, setNav] = useState<any>();
	const [slide, setSlide] = useState<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      useCSS: true
  };

	const getSlide = async () =>{
		const {data}:any = await Api.aboutslidelist()
		if(data){
			setSlide(data[0])
		}else{
			setSlide(null)
		}
	}
	
	useEffect(()=>{
		getSlide()
	},[])

  return (
      <section className="top-slider allstile aboutslide">
      <Slider ref={slide => setNav(slide)} {...settings}>
					{
						slide && slide.img.map((val:any,index:number)=>{
							return <img key={index} src={process.env.NEXT_PUBLIC_API_URL + '/static/img/' + String(val)} />
						})
					}
        </Slider>
      </section>
  )
}

export default AboutSlider;