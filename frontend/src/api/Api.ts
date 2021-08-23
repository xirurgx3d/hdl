import Axios, { AxiosInstance, AxiosPromise } from "axios";
import { TinitialStateProd } from "../redux/reducers/reducerProduct/reducer";

import { CatalogFabr, Category, Product } from "./Fabrick";


 //singleton
 class Api{
  static _instanse:null | object = null
  private URL:string = process.env.REACT_APP_API_URL + '/api' //'http://192.168.99.100/api'
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
    categoryDelet: <T>(id: T) => AxiosPromise,
    Product: (id: string) => AxiosPromise,
    ProductCategoryList: (data: any) => AxiosPromise,
    productlist:(data:any) => AxiosPromise,
    ProdHandle: <T, K>(data: T, id?: K) => AxiosPromise,
    producDelet: <T>(id?:T) => AxiosPromise,
}
 
abstract class ApiSuper{
  public request: AxiosInstance
  constructor(request: AxiosInstance) {
    this.request = request
  }
}
class ApiFabr extends ApiSuper{
  public store:object = {}
  components(comp:any) {
    comp.forEach((Component: any) => {
      const c = new Component(this.request)
      console.log(c)
      this.store = {...this.store,...c}
    })
  }
}


class Auth extends ApiSuper{
  register<T>(data:T) {
    
  }
}
class Cat extends ApiSuper{
  login<T>(data:T) {
    
  }
}


function fackeApi({ api }: any) {
  const request: AxiosInstance = api
  const fabr = new ApiFabr(request)
  fabr.components([
    Auth,Cat
  ])
  return fabr.store
}
const fake = fackeApi(Api.getInstance)
console.log(fake)

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
      categoryDelet<T>(id:T) {
        cat.fabrick(Category)
        return cat.CatalogDelet(id)
      },

      Product(id: string) {
        cat.fabrick(Product)
        return cat.getItem<string>(id)
      },
      productlist(data: any) {
        cat.fabrick(Product)
        return cat.getList<TinitialStateProd>(data)
      },
      ProductCategoryList(data: any) {
        console.log(data)
        return request({
          method: 'post',
          url: '/catalog/product/categoryList',
          data:data
        })
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