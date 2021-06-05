import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Iredusers } from '../redux/reducers/rootReducer';

export default <T>(selector:any = null) => {
  let state:T | null | undefined
  const udispatch = useDispatch()
  if (selector) {
    state = useSelector(selector)
  }
  

  const dispatch = useCallback(action => udispatch(action),[udispatch])

  return {
    dispatch,
    state
  }
}