import ActionConst from "./constants"

type TAction = {
  type:string,
  payload?:any
}


// -init state

// state handle prod list
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

const reducerProd = (state:TinitialStateProd = initialStateProd, action:TAction):TinitialStateProd => { 
  const setSate = SetState(state)
  

  switch (action.type) {
   
    
    case ActionConst.SORT_PRODUCT:
      return setSate('sort', action.payload)
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


// state prod list
export const initialStateProdListData = {
  data: [],
  isFetching: true,
}
export type TinitialStateProdListData = typeof initialStateProdListData

const reducerProdListData = (state:TinitialStateProdListData = initialStateProdListData, action:TAction):TinitialStateProdListData => { 
  const setSate = SetState(state)
  

  switch (action.type) {
    case ActionConst.RESULT_PRODUCT:
      return setSate('data', action.payload)
      break;
    case ActionConst.FETCH_START_PRODUCT:
      return setSate('isFetching', action.payload)
      break
    case ActionConst.FETCH_STOP_PRODUCT:
        return setSate('isFetching', action.payload)
      break
    default: return state
  }
}




const SetState = <T>(state:T) => (key:string,data:any) =>{
  return {...state,[key]: data}
}

export {reducerProd,reducerProdListData}