import React, { memo } from 'react';
import { RouteComponentProps } from 'react-router';
import ProdList from '../../components/catalog/product/ProdList';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../../styled/material_styles';
import CateProdList from '../../components/catalog/category/CateProdList';
import ToolbarTpl from './ToolbarTpl';

const CatMain: React.FC<RouteComponentProps> = ({ match }) => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight); 
  
  return(
    
    <Container maxWidth="lg" className={classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Категории
        </Typography>
          <CateProdList />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Товары
            </Typography>
          <ToolbarTpl />  
          <ProdList />
        </Paper>
      </Grid>
      
    </Grid>
    </Container>
  )
}  
export default CatMain