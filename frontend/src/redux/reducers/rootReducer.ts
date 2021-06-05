import { combineReducers } from "redux";
import { reducerProd, reducerProdListData, TinitialStateProd, TinitialStateProdListData } from './reducerProduct/reducer'
import { reducerErrors, TinitialStateErrors } from './reducerErrors/reducer';

export interface Iredusers {
    productHandl: TinitialStateProd,
    productData:TinitialStateProdListData,
    errors: TinitialStateErrors
}

export default combineReducers({
    productHandl: reducerProd,
    productData:reducerProdListData,
    errors: reducerErrors
})