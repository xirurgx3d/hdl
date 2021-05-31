import { combineReducers } from "redux";
import { reducerProd, TinitialStateProd } from './reducerProduct/reducer'
import { reducerErrors, TinitialStateErrors } from './reducerErrors/reducer';

export interface Iredusers {
    products: TinitialStateProd,
    errors: TinitialStateErrors
}

export default combineReducers({
    products: reducerProd,
    errors: reducerErrors
})