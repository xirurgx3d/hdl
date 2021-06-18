import React, { memo } from 'react';
import { RouteComponentProps } from 'react-router';
import ProdList from '../../components/catalog/product/ProdList';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../../styled/material_styles';
import CateProdList from '../../components/catalog/category/CateProdList';
import ToolbarTpl from './ToolbarTpl';
import { Dialogs } from '../../components/modals/Dialogs';
import usePrepareLink from '../../hooks/usePrepareLink';
import { popRouteEnv } from '../../constants/constRouter';
import { Link } from 'react-router-dom';
import ProdForm from '../../components/catalog/product/ProdForm';

const CatMain: React.FC<RouteComponentProps> = ({ match }) => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const {pathname} = usePrepareLink({
    to:popRouteEnv.ADD_PRODUCT
  })
  
  
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
          <Grid
              container
             
            direction="row"
            justify="flex-start"
            alignItems="center"
            >
              <Typography component="h2" variant="h4" color="primary" gutterBottom>Товары</Typography>
              <Button className={classes.prodAddbutt} variant="contained" color="primary">
                <Link to={pathname} >Добавить товар</Link>
              </Button>

          </Grid>
          <Dialogs to={pathname}>
               <ProdForm />
               
            </Dialogs>  
          <ToolbarTpl />  
          <ProdList />
        </Paper>
      </Grid>
      
    </Grid>
    </Container>
  )
}  
export default CatMain