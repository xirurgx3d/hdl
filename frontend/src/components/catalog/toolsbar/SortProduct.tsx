
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useProductStore from '../../../hooks/useProductStore';
import { SortProdList } from '../../../reducers/reducerProduct/action';



const SortProduct: React.FC = (): JSX.Element => {
  const {dispatch} =  useProductStore()
  
  const toValue = (obj: object) => {
    return JSON.stringify(obj)
  }

  const handlSection = (e:any) => {
    const target = e.target.value
    const parse = JSON.parse(target)
    dispatch(SortProdList(parse))
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