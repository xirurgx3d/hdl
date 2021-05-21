import Axios, { AxiosInstance, AxiosPromise } from "axios";

abstract class Fabrick{
  request: AxiosInstance
  component:any
  constructor(request:AxiosInstance) {
    this.request = request
  }
  fabrick(Component:any) {
    this.component = new Component(this.request)
  }
}



export interface ICatalog{
  getList: <T>(id?:T) => AxiosPromise,
  catalogHandle: <T,K>(data:T,id?:K) => AxiosPromise
}
class CatalogFabr extends Fabrick implements ICatalog {
  getList<T>(id?: T,data?:any){
    return this.component.getList(id,data)
  }
  catalogHandle<T,K>(data:T,id?:K) {
    return this.component.catalogHandle(data,id)
  }
}

class Category implements ICatalog {
  request: AxiosInstance
  constructor(request: AxiosInstance) {
    this.request = request
  }
  getList<T>(id?: T) {
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
  catalogHandle<T, K>(data: T, id?: K) {
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
}
class Product{
  request: AxiosInstance
  constructor(request:AxiosInstance) {
    this.request = request
  }
  getList<T>(id?: T,data?:any) {
    return id
      ? this.request({
        method: 'get',
        url: '/catalog/product/list/' + id,
      })
      : this.request({
        method: 'post',
        url: '/catalog/product/list',
        data:data
      })
  }
  catalogHandle<T, K>(data: T, id?: K) {
    return id
      ? this.request({
        method: 'put',
        url: '/catalog/product/edit/' + id,
        data: data
      })
      : this.request({
        method: 'post',
        url: '/catalog/product/add',
        data: data
      })
  }
  deleteProd<T>(id: T) {
    return this.request({
      method: 'delete',
      url: '/catalog/category/delet/' + id,
    })
  }
}

export {CatalogFabr,Category,Product}