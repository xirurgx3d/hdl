import { all } from "redux-saga/effects";
import { watchProdListRequestHandlSaga, watchProdListRequestSaga } from "../reducers/reducerProduct/sagaProd";


export default function* rootSaga() {
    yield all([
        watchProdListRequestSaga(),
        watchProdListRequestHandlSaga()
    ])
    
}
