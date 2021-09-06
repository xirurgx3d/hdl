import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { RouteEnv } from '../constants/constRouter';
import SliderDashbordTpl from '../views/sliders/SliderDashbordTpl';
import StepBuildDashboard from '../components/StepBuild'
import StepsForm from '../components/StepBuild/Steps/SpetsForm';


const StepBuild: React.FC = () => (
  <>
    <Route exact path={RouteEnv.STEP_BUILD_STEPS}>
      <SliderDashbordTpl>
        <StepsForm />
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