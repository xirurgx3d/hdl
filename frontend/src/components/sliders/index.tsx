import React from 'react';
import GallerySlide from './gallerySlide/GallerySlide';
import SliderHead from './topSlide/SliderHead';

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