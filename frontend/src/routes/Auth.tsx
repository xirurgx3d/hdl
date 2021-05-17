import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import { RouteComponentProps } from 'react-router';

const Auth:React.FC<RouteComponentProps> = ({match}) => (
        <Switch>
            <Route path={match.path + '/register'} component={Register} />
            <Route path={match.path + '/login'} component={Login} />
        </Switch>
)


export default Auth