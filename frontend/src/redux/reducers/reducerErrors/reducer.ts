import { ActionConstErrors } from "./action"

export const initialStateErrors = {
  productlist: {
    error: false,
    msg:''
  }
}

export type  TinitialStateErrors = typeof initialStateErrors

type TAction = {
  type:string,
  payload?:any
}

const reducerErrors = (state:TinitialStateErrors = initialStateErrors, action:TAction):TinitialStateErrors => { 
  const setSate = SetState(state)
  

  switch (action.type) {
    case ActionConstErrors.PRODUCTLIST_ERROR:
      return setSate('productlist', action.payload)
    break
      default: return state
  }
}
const SetState = (state:TinitialStateErrors) => (key:string,data:any) =>{
  return {...state,[key]: data}
}


export {reducerErrors}