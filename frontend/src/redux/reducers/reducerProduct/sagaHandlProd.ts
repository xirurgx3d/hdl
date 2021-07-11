import { call, select} from "redux-saga/effects";
import { Toptione } from "../../../@types/CatalogType";
import Api from "../../../api/Api";
import { stateMutait } from "../../../utils/utilite";

import { ProdListFetch } from "./sagaProd";

export function* selects() {
  return yield select(state => state.productHandl)
}
// общая праклатка для хенделов
function* ProdListHandlSaga<K extends string,T>(key:K,payload:T,optione?:Toptione) {
  const selectState = stateMutait(yield call(selects), key, payload)
  const option = {
    fetcher: optione ? optione.api : Api.productlist,
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
  
  const optione:Toptione = {
    api:Api.ProductCategoryList
  }
  yield ProdListHandlSaga('category',payload )
}
