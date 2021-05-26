import constants from "./constants";


export declare namespace ActionTypes {
  type TSortProduct = {
      type: typeof constants.SORT_PRODUCT
      payload:object
  }
  type TPaginationProduct = {
    type: typeof constants.PAGINATION_PRODUCT
    payload:object
  }
  
  
}