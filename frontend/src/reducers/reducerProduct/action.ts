import { ActionTypes } from "./ActionTypeProd";
import ActionConst from './constants'

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