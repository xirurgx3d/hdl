import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { RouteEnv } from '../constants/constRouter';
import SliderDashbordTpl from '../views/sliders/SliderDashbordTpl';
import StepBuildDashboard from '../components/StepBuild'
import StepsForm from '../components/StepBuild/Steps/SpetsForm';
import BuildForm from '../components/StepBuild/Builds/BuildForm';


const StepBuild: React.FC = () => (
  <>
    <Route exact path={RouteEnv.STEP_BUILD_STEPS}>
      <SliderDashbordTpl>
        <StepsForm />
      </SliderDashbordTpl>
    </Route>
    <Route path={RouteEnv.STEP_BUILD_STEPS + '/:id'}>
      <SliderDashbordTpl>
        <StepsForm />
      </SliderDashbordTpl>
    </Route>

    <Route exact path={RouteEnv.STEP_BUILD_BUILD}>
      <SliderDashbordTpl>
        <BuildForm />
      </SliderDashbordTpl>
    </Route>

    <Route exact path={RouteEnv.STEP_BUILD}>
      <SliderDashbordTpl>
        <StepBuildDashboard />
      </SliderDashbordTpl>
    </Route>
  </>  
)
export default StepBuild