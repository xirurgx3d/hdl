import Axios, { AxiosInstance, AxiosPromise } from "axios";

abstract class Fabrick{
  request: AxiosInstance
  component: any
  constructor(request:AxiosInstance) {
    this.request = request
  }
  fabrick(Component:any) {
    this.component = new Component(this.request)
  }
}



export interface ICatalog{
  getItem?:<T>(id:T) => AxiosPromise,
  getList?: <T>(id?:T) => AxiosPromise,
  catalogHandle?: <T, K>(data: T, id?: K) => AxiosPromise,
  CatalogDelet?: <T>(id:T) => AxiosPromise
}

class CatalogFabr extends Fabrick implements ICatalog {
  getItem<T>(id:T) {
    return this.component.getItem(id)
  }
  getList<T>(id?: T,data?:any){
    return this.component.getList(id,data)
  }
  catalogHandle<T,K>(data:T,id?:K) {
    return this.component.catalogHandle(data,id)
  }
  CatalogDelet<T>(id:T) {
    return this.component.CatalogDelet(id)
  }
}

class Category extends Fabrick implements ICatalog {
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
  CatalogDelet<T>(id: T) {
    console.log(id)
    return this.request({
      method: 'delete',
      url: '/catalog/category/delet/' + id,
    })
  }
}
class Product extends Fabrick implements ICatalog{
  getItem<T>(id:T) {
    return this.request({
      method: 'get',
      url: '/catalog/product/list/' + id,
    })
  }
  getList<T>(data:T) {
    return this.request({
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
  CatalogDelet<T>(id: T) {
    return this.request({
      method: 'delete',
      url: '/catalog/product/delet/' + id,
    })
  }
}

export {CatalogFabr,Category,Product}