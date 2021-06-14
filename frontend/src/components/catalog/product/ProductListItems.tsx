import { TableCell, TableRow } from '@material-ui/core';
import React, { memo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { IProd } from '../../../@types/CatalogType';
import useProductStore from '../../../hooks/useProductStore';
import { DeletProdList } from '../../../redux/reducers/reducerProduct/action';

type TProp = {
  data:any
}

const ProductListItems: React.FC<TProp> = ({ data }): JSX.Element => {
  const { dispatch } = useProductStore()
  const math = useRouteMatch()

  return (
    <>
       
      {
        
        data.map((val: IProd, index: number) => {
            
            return (
              <TableRow key={val._id}>
                
                <TableCell>{
                val.img !== "undefined"
                  ? <img src={process.env.REACT_APP_API_URL + 'static/img/' + val.img} width="24" />
                  : ""
                }</TableCell>
                <TableCell>{val.title}</TableCell>
                <TableCell><Link className="badge bg-secondary" to={math.path + 'product/edit/' + val._id}>ред</Link></TableCell>
                <TableCell><a className="badge bg-secondary" onClick={() => dispatch(DeletProdList(val._id))}>Удалить</a></TableCell>
                
              </TableRow>
              )
        })
      }
      
      </>
  )
}

export default memo(ProductListItems) 
