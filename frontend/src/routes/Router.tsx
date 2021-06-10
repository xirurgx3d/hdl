import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Auth from './Auth';
import Catalog from './Catalog';
import Dashboard from '../components/Dashboard';




const Router:React.FC = () => (
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/catalog">
                <Dashboard>
                    <Catalog />
                </Dashboard>
            </Route>
        </Switch>
)

export default Router