/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import CateList from './../../components/catalog/category/CateList';
import ProdList from '../../components/catalog/product/ProdList';
import ProductStore from '../../store/ProductStore';
import SerchProd from '../../components/catalog/toolsbar/SerchProd';
import SortProduct from '../../components/catalog/toolsbar/SortProduct';
import { Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../../styled/material_styles';

const CatMain: React.FC<RouteComponentProps> = ({ match }) => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  return(
    
    <Container maxWidth="lg" className={classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <CateList />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <ProdList />
        </Paper>
      </Grid>
      
    </Grid>
    </Container>
  )
}  
export default CatMain