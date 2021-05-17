import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Auth';
import Catalog from './Catalog';




const Router:React.FC = () => (
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/catalog" component={Catalog} />
        </Switch>
)

export default Router