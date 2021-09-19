import { Button, CardActions, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICarousel } from '../../../@types/Interface';
import Api, { API } from '../../../api/Api';
import { slidersRoute, stepBuildRoute } from '../../../constants/constFetch';
import { popRouteEnv, RouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import Loader from '../../loader';
import styles from '../style.module.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SliderListTpl from '../../../views/sliders/SiderListTpl';


const useStyles = makeStyles({
  root: {
    width:260,
    marginTop: 25,
    marginLeft: 10,
    marginRight:10
  },
  media: {
    height: 160,
  },
});

type Iprops = {
  year: string
  steps: string
}

const BuildList: React.FC<Iprops> = ({year,steps}): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICarousel>>(null)
  const classes = useStyles();
  
  const fetchHeadSlideList = async () => {
    try {
      const {data} = await API.Sliders.slidelist(stepBuildRoute.build)
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
      await API.Sliders.slideDelet(slidersRoute.headeslide, id)
      await fetchHeadSlideList()
    } catch (error) {
      console.log(error);
    }
  },[])

  

  
  return (
    <>
     <List className={styles.sliders_contaiter}>
    
      {
        !state ? <Loader /> :
          state.map((val: ICarousel, index) => {
            return ( 
              
              <SliderListTpl key={index} images={val.img} route={RouteEnv.STEP_BUILD_BUILD + '/' + val._id} delet={()=> deletHadle(val._id)} />
             
               
           
            )
        })
      }
      
    </List>
    </>
  )
}

export default memo(BuildList)