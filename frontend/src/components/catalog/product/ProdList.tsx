import React, { memo, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Api from '../../../api/Api';
import Pagination from '../toolsbar/Pagination';
import { Iredusers } from '../../../redux/reducers/rootReducer';
import { createSelector } from 'reselect';
import useProductStore from '../../../hooks/useProductStore';
import { getProdListRequest } from '../../../redux/reducers/reducerProduct/action';
import ProductListItems from './ProductListItems';
import { typeSelector } from '../../../@types/CatalogType';


const ProdData = (state:Iredusers)  => state.productData.data
const isSpiners = (state: Iredusers) => state.productData.isFetching

const selectore = createSelector(
  [ProdData,isSpiners],
  (state, spiner) => {
    return {data:state,spiner}
  }
)

const ProdList: React.FC = (): JSX.Element => {
  const { dispatch, state } = useProductStore<typeSelector<typeof selectore>>(selectore)

  useEffect(() => {
    dispatch(getProdListRequest())
    
  }, [])

  //console.log('prod rend',state);
  
  return (
    <>
      {
        state?.spiner
          ? <h1>LOAD</h1>
          :
          <>
          <ProductListItems data={state?.data} />
          <Pagination/>
          </>
      }
      
    </>
  )
}

export default memo(ProdList)