import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { memo, useEffect, useState } from 'react';
import { ICate } from '../../../@types/CatalogType';
import Api from '../../../api/Api';
import useProductStore from '../../../hooks/useProductStore';
import { CategoryProdList } from '../../../redux/reducers/reducerProduct/action';
import Loader from './../../loader';


const CateList: React.FC = (): JSX.Element => {
  const [cateList, setCateList] = useState<null | Array<ICate>>(null)
  const { dispatch, state } = useProductStore()



  useEffect(() => {
    (async function anyNameFunction() {
      try {
        const {data} = await Api.categorylist()
        setCateList(data)
      } catch (error) {
        
        setCateList(null)
      }
    })();
    
  }, [])
  
  

  
  return (
    <>
     <List >
    
      {
        !cateList ? <Loader /> :
        cateList.map((val: ICate, index) => {
            return (
             
              <ListItem button
                key={index}
                onClick={() => dispatch(CategoryProdList(val._id))}>
                  
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