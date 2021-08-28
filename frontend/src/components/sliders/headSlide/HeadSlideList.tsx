import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ISliders } from '../../../@types/Interface';
import Api, { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { popRouteEnv, RouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import Loader from './../../loader';


const HeadSlideList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ISliders>>(null)
  
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
     <List >
    
      {
        !state ? <Loader /> :
          state.map((val: ISliders, index) => {
            return (
             
              <ListItem key={index}>
                    <Link className="badge bg-secondary" to={RouteEnv.SLIDERS_HEADER + '/' + val._id}><ListItemText primary={val.title} /></Link>
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

export default memo(HeadSlideList)