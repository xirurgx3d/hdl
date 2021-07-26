import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICate } from '../../../@types/CatalogType';
import Api from '../../../api/Api';
import { popRouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import Loader from './../../loader';


const CateList: React.FC<{rend:boolean}> = ({rend}): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICate>>(null)
  const [cat,setCat] = useState('')
  const {pathname} = usePrepareLink({
    to:popRouteEnv.ADD_CATE
  })

  const reqCategory = async () => {
    try {
      const {data} = await Api.categorylist()
      setstate(data)
    } catch (error) {
      setstate(null)
    }
  } 

  useEffect(() => {
    reqCategory()
  },[rend])

  const deletHadle = useCallback(async (id: string) => {
    try {
      await Api.categoryDelet(id)
      await reqCategory()
    } catch (error) {
      console.log(error);
    }
  },[])

  

  
  return (
    <>
     <List >
    
      {
        !state ? <Loader /> :
          state.map((val: ICate, index) => {
            return (
             
              <ListItem
                key={index}
                onClick={() => setCat(val._id)}>
                  
                    <ListItemText primary={val.name} />
                    <Button color="primary">
                      <Link className="badge bg-secondary" to={pathname + '?id=' + val._id}>ред</Link>
                    </Button>
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

export default memo(CateList)