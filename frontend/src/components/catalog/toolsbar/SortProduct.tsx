
import React, { memo } from 'react';
import { SortProdList } from '../../../reducers/reducerProduct/action';



const SortProduct: React.FC<{disph:any}> = ({disph}): JSX.Element => {
  
  const toValue = (obj: object) => {
    return JSON.stringify(obj)
  }

  const handlSection = (e:any) => {
    const target = e.target.value
    disph(SortProdList(JSON.parse(target)))
  }

 
  
  return (
    <div className="sort_box">
      <select onChange={handlSection}>
        <option value={toValue({data:-1})}>Новые</option>
        <option value={toValue({data:1})}>Старые</option>
        <option value={toValue({ title: 1 })}>Алфовиту</option>
        <option value={toValue({ price: -1 })}>Цена убывание</option>
        <option value={toValue({price:1})}>Цена возростание</option>
      </select> 
    </div>
  )
}

export default memo(SortProduct)