import Axios, { AxiosInstance, AxiosPromise } from "axios";
import { TinitialStateProd } from "../reducers/reducerProduct/reducer";
import { CatalogFabr, Category, Product } from "./Fabrick";


 //singleton
 class Api{
  static _instanse:null | object = null
  private URL:string = 'http://localhost:4000/api'
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

 interface Iback {
    register:<T>(data:T) => AxiosPromise,
    login: <T>(data: T) => AxiosPromise,
    auth: <T>(data: T) => AxiosPromise,
    categorylist: <T>(id?:T) => AxiosPromise,
    categoryHandle: <T, K>(data: T, id?: K) => AxiosPromise,
    productlist: <T>(id?: T,data?:TinitialStateProd) => AxiosPromise,
    ProdHandle: <T, K>(data: T, id?: K) => AxiosPromise,
    producDelet: <T>(id?:T) => AxiosPromise,
}
 




 function getApi({api}:any):Iback{
    const request: AxiosInstance = api
    const cat = new CatalogFabr(request)
    return {
      register<T>(data:T) {
        return request({
          method: 'post',
          url: '/auth/reg',
          data: data
        })
      },
      login<T>(data:T) {
        return request({
          method: 'post',
          url: '/auth/login',
          headers: { 'authorization': 'Basic ' + data }
        })
      },
      auth<T>(token:T) {
        return request({
          method: 'post',
          url: '/auth/auth',
          headers: { 'Authorization': 'Bearer ' + token }
        })
      },
      categorylist<T>(id?:T) {
        cat.fabrick(Category)
        return cat.getList(id)
      },
      categoryHandle<T, K>(data: T, id?: K) {
        cat.fabrick(Category)
        return cat.catalogHandle(data,id)
      },
      productlist<T>(id?: T,data?:TinitialStateProd) {
        cat.fabrick(Product)
        return cat.getList(id,data)
      },
      ProdHandle<T, K>(data: T, id?: K) {
        cat.fabrick(Product)
        return cat.catalogHandle(data,id)
      },
      producDelet<T>(id:T) {
        return request({
          method: 'delete',
          url: '/catalog/product/delet/' + id,
        })
      },
      


    }
 }

 export default getApi(Api.getInstance)