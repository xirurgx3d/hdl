import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {useEffect, useState} from 'react';
import "slick-carousel/slick/slick-theme.css";
import Api from "../../Api/Api";

const MainSlider = () => {
  const [nav1, setNav1] = useState<any>();
  const [size, setSize] = useState([0, 0]);
	const [slide, setSlide] = useState<any>(null);

  function updateSize() {
    setSize([window.innerWidth, window.innerHeight]);
  }

  //onInit: window.resize https://github.com/kenwheeler/slick/issues/235
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    onInit : () => {
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }
  };


	const getSlide = async () =>{
		const {data}:any = await Api.headslidelist()
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
      <>
        <section className="top-slider main-slider">
          <Slider className="slide headslide" ref={slide => setNav1(slide)} {...settings}>
            
						{
						slide && slide.img.map((val:any,index:number)=>{
							return <img key={index} className="slide__image" src={process.env.NEXT_PUBLIC_API_URL + '/static/img/' + String(val)} />
						})
					}
          </Slider>
        </section>
      </>
  )
}

export default MainSlider;
