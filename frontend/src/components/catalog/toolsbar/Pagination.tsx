
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { memo } from 'react';
import { typeSelector } from '../../../@types/CatalogType';
import useProductStore from '../../../hooks/useProductStore';
import { PaginationProdListRequest } from '../../../redux/reducers/reducerProduct/action';
import { Iredusers } from '../../../redux/reducers/rootReducer';


const selector = (state: Iredusers) => state.productHandl.pagination


const Paginations: React.FC = (): JSX.Element => {
  const { dispatch, state } = useProductStore<typeSelector<typeof selector>>(selector)

  const handlPagi = (event:any, num:number) => {
    if (num !== state?.page) {
      dispatch(PaginationProdListRequest({...state,page:num}))
    }
  }
  

  return (
    <div style={{ paddingTop: 20 }}>
      <Grid
        container
          direction="row"
          justify="center"
          alignItems="center"
      >
      {
        state && <Pagination onChange={handlPagi} page={state.page} count={state.count} size="small" />
      }
      </Grid>
    </div>
  )
}


export default memo(Paginations)
