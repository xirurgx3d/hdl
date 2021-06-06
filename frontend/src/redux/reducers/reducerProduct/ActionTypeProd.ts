import constants from "./constants";


export declare namespace ActionTypes {
  type TgetProdListRequest = {
    type: typeof constants.GET_PRODUCT
  }
  type TgetProdListResult = {
    type: typeof constants.RESULT_PRODUCT
    payload:object
  }
  type TSortProduct = {
      type: typeof constants.SORT_PRODUCT
      payload:object
  }
  type TPaginationProductRequest = {
    type: typeof constants.PAGINATION_PRODUCT_REQUEST
    payload:object
  }
  type TPaginationProduct = {
    type: typeof constants.PAGINATION_PRODUCT
    payload:object
  }
  type TSerchProduct = {
    type: typeof constants.SERCH_PRODUCT
    payload:string
  }
  type TDeletProduct = {
    type: typeof constants.DELET_PRODUCT
    payload:string
  }
}