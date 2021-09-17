import { Button, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ISliders } from '../../../@types/Interface';
import Api, { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { popRouteEnv, RouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import Loader from './../../loader';
import styles from '../style.module.css'
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

const HeadSlideList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ISliders>>(null)
  const classes = useStyles();
  
  const {pathname} = usePrepareLink({
    to:popRouteEnv.ADD_CATE
  })

  const fetchHeadSlideList = async () => {
    try {
      const {data} = await API.Sliders.slidelist(slidersRoute.headeslide)
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
          state.map((val: ISliders, index) => {
            return (
              <SliderListTpl key={index} images={val.img} delet={()=> deletHadle(val._id)} route={RouteEnv.SLIDERS_HEADER + '/' + val._id} >
                <Typography gutterBottom variant="h5" component="h2">
                      <Link className="badge bg-secondary" to={RouteEnv.SLIDERS_HEADER + '/' + val._id}><ListItemText primary={val.title} /></Link>
                    </Typography>
              </SliderListTpl>
              
            )
        })
      }
      
    </List>
    </>
  )
}

export default memo(HeadSlideList)