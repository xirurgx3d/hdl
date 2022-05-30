import React, { useEffect, useState } from 'react'; 
import Main from '../components/Dashboard';
import { checkUser } from '../api/Api_user';
import { useHistory } from 'react-router-dom';
import Loader from '../components/loader';
import {observer} from "mobx-react";
import UserStore from '../store/UserStore';

import { AppBar, Badge, Box, Container, CssBaseline, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import { useStyles } from '../styled/material_styles';
import { Copyright } from '@material-ui/icons';
import Router from '../routes/Router';
import { RouteEnv } from '../constants/constRouter';
import Api, { API } from '../api/Api';
import { slidersRoute } from '../constants/constFetch';



  


const App: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const classes = useStyles()


		const q = async () =>{
			const {data} = await API.Sliders.slidelist(slidersRoute.galleryslide)
			console.log(data);
		}
    useEffect(() => {
				q()
        checkUser()
            .then(e => {
                if (e) {
                    UserStore.setIsAuth(e)
                    history.push(RouteEnv.SLIDERS_PAGE)
                } else {
                    UserStore.setIsAuth(e)
                    //history.push("/auth/login")
                }
            })
            .finally(() => setLoading(false))
    }, [UserStore._isAuth])


		
    
    
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <>
            <div className={classes.root}>
            <CssBaseline />
            { 
                loading
                  ? <Loader />
                  : <Router />
                    
            }
            </div>
          
            
        
        </>    
    )
}

export {App}
export default observer(App);
