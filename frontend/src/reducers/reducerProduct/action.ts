import { ActionTypes } from "./ActionTypeProd";
import ActionConst from './constants'

export const SortProdList = (params: object): ActionTypes.TSortProduct => ({
  type:ActionConst.SORT_PRODUCT,
  payload:params
})