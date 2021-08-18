import React, { ReactNode, useState } from 'react';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from '../../styled/material_styles';
import { I } from '../../@types/Interface';

interface ISliderDashbordTpl{
  children:ReactNode
}

const SliderDashbordTpl: React.FC<ISliderDashbordTpl> = ({children}) => {
  const classes = useStyles()
   return (
    <Container maxWidth="lg" className={classes.container}>
       <Grid container spacing={3}>
        <Grid item xs={12}>
          {children}
        </Grid>
       </Grid>
       
    </Container>
  )
}
export default SliderDashbordTpl