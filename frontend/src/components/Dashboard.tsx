import React from 'react';
import { Link } from 'react-router-dom';
import Router from '../routes/Router';
import Header from './header';
import UserStore from '../store/UserStore';
import Drawers from './Drawers';
import { Container } from '@material-ui/core';
import { useStyles } from '../styled/material_styles';


const Dashboard: React.FC = ({ children }): JSX.Element => {
    const classes = useStyles()
    
    return (
    <>
        {
            UserStore._isAuth &&
            <>
                <Header />
                <Drawers />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    {children}
                </main>
                          
            </>    
        }
        
       
        
    </>
       
)} 
export default Dashboard