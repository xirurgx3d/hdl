import ProductStore from "../../store/ProductStore"
import ActionConst from "./constants"


export const initialStateProd = {
  sort: {
    data: -1
  },
  pagination: {
    page: 1,
    limit: 3,
    count:0
  },
  serch:''

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
      break;
    case ActionConst.PAGINATION_PRODUCT:
      return setSate('pagination', action.payload)
      break;
    case ActionConst.SERCH_PRODUCT:
      return setSate('serch', action.payload)
      default: return state
  }
}

const SetState = (state:TinitialStateProd) => (key:string,data:any) =>{
  return {...state,[key]: data}
}

export {reducerProd}