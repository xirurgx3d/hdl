import constants from "./constants";


export declare namespace ActionTypes {
  type TgetProdListRequest = {
    type: typeof constants.GET_PRODUCT
    payload:object
  }
  type TgetProdListResult = {
    type: typeof constants.RESULT_PRODUCT
    payload:object
  }
  type TSortProduct = {
      type: typeof constants.SORT_PRODUCT
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
}