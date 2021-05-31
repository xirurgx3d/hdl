import { put, call, takeEvery } from "redux-saga/effects";
import Api from "../../../api/Api";
import { ProdListError } from "../reducerErrors/action";
import { getProdListResult, SortProdList } from "./action";
import { ActionTypes } from "./ActionTypeProd";
import ActionConst from './constants'

function* ProdListRequestSaga({ payload }: any) {
  try {
    const { data } = yield call(Api.productlist, payload)
    yield put(getProdListResult(data))
  } catch (error) {
    yield put(ProdListError({
      error: true,  
      msg:'Что-то пошло не так'
    }))
  }
  
}


function* watchProdListRequestSaga() {
  yield takeEvery(ActionConst.GET_PRODUCT,ProdListRequestSaga)
}

export {watchProdListRequestSaga}