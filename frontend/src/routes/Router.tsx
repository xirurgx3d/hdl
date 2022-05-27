import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Auth from './Auth';
import Catalog from './Catalog';
import Dashboard from '../components/Dashboard';
import { RouteEnv } from '../constants/constRouter';
import Sliders from './Sliders';
import StepBuild from './StepBuild';
import Seting from './Seting';




const Router:React.FC = () => (
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/catalog">
                <Dashboard>
                    <Catalog />
                </Dashboard>
            </Route>
            <Route path={RouteEnv.SLIDERS_PAGE}>
                <Dashboard>
                    <Sliders />
                </Dashboard>
            </Route>
            <Route path={RouteEnv.STEP_BUILD}>
                <Dashboard>
                    <StepBuild />
                </Dashboard>
            </Route>
						<Route path={RouteEnv.SETINGS_PAGE}>
                <Dashboard>
                    <Seting />
                </Dashboard>
            </Route>
        </Switch>
)

export default Router