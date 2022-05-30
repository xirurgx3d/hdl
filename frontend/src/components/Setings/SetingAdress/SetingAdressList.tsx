import { Button, CardActions, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICarousel } from '../../../@types/Interface';
import Api, { API } from '../../../api/Api';
import { setingBuildRoute, slidersRoute } from '../../../constants/constFetch';
import { popRouteEnv, RouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import Loader from './../../loader';
import styles from '../../sliders/style.module.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SliderListTpl from '../../../views/sliders/SiderListTpl';
import { SlidersRequest } from '../../../api/requests/ReqSliders';


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

const SetingAdressList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICarousel>>(null)
  const classes = useStyles();
  
  const fetchHeadSlideList = async () => {
    try {
      const {data} = await SlidersRequest.slidelist(setingBuildRoute.adress)
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
      await SlidersRequest.slideDelet(setingBuildRoute.adress, id)
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
          state.map((val: any, index) => {
            return ( 
              
              
							<ListItem key={index} button>
									<Link className="badge bg-secondary" to={RouteEnv.SETINGS_ADRESS + '/' + val._id}><ListItemText primary={val.title} /></Link>
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

export default memo(SetingAdressList)