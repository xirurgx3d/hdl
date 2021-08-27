import { AxiosPromise } from "axios";
import { RequstAbstract } from ".";

export interface IProductRequest{
    Product: (id: string) => AxiosPromise,
    ProductCategoryList: (data: any) => AxiosPromise,
    productlist:(data:any) => AxiosPromise,
    ProdHandle: <T, K>(data: T, id?: K) => AxiosPromise,
    producDelet: <T>(id?:T) => AxiosPromise,
}

export default class extends RequstAbstract implements IProductRequest{
  Product(id: string) {
    return this.request({
      method: 'get',
      url: '/catalog/product/list/' + id,
    })
  }
  productlist(data: any) {
    return this.request({
      method: 'post',
      url: '/catalog/product/list',
      data:data
    })
  }
  ProductCategoryList(data: any) {
    return this.request({
      method: 'post',
      url: '/catalog/product/categoryList',
      data:data
    })
  }
  ProdHandle<T, K>(data: T, id?: K) {
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
  producDelet<T>(id:T) {
    return this.request({
      method: 'delete',
      url: '/catalog/product/delet/' + id,
    })
  }
}