import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import SlidersDashboard from '../components/sliders';
import GallerySlideForm from '../components/sliders/gallerySlide/GallerySlideForm';
import HeadSlideForm from '../components/sliders/headSlide/HeadSlideForm';
import SpecificForm from '../components/sliders/Specific/SpecificForm';
import SliderHeadForm from '../components/sliders/topSlide/SliderHeadForm';
import СarouselForm from '../components/sliders/Сarousel/СarouselForm';

import { RouteEnv } from '../constants/constRouter';
import SliderDashbordTpl from '../views/sliders/SliderDashbordTpl';

const Sliders: React.FC = () => {
    
    return (
        <>
            <Route exact path={RouteEnv.SLIDERS_GALLERY}>
                <SliderDashbordTpl>
                    <GallerySlideForm />
                </SliderDashbordTpl>
            </Route>
            <Route path={RouteEnv.SLIDERS_GALLERY + '/:id'}>
                <SliderDashbordTpl>
                    <GallerySlideForm />
                </SliderDashbordTpl>
            </Route>

            <Route exact path={RouteEnv.SLIDERS_GALLERYHEAD}>
                <SliderDashbordTpl>
									<SliderHeadForm />
                </SliderDashbordTpl>
            </Route>
            <Route path={RouteEnv.SLIDERS_GALLERYHEAD + '/:id'}>
                <SliderDashbordTpl>
                   <SliderHeadForm /> 
                </SliderDashbordTpl>
            </Route>
            
            <Route exact path={RouteEnv.SLIDERS_HEADER}>
                <SliderDashbordTpl>
                    <HeadSlideForm />
                </SliderDashbordTpl>
            </Route>
            <Route path={RouteEnv.SLIDERS_HEADER + '/:id'}>
                <SliderDashbordTpl>
                    <HeadSlideForm />
                </SliderDashbordTpl>
            </Route>
            
            
            <Route exact path={RouteEnv.SLIDERS_СAROUSEL}>
                <SliderDashbordTpl>
                    <СarouselForm />
                </SliderDashbordTpl>
            </Route>
            <Route path={RouteEnv.SLIDERS_СAROUSEL + '/:id'}>
                <SliderDashbordTpl>
                    <СarouselForm />
                </SliderDashbordTpl>
            </Route>

            <Route exact path={RouteEnv.SLIDERS_SPECIFIC}>
                <SliderDashbordTpl>
                    <SpecificForm />
                </SliderDashbordTpl>
            </Route>
            <Route path={RouteEnv.SLIDERS_SPECIFIC + '/:id'}>
                <SliderDashbordTpl>
                    <SpecificForm />
                </SliderDashbordTpl>
            </Route>

           
            

            
            <Route exact path={RouteEnv.SLIDERS_PAGE}>
                <SliderDashbordTpl>
                    <SlidersDashboard />
                </SliderDashbordTpl>
            </Route>
        </>
    )
}


export default Sliders