import { ActionTypes } from "./ActionTypeProd";
import ActionConst from './constants'

export const getProdListRequest = (): ActionTypes.TgetProdListRequest => ({
  type: ActionConst.GET_PRODUCT
})
export const getProdListResult = (result:any): ActionTypes.TgetProdListResult => ({
  type: ActionConst.RESULT_PRODUCT,
  payload:result
})

export const FetchStartProdLis = () => ({
  type: ActionConst.FETCH_START_PRODUCT,
  payload:true
})
export const FetchStopProdLis = () => ({
  type: ActionConst.FETCH_STOP_PRODUCT,
  payload:false
})


export const SortProdList = (params: object): ActionTypes.TSortProduct => ({
  type:ActionConst.SORT_PRODUCT,
  payload:params
})
export const PaginationProdList = (params: object): ActionTypes.TPaginationProduct => ({
  type:ActionConst.PAGINATION_PRODUCT,
  payload:params
})
export const DeletProdList = (params: string): ActionTypes.TDeletProduct => ({
  type:ActionConst.SERCH_PRODUCT,
  payload:params
})