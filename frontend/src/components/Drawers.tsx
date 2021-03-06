import React, { useEffect, useState } from 'react';
import { AppBar, Badge, Box, Container, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useStyles } from '../styled/material_styles';
import clsx from 'clsx';
import { RouteEnv } from '../constants/constRouter';

const Drawers: React.FC = () => {
  const classes = useStyles()
	const history:any = useHistory<any>();
	const location = useLocation()

	

	const back = () =>{
		history.goBack()
	}

  return (
    
    <Drawer
    variant="permanent"
    classes={{
      paper: clsx(classes.drawerPaper),
    }}
  >

    <div className={classes.toolbarIcon} onClick={back}>
      <IconButton >
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
      <List>
        <Link  to={RouteEnv.SLIDERS_PAGE}>
          <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Слайдеры" />
          </ListItem>
        </Link>
        <Link  to={RouteEnv.STEP_BUILD}>
          <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Ход строительства" />
          </ListItem>
        </Link>
        
        <Link  to={RouteEnv.SETINGS_PAGE}>
          <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItem>
        </Link>
    </List>
    <Divider />
    </Drawer>
  )
}
export default Drawers