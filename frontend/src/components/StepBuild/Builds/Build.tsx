import React, { useEffect, useState,useCallback, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import clsx from 'clsx';
import СarouselList from './BuildList';
import { useStyles } from '../../../styled/material_styles';
import { RouteEnv } from '../../../constants/constRouter'; 
import FormControl from '@material-ui/core/FormControl';
import { API } from '../../../api/Api';
import { stepBuildRoute } from '../../../constants/constFetch';
import { initialStateBuild, reducerBuild } from '../../../reducers/reducerBuild';
import BuildList from './BuildList';



type Tsteps = {
  _id:string
  title:string
}

const Build: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [steps, setStetps] = useState<Tsteps[] | null>()
  const [stepsValue, setStetpsValue] = useState('')
  const [YearValue, setYearValue] = useState('')

  useEffect(() => {
    (async function() {
      try {
        const { data } =  await API.Sliders.slidelist(stepBuildRoute.step)
        setStetps(data)
      } catch (error) {
        setStetps(null)
      }
      
    })();
  }, [])

  const StepsChange = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.value as typeof stepsValue;
    setStetpsValue(name);
  }, [setStetpsValue])
  
  const YearChange = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.value as typeof stepsValue;
    setYearValue(name);
  },[setYearValue])

  return (
    <Grid container spacing={3}>
         <Grid item xs={12}>
           <Paper className={fixedHeightPaper}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Ход строительства
          </Typography>
          <Button className={classes.add_buttons} variant="contained" color="primary">
            <Link to={RouteEnv.STEP_BUILD_BUILD} >Добавить Слайдер</Link>
          </Button>
          <Grid container >
            { steps &&
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Очереди</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={stepsValue}
                    onChange={StepsChange}
                  >
                    {
                      steps.map((val:Tsteps,index:number) => {
                        return (
                          <MenuItem value={val._id}>{val.title}</MenuItem>
                        )
                      })
                    }
                    
                  </Select>
                </FormControl>
              </Grid>
            }
            <Grid item >  
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Год</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={stepsValue}
                    onChange={YearChange}
                  >
                    <MenuItem value={10}>2021</MenuItem>
                    <MenuItem value={20}>2022</MenuItem>
                    <MenuItem value={30}>2023</MenuItem>
                  </Select>
                </FormControl>
            </Grid>
          </Grid>
          <BuildList steps={stepsValue} year={YearValue} />   
            
        </Paper>
      </Grid>
      
      
       </Grid>
    
  )
}

export default Build