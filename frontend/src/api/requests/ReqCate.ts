import { AxiosPromise } from "axios";
import { ApiSuper } from "../Api";

export interface ICateRequest{
  categorylist: <T>(id?:T) => AxiosPromise,
  categoryHandle: <T, K>(data: T, id?: K) => AxiosPromise,
  categoryDelet: <T>(id: T) => AxiosPromise,
}

export default class extends ApiSuper implements ICateRequest{
  categorylist<T>(id?:T) {
    return id
      ? this.request({
        method: 'get',
        url: '/catalog/category/list/' + id,
      })
      : this.request({
        method: 'get',
        url: '/catalog/category/list',
    })
  }
  categoryHandle<T, K>(data: T, id?: K) {
    return id
      ? this.request({
        method: 'post',
        url: '/catalog/category/edit/' + id,
        data: data
      })
      : this.request({
        method: 'post',
        url: '/catalog/category/add',
        data: data
      })
  }
  categoryDelet<T>(id:T) {
    return this.request({
      method: 'delete',
      url: '/catalog/category/delet/' + id,
    })
  }
}