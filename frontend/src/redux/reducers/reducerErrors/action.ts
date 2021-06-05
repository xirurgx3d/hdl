
export const ActionConstErrors = {
  PRODUCTLIST_ERROR:'PRODUCTLIST_ERROR'
} 
export const ProdListError = <T>(error: T,meta:string | null = null)  => ({
  type: ActionConstErrors.PRODUCTLIST_ERROR,
  error: true,
  payload: error,
  meta
})