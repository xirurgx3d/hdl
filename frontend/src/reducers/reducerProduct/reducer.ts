import ProductStore from "../../store/ProductStore"
import ActionConst from "./constants"


export const initialStateProd = {
  sort: {
    data: -1
  }
}
export type TinitialStateProd = typeof initialStateProd

type TAction = {
  type:string,
  payload?:any
}

const reducerProd = (state:TinitialStateProd = initialStateProd, action:TAction):TinitialStateProd => { 
  const setSate = SetState(state)
  

  switch (action.type) {
    case ActionConst.SORT_PRODUCT:
      return setSate('sort', action.payload) //setSate('sort', action.payload)
    break
    
      default: return state
  }
}

const SetState = (state:TinitialStateProd) => (key:string,data:any) =>{
  return {...state,[key]: data}
}

export {reducerProd}