import { AxiosPromise } from "axios";
import { RequstAbstract } from ".";

export interface ISlidersRequest{
  slidelist: <T>(route:string,id?:T) => AxiosPromise,
  slideHandle: <T, K>(route:string,data: T, id?: K) => AxiosPromise,
  slideDelet: <T>(route:string,id: T) => AxiosPromise,
}

export default class Sliders extends RequstAbstract implements ISlidersRequest{
  slidelist<T>(route:string,id?:T) {
    return id
      ? this.request({
        method: 'get',
        url: `/components/${route}/list/` + id,
      })
      : this.request({
        method: 'get',
        url: `/components/${route}/list`,
    })
  }
  slideHandle<T, K>(route: string, data: T, id?: K) {
    //console.log(data)
    return id
      ? this.request({
        method: 'put',
        url: `/components/${route}/edit/` + id,
        data: data
      })
      : this.request({
        method: 'post',
        url: `/components/${route}/add`,
        data: data
      })
  }
  slideDelet<T>(route:string,id:T) {
    return this.request({
      method: 'delete',
      url: `/components/${route}/delet/` + id,
    })
  }
}