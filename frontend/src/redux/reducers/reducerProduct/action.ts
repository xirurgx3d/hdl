import { ActionTypes } from "./ActionTypeProd";
import ActionConst from './constants'

export const getProdListRequest = (): ActionTypes.TgetProdListRequest => ({
  type: ActionConst.GET_PRODUCT
})
export const getProdListResult = (result:[]): ActionTypes.TgetProdListResult => ({
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



export const PaginationProdListRequest = (params: object): ActionTypes.TPaginationProductRequest => ({
  type:ActionConst.PAGINATION_PRODUCT_REQUEST,
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

export const DeletProdList = (params: string): ActionTypes.TDeletProduct => ({
  type:ActionConst.DELET_PRODUCT,
  payload:params
})

export const CategoryProdList = (params: string): ActionTypes.TCategoryProduct => ({
  type:ActionConst.CATEGORY_PRODUCT,
  payload:params
})