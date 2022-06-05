/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect,useState } from 'react';
import jwt_decode from "jwt-decode";
import { useHistory,useLocation } from 'react-router-dom';
import UserStore from './../store/UserStore';
//
import { AppBar, Avatar, Badge, Box, Container, CssBaseline, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStyles } from '../styled/material_styles';

type Iuser = {
  email:string
}

const Header: React.FC = () => {
  const [user, setUser] = useState<string>('')
  const history = useHistory();
	const location = useLocation()
  const classes = useStyles()
	

  useEffect(() => {
    if (UserStore._isAuth) {
      let token: string | null = localStorage.getItem('token');
      if (token) {
        const user: Iuser = jwt_decode(token)
        setUser(user.email)
      }
    }
    
  }, [UserStore._isAuth])
  
  const logOut = () => {
    localStorage.removeItem('token')
    UserStore.setIsAuth(false)
    history.push("/auth/login")
    
  }

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, classes.appBarShift)}>
				
        <Toolbar className={classes.toolbar}>
					<div onClick={() => history.back()}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            
            className={clsx(classes.menuButton, classes.menuButtonHidden)}
          >
            
          </IconButton>
					</div>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          
          <Avatar src="/broken-image.jpg" />
          
          <Typography className={classes.userTitle} color="inherit" noWrap>
            Добро пожаловать, {user}
        </Typography>
          <IconButton color="inherit">
            <ExitToAppIcon onClick={logOut} />
          </IconButton>
        </Toolbar>
                </AppBar>
    
    
    )
}  
export default Header