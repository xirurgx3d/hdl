import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';


const Loader: React.FC = (): JSX.Element => {
  
  return (
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
      <CircularProgress />
    </Grid>
    
  )
}

export default Loader