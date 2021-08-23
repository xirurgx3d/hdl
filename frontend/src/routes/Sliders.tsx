import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import SlidersDashboard from '../components/sliders';
import HeadSlideForm from '../components/sliders/headSlide/HeadSlideForm';
import { RouteEnv } from '../constants/constRouter';
import SliderDashbordTpl from '../views/sliders/SliderDashbordTpl';

const Sliders: React.FC = () => {
    
    return (
        <>
            
            <Route path={RouteEnv.SLIDERS_HEADER}>
                <SliderDashbordTpl>
                    <HeadSlideForm />
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