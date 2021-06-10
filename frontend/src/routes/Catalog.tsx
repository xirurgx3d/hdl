import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Main from '../views/catalog/main'
import CateForm from '../components/catalog/category/CateForm';
import ProdForm from './../components/catalog/product/ProdForm';
import CategoryTpl from '../views/catalog/CategoryTpl';

const Catalog: React.FC = () => {
    //const { path } = useRouteMatch()
    return (
        <>
            <Route exact path={'/catalog/'} component={Main} />
            <Route path={'/catalog/category'} component={CategoryTpl} />
            <Route path={'/catalog/edit/:id'} component={CateForm} />
            
            <Route path={'/catalog/product/add'} component={ProdForm} />
            <Route path={'/catalog/product/edit/:id'} component={ProdForm} />
        </>
    )
}


export default Catalog