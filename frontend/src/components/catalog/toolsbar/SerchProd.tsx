
import React, { memo } from 'react';
import { SerchProdList } from '../../../reducers/reducerProduct/action';
import { debounse } from '../../../utils/utilite';

type IPagination = {
  disph: any,
}

const SerchProd: React.FC<IPagination> = ({ disph }): JSX.Element => {
  const debouns = debounse()

  const handlSerch = (e:any) => {
    const value = e.target.value
    debouns(()=> disph(SerchProdList(value)),1000)
    //disph(PaginationProdList({...pagination,page:num}))
  }

  
  
  return (
    <div className="serch-box">
      <input type="text" onChange={handlSerch} />
    </div>
  )
}

export default memo(SerchProd)