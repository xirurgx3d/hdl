import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../../../styled/material_styles';
import { RouteEnv } from '../../../constants/constRouter';
import SetingAdressList from './SetingAdressList';

const SetingAdress = () =>{
	const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<Grid container spacing={3}>
         <Grid item xs={12}>
           <Paper className={fixedHeightPaper}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Адрес
          </Typography>
          <Button className={classes.add_buttons} variant="contained" color="primary">
            <Link to={RouteEnv.SETINGS_ADRESS} >Добавить Адрес</Link>
          </Button>
					<SetingAdressList />

        </Paper>
      </Grid>
      
      
       </Grid>
	)
}
export default SetingAdress