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
    <ul className="list-group">
       
      {
        
        data.map((val: IProd, index: number) => {
            
            return (
            
              <li key={val._id} className="list-group-item">
                {
                val.img !== "undefined"
                  ? <img src={process.env.REACT_APP_API_URL + 'static/img/' + val.img} width="24" />
                  : ""
                }
                <span>{val.title}</span>
              <Link className="badge bg-secondary" to={math.path + 'product/edit/' + val._id}>ред</Link>
              <a className="badge bg-secondary" onClick={() => dispatch(DeletProdList(val._id))}>Удалить</a>
            </li>)
        })
      }
      
      </ul>
  )
}

export default memo(ProductListItems) 
