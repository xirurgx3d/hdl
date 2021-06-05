
import React, { memo } from 'react';
import { PaginationProdList } from '../../../reducers/reducerProduct/action';
import { TinitialStateProd } from '../../../reducers/reducerProduct/reducer';



const Pagination: React.FC = (): JSX.Element => {
  //const {pagination} = state

  const handlPagi = (num: number) => {
    //console.log({...pagination,page:num});
    //disph(PaginationProdList({...pagination,page:num}))
  }

  /*
  {
        pagination.count > 1 && [...Array(pagination.count).keys()].map((val: number) => {
         return (<span onClick={()=> handlPagi(val+1)} key={val}>{val+1} -</span>)
       })
      }*/
  
  return (
    <div className="pagination">
      
    </div>
  )
}


export default memo(Pagination)

/*
(prevProps: IPagination, nextProps: IPagination) => {
  const prev = prevProps.state.pagination.page
  const next = nextProps.state.pagination.page
  console.log('prev -',prev,'next -', next)
  if (prev == next) {
    
  }
  return false
}

*/