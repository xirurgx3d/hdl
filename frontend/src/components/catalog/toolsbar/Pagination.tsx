
import React, { memo } from 'react';
import { typeSelector } from '../../../@types/CatalogType';
import useProductStore from '../../../hooks/useProductStore';
import { PaginationProdListRequest } from '../../../redux/reducers/reducerProduct/action';
import { Iredusers } from '../../../redux/reducers/rootReducer';


const selector = (state: Iredusers) => state.productHandl.pagination


const Pagination: React.FC = (): JSX.Element => {
  const { dispatch, state } = useProductStore<typeSelector<typeof selector>>(selector)

  const handlPagi = (num: number) => {
    if (num !== state?.page) {
      dispatch(PaginationProdListRequest({...state,page:num}))
    }
  }

  return (
    <div className="pagination">
      {
        state &&
        state?.count > 1 && [...Array(state?.count).keys()].map((val: number) => {
         return (<span onClick={()=> handlPagi(val+1)} key={val}>{val+1} -</span>)
       })
      }
    </div>
  )
}


export default memo(Pagination)
