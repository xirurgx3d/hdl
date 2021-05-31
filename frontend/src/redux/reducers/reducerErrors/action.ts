
export const ActionConstErrors = {
  PRODUCTLIST_ERROR:'PRODUCTLIST_ERROR'
} 
export const ProdListError = (params: any)  => ({
  type: ActionConstErrors.PRODUCTLIST_ERROR,
  payload:params
})