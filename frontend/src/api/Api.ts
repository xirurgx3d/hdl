import Axios, { AxiosInstance, AxiosPromise } from "axios";
import { TinitialStateProd } from "../redux/reducers/reducerProduct/reducer";

import { CatalogFabr, Category, Product } from "./Fabrick";
import store from './../redux/store';


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
  protected readonly request: AxiosInstance
  constructor(request: AxiosInstance) {
    this.request = request
  }
}


class ApiFabr extends ApiSuper{
  public store!: QP;
  
  components<T>(arr: T[]):void {
    arr.forEach((Component:any) => {
      this.store = {...this.store,[Component.name]: new Component(this.request)}
    })
    
  }
}

interface IAuth{
  register<T>(data:T):void
}

class Auth extends ApiSuper implements IAuth{
  register<T>(data:T) {
    
  }
}
class Cat extends ApiSuper{
  login<T>(data?:T) {
    console.log('this cat',this)
  }
}
type IAPI = typeof Auth | typeof Cat

interface QP{
  Auth:IAuth
}

function fackeApi({ api }: any): QP {
  const arr = [Auth,Cat ]
  const fabr = new ApiFabr(api)
  fabr.components<IAPI>(arr)
  return fabr.store

}
const fake = fackeApi(Api.getInstance)
console.log(fake.Auth.register)

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