import { put, call, takeEvery, select, take, takeLatest, delay, fork} from "redux-saga/effects";
import Api from "../../../api/Api";
import { stateMutait } from "../../../utils/utilite";
import { ProdListError } from "../reducerErrors/action";
import { FetchStartProdLis, FetchStopProdLis, getProdListResult, PaginationProdList } from "./action";
import ActionConst from './constants'
import { ProdListCategorySaga, ProdListPaginationSaga, ProdListSerchSaga, ProdListSortSaga, selects } from "./sagaHandlProd";

export function* ProdListFetch(option: any) {
  try {
    yield put(FetchStartProdLis())
    const { data: { data, pagination } } = yield call(option.fetcher, option.fetcherBody)
    /*
    const request = option.selectState
      ? Object.assign(option.selectState, data)
      : data
    */
    //console.log(data,pagination)
    yield put(PaginationProdList(pagination)) 
    yield put(getProdListResult(data))

  } catch (error) {
    yield put(ProdListError<typeof error>(error,'Что-то пошло не так'))
  }
  finally {
    yield put(FetchStopProdLis())
  }
}


// первоначальны запрос с деф стейтом
function* ProdListRequestSaga() {
  const selectState = yield call(selects)
  const option = {
    fetcher:Api.productlist,
    fetcherBody: selectState,
  }
  yield ProdListFetch(option)
}

// удаление 
function* ProdListDeletSaga({ payload }: any) {
  try {
    yield fork(Api.producDelet, payload)
    yield delay(500)
    yield ProdListRequestSaga()
  } catch (error) {
    yield put(ProdListError<typeof error>(error,'Что-то пошло не так'))
  }  
  
}





function* watchProdListRequestSaga() {
  yield takeEvery(ActionConst.GET_PRODUCT, ProdListRequestSaga)
  yield takeLatest(ActionConst.DELET_PRODUCT, ProdListDeletSaga)
}
function* watchProdListRequestHandlSaga() {
  yield takeEvery(ActionConst.SORT_PRODUCT, ProdListSortSaga)
  yield takeEvery(ActionConst.PAGINATION_PRODUCT_REQUEST, ProdListPaginationSaga)
  yield takeLatest(ActionConst.SERCH_PRODUCT, ProdListSerchSaga)
  yield takeEvery(ActionConst.CATEGORY_PRODUCT, ProdListCategorySaga)
}


export {
  watchProdListRequestSaga,
  watchProdListRequestHandlSaga
}