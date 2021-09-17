import { Button, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICarousel } from '../../../@types/Interface';
import Api, { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { popRouteEnv, RouteEnv } from '../../../constants/constRouter';
import Loader from './../../loader';
import styles from '../style.module.css'


import Typography from '@material-ui/core/Typography';
import SliderListTpl from '../../../views/sliders/SiderListTpl';




const SpecificList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICarousel>>(null)

  const fetchHeadSlideList = async () => {
    try {
      const {data} = await API.Sliders.slidelist(slidersRoute.specific)
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
      await API.Sliders.slideDelet(slidersRoute.specific, id)
      await fetchHeadSlideList()
    } catch (error) {
      console.log(error);
    }
  },[])

  

  
  return (
    <>
     <List className={styles.sliders_contaiter} >
    
      {
        !state ? <Loader /> :
          state.map((val: ICarousel, index) => {
            return (
              <SliderListTpl key={index} images={val.img} route={RouteEnv.SLIDERS_SPECIFIC + '/' + val._id} delet={()=> deletHadle(val._id)} >
                <Typography gutterBottom variant="h4" component="h2">
                      <Link className="badge bg-secondary" to={RouteEnv.SLIDERS_SPECIFIC + '/' + val._id}><ListItemText primary={val.title} /></Link>
                    </Typography>
              </SliderListTpl>
              
              
           
            )
        })
      }
      
    </List>
    </>
  )
}

export default memo(SpecificList)