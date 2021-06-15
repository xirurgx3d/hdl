
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useProductStore from '../../../hooks/useProductStore';
import { SortProdList } from '../../../reducers/reducerProduct/action';
import { Iredusers } from '../../../redux/reducers/rootReducer';
import { useStyles } from '../../../styled/material_styles';



const SortProduct: React.FC = (): JSX.Element => {
  const {state, dispatch } = useProductStore((state: Iredusers) => state.productHandl.sort)
  const classes = useStyles()
  
  const toValue = (obj: object) => {
    return JSON.stringify(obj)
  }

  const handlSection = (e:any) => {
    const target = e.target.value
    const parse = JSON.parse(target)
    dispatch(SortProdList(parse))
  }
  

  return (
   
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Новые</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={JSON.stringify(state)}
          onChange={handlSection}
          className={classes.selectEmpty}
        >
          
          <MenuItem value={toValue({data:-1})}>Новые</MenuItem>
          <MenuItem value={toValue({data:1})}>Старые</MenuItem>
          <MenuItem value={toValue({ title: 1 })}>Алфовиту</MenuItem>
          <MenuItem value={toValue({ price: -1 })}>Цена убывание</MenuItem>
          <MenuItem value={toValue({price:1})}>Цена возростание</MenuItem>
        </Select>
        <FormHelperText>Сортировка товаров</FormHelperText>
      </FormControl>
    
   
  )
}

export default memo(SortProduct)