import { call, select} from "redux-saga/effects";
import Api from "../../../api/Api";
import { stateMutait } from "../../../utils/utilite";

import { ProdListFetch } from "./sagaProd";

export function* selects() {
  return yield select(state => state.productHandl)
}
// общая праклатка для хенделов
function* ProdListHandlSaga<K extends string,T>(key:K,payload:T) {
  const selectState = stateMutait(yield call(selects), key, payload)
  console.log(selectState)
  const option = {
    fetcher:Api.productlist,
    fetcherBody: selectState,
  }
  yield ProdListFetch(option)
  
}

// сортировка
export function* ProdListSortSaga({ payload }: any) {
  yield ProdListHandlSaga('sort',payload)
}
// поиск
export function* ProdListSerchSaga({ payload }: any) {
  yield ProdListHandlSaga('serch',payload)
}
// пагинация
export function* ProdListPaginationSaga({ payload }: any) {
  yield ProdListHandlSaga('pagination',payload)
}
//категории
export function* ProdListCategorySaga({ payload }: any) {
  yield ProdListHandlSaga('category',payload)
}
