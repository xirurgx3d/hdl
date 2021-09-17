import React from 'react';
import { Link } from 'react-router-dom';
import GallerySlide from './gallerySlide/GallerySlide';
import GalleryHead from './galleryHead/GalleryHead';
import HeadSlide from './headSlide/HeadSlide';
import Specific from './Specific/Specific';
import Сarousel from './Сarousel/Сarousel';


const SlidersDashboard: React.FC = (): JSX.Element => {
  
  return (
    <>
      <GallerySlide />
      <GalleryHead />
      <Сarousel />
      <Specific />
    </>
    
  )
}

export default SlidersDashboard