import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Main from '../views/catalog/main'
import CateForm from '../components/catalog/category/CateForm';
import ProdForm from './../components/catalog/product/ProdForm';

const Catalog:React.FC<RouteComponentProps> = ({match}) => (
        <>
            <Route exact path={match.path + '/'} component={Main} />
            <Route path={match.path + '/add'} component={CateForm} />
            <Route path={match.path + '/edit/:id'} component={CateForm} />
            
            <Route path={match.path + '/product/add'} component={ProdForm} />
            <Route path={match.path + '/product/edit/:id'} component={ProdForm} />
        </>
)


export default Catalog