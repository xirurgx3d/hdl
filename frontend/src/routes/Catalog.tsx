import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Main from '../views/catalog/main'
import CateForm from '../components/catalog/category/CateForm';
import ProdForm from './../components/catalog/product/ProdForm';
import CategoryTpl from '../views/catalog/CategoryTpl';
import { RouteEnv } from '../constants/constRouter';

const Catalog: React.FC = () => {
    //const { path } = useRouteMatch()
    return (
        <>
            <Route path={RouteEnv.CATALOG_DASHBOARD} component={Main} />
            <Route path={RouteEnv.CATALOG_CATAGORY} component={CategoryTpl} />
            
        </>
    )
}


export default Catalog