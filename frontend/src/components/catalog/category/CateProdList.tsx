import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICate } from '../../../@types/CatalogType';
import Api from '../../../api/Api';
import { popRouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import Loader from './../../loader';


const CateList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICate>>(null)
  const [cat,setCat] = useState('')
  



  useEffect(() => {
    (async function anyNameFunction() {
      try {
        const {data} = await Api.categorylist()
        setstate(data)
      } catch (error) {
        
        setstate(null)
      }
    })();
    
  }, [])
  
  

  
  return (
    <>
     <List >
    
      {
        !state ? <Loader /> :
          state.map((val: ICate, index) => {
            return (
             
              <ListItem button
                key={index}
                onClick={() => setCat(val._id)}>
                  
                    <ListItemText primary={val.name} />
                    
              </ListItem>  
           
            )
        })
      }
      
    </List>
    </>
  )
}

export default memo(CateList)