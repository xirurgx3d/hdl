import React, { memo } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import useProductStore from '../../../hooks/useProductStore';
import { SerchProdList } from '../../../reducers/reducerProduct/action';
import { Iredusers } from '../../../redux/reducers/rootReducer';
import { debounse } from '../../../utils/utilite';


const selectore = createSelector(
  (state:Iredusers) => state.productHandl.serch,
  (serch:string) => serch
)
type typeSelect  = ReturnType<typeof selectore>

const SerchProd: React.FC = (): JSX.Element => {
  const {dispatch,state} =  useProductStore<typeSelect>(selectore)
  
  const handlSerch = (e:any) => {
    const value = e.target.value
    dispatch(SerchProdList(value))
  }

  //console.log('serch rend',state);

  
  
  return (
    <div className="serch-box">
      <input type="text" onChange={handlSerch} defaultValue={state as string} />
    </div>
  )
}

export default memo(SerchProd) 
