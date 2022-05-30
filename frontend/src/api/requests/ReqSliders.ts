import Axios, { AxiosInstance, AxiosPromise } from "axios";
import { RequstAbstract } from ".";


class Api{
  static _instanse:null | object = null
  private URL:string = process.env.REACT_APP_API_URL as string //'http://192.168.99.100/api'
  api:AxiosInstance

   constructor(){
    this.api = Axios.create({
      baseURL: this.URL,
      })
   }
   static get getInstance(){
      if(!Api._instanse){
        Api._instanse = new Api()
      }
      return Api._instanse
    }
 }

export interface ISlidersRequest{
  slidelist: <T>(route:string,id?:T) => AxiosPromise,
  slideHandle: <T, K>(route:string,data: T, id?: K) => AxiosPromise,
  slideDelet: <T>(route:string,id: T) => AxiosPromise,
}

export default class Sliders{
	protected readonly request: any
	constructor({api}: any) {

    this.request = api
  }
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

export const SlidersRequest = new Sliders(Api.getInstance)