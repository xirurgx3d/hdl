import { Button, CardActions, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICarousel } from '../../../@types/Interface';
import Api, { API } from '../../../api/Api';
import { slidersRoute, stepBuildRoute } from '../../../constants/constFetch';
import { RouteEnv } from '../../../constants/constRouter';
import Loader from '../../loader';




const StepsList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICarousel>>(null)
  
  
  const fetchHeadSlideList = async () => {
    try {
      const {data} = await API.Sliders.slidelist(stepBuildRoute.step)
      setstate(data)
    } catch (error) {
      setstate(null)
    }
  } 

  useEffect(() => {
    fetchHeadSlideList()
  },[])

  const deletHadle = useCallback(async (id: string) => {
    try {
      await API.Sliders.slideDelet(stepBuildRoute.step, id)
      await fetchHeadSlideList()
    } catch (error) {
      console.log(error);
    }
  },[])

  

  
  return (
    <>
     <List >
    
      {
        !state ? <Loader /> :
        state.map((val: {title:string,_id:string}, index) => {
            return (
             
              <ListItem button>
                  <Link className="badge bg-secondary" to={RouteEnv.STEP_BUILD_STEPS + '/' + val._id}><ListItemText primary={val.title} /></Link>
                  <ListItemIcon>
                    <DeleteIcon onClick={()=> deletHadle(val._id)} />
                </ListItemIcon>
              </ListItem> 
              
           
            )
        })
      }
      
    </List>
    </>
  )
}

export default memo(StepsList)