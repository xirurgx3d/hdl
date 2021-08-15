import { Button, TableCell, TableRow, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { IProd } from '../../../@types/CatalogType';
import { popRouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import useProductStore from '../../../hooks/useProductStore';
import { DeletProdList } from '../../../redux/reducers/reducerProduct/action';
import { useStyles } from '../../../styled/material_styles';

type TProp = {
  data:any
}

const ProductListItems: React.FC<TProp> = ({ data }): JSX.Element => {
  const { dispatch } = useProductStore()
  const classes = useStyles()
  const {pathname} = usePrepareLink({
    to:popRouteEnv.ADD_PRODUCT
  })

  return (
    <>
       
      {
        
        data.map((val: IProd, index: number) => {
            return (
              <TableRow key={val._id}>
                
                <TableCell className={classes.prodImgbox}>{
                val.img
                  ? <img src={process.env.REACT_APP_API_URL + 'api/static/img/' + val.img} width="24" />
                  : ""
                }</TableCell>
                <TableCell>
                  
                  <Typography className={classes.prodTitle} variant="h6" component="h6">
                    {val.title}
                  </Typography>
                  <div className={classes.handleboxe}>
                  <Button className={classes.prodHandbutt} size="small" color="primary"><Link to={pathname + '?id=' + val._id}>ред</Link></Button>
                  <Button className={classes.prodHandbutt} onClick={() => dispatch(DeletProdList(val._id))} color="secondary">Удалить</Button>
                  </div>
                </TableCell>
                <TableCell>{val.price}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                
              </TableRow>
              )
        })
      }
      
      </>
  )
}

export default memo(ProductListItems) 
