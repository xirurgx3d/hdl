import React from 'react';
import { Link } from 'react-router-dom';
import SliderHead from './galleryHead/SliderHead';
import GallerySlide from './gallerySlide/GallerySlide';
import HeadSlide from './headSlide/HeadSlide';
//import GalleryHead from './galleryHead/GalleryHead';
//import HeadSlide from './headSlide/HeadSlide';
import Specific from './Specific/Specific';
import Сarousel from './Сarousel/Сarousel';


const SlidersDashboard: React.FC = (): JSX.Element => {
  
  return (
    <>
			<SliderHead />
      <GallerySlide />
      <Сarousel />
      
    </>
    
  )
}

export default SlidersDashboard