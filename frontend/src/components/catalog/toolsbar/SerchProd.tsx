
import React, { memo } from 'react';
import { PaginationProdList } from '../../../reducers/reducerProduct/action';
import { TinitialStateProd } from '../../../reducers/reducerProduct/reducer';

type IPagination = {
  disph: any,
}

const SerchProd: React.FC<IPagination> = ({disph}): JSX.Element => {

  const handlSerch = (e:any) => {
    console.log(e.target.value);
    //disph(PaginationProdList({...pagination,page:num}))
  }

  
  
  return (
    <div className="serch-box">
      <input type="text" onChange={handlSerch} />
    </div>
  )
}

export default memo(SerchProd)
