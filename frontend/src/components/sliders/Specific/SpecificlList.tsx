import { Button, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICarousel } from '../../../@types/Interface';
import Api, { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { popRouteEnv, RouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import Loader from './../../loader';
import styles from '../style.module.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


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

const SpecificList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICarousel>>(null)
  const classes = useStyles();

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
              <Card key={index} className={classes.root} >
                <CardActionArea className={styles.cartbox}>
                  <div className={styles.cartbox_icon}>
                        <DeleteIcon onClick={()=> deletHadle(val._id)} />
                    </div>
                  <CardMedia
                    className={classes.media}
                    image={process.env.REACT_APP_API_URL + '/api/static/img/' + String(val.img)}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                      <Link className="badge bg-secondary" to={RouteEnv.SLIDERS_SPECIFIC + '/' + val._id}><ListItemText primary={val.title} /></Link>
                    </Typography>
                    
                  </CardContent>
                </CardActionArea>
                
                
              </Card>  
              
           
            )
        })
      }
      
    </List>
    </>
  )
}

export default memo(SpecificList)