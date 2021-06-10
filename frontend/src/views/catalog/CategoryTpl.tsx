import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../../styled/material_styles';
import CateList from '../../components/catalog/category/CateList';
import CateForm from '../../components/catalog/category/CateForm';
import { I } from '../../@types/Interface';

const CategoryTpl: React.FC<I.Irote> = ({ history, match }) => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const id = match.params.id

   return (
    <Container maxWidth="lg" className={classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
           <Paper className={fixedHeightPaper}>
           <button onClick={() => history.goBack()}>Назад</button>
            <CateForm id={id} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper}>
          <CateList />
        </Paper>
      </Grid>
      
    </Grid>
    </Container>
  )
}
export default CategoryTpl