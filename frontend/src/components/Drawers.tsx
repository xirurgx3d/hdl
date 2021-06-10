import React, { useEffect, useState } from 'react';
import { AppBar, Badge, Box, Container, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link, useRouteMatch } from 'react-router-dom';

import { useStyles } from '../styled/material_styles';
import clsx from 'clsx';

const Drawers: React.FC = () => {
  const classes = useStyles()

  return (
    
    <Drawer
    variant="permanent"
    classes={{
      paper: clsx(classes.drawerPaper),
    }}
  >
    <div className={classes.toolbarIcon}>
      <IconButton >
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
      <List>
        <Link  to={'/catalog/'}>
          <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link  to={'/catalog/category'}>
          <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Категории" />
          </ListItem>
        </Link>
    </List>
    <Divider />
    </Drawer>
  )
}
export default Drawers