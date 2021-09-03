import React from 'react';
import { Link } from 'react-router-dom';
import HeadSlide from './headSlide/HeadSlide';
import Specific from './Specific/Specific';
import Сarousel from './Сarousel/Сarousel';


const SlidersDashboard: React.FC = (): JSX.Element => {
  
  return (
    <>
      <HeadSlide />
      <Сarousel />
      <Specific />
    </>
    
  )
}

export default SlidersDashboard