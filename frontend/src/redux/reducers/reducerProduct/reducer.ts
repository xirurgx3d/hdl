import ActionConst from "./constants"


export const initialStateProd = {
  data:[],
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
    case ActionConst.GET_PRODUCT:
      return state
      break;
    case ActionConst.RESULT_PRODUCT:
      return {...state,...action.payload}
    break
    case ActionConst.SORT_PRODUCT:
      return setSate('sort', action.payload) //setSate('sort', action.payload)
      break;
    case ActionConst.PAGINATION_PRODUCT:
      return setSate('pagination', action.payload)
      break;
    case ActionConst.SERCH_PRODUCT:
      let pagination = Object.assign(state.pagination, { page: 1 })
      return {
        ...state,
        pagination:{...pagination},
        serch: action.payload
      }
      default: return state
  }
}

const SetState = (state:TinitialStateProd) => (key:string,data:any) =>{
  return {...state,[key]: data}
}

export {reducerProd}