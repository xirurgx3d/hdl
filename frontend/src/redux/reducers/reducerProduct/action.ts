import { ActionTypes } from "./ActionTypeProd";
import ActionConst from './constants'

export const getProdListRequest = (params:any): ActionTypes.TgetProdListRequest => ({
  type: ActionConst.GET_PRODUCT,
  payload:params
})
export const getProdListResult = (result:any): ActionTypes.TgetProdListResult => ({
  type: ActionConst.RESULT_PRODUCT,
  payload:result
})


export const SortProdList = (params: object): ActionTypes.TSortProduct => ({
  type:ActionConst.SORT_PRODUCT,
  payload:params
})
export const PaginationProdList = (params: object): ActionTypes.TPaginationProduct => ({
  type:ActionConst.PAGINATION_PRODUCT,
  payload:params
})
export const SerchProdList = (params: string): ActionTypes.TSerchProduct => ({
  type:ActionConst.SERCH_PRODUCT,
  payload:params
})