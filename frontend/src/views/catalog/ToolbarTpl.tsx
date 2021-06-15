import { Button, Fab, Grid } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { memo } from 'react';
import SerchProd from '../../components/catalog/toolsbar/SerchProd';
import SortProduct from '../../components/catalog/toolsbar/SortProduct';
import { useStyles } from '../../styled/material_styles';

const ToolbarTpl: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container
      className={classes.toolbars}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid >
        <SerchProd />
      </Grid>
      <Grid item >
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
          <SortProduct />
          <Button
            variant="contained"
            color="default"
            size="small"
            className={classes.setingButt}
            
          >
            <SettingsIcon />
          </Button>
          
          </Grid>
      </Grid>
      
    </Grid>
  )
}
export default ToolbarTpl 