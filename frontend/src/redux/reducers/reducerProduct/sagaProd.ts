import { put, call, takeEvery, select, take, takeLatest, delay, fork} from "redux-saga/effects";
import Api from "../../../api/Api";
import { stateMutait } from "../../../utils/utilite";
import { ProdListError } from "../reducerErrors/action";
import { FetchStartProdLis, FetchStopProdLis, getProdListResult, PaginationProdList } from "./action";
import ActionConst from './constants'

function* selects() {
  return yield select(state => state.productHandl)
}



function* ProdListFetch(option: any) {
  try {
    yield put(FetchStartProdLis())
    const { data: { data, pagination } } = yield call(Api.productlist, option.fetcherBody)
    /*
    const request = option.selectState
      ? Object.assign(option.selectState, data)
      : data
    */
   //console.log(pagination)
    yield put(PaginationProdList(pagination)) 
    yield put(getProdListResult(data))

  } catch (error) {
    yield put(ProdListError<typeof error>(error,'Что-то пошло не так'))
  }
  finally {
    yield put(FetchStopProdLis())
  }
}

function* ProdListRequestSaga() {
  const selectState = yield call(selects)
  const option = {
    fetcherBody: selectState,
  }
  yield ProdListFetch(option)
}

function* ProdListSortSaga({ payload }: any) {
  const selectState = stateMutait(yield call(selects),'sort',payload)
  const option = {
    fetcherBody: selectState,
  }
  yield ProdListFetch(option)
  
}


function* ProdListSerchSaga({ payload }: any) {
    yield delay(800)
    const selectState = stateMutait(yield call(selects), 'serch', payload)
    const option = {
      fetcherBody: selectState,
    }
    yield ProdListFetch(option)
}



function* watchProdListRequestSaga() {
  yield takeEvery(ActionConst.GET_PRODUCT, ProdListRequestSaga)
  yield takeEvery(ActionConst.SORT_PRODUCT, ProdListSortSaga) 
  yield takeLatest(ActionConst.SERCH_PRODUCT, ProdListSerchSaga)
}

export {
  watchProdListRequestSaga,
}