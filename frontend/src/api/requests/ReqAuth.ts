import { AxiosPromise } from "axios";
import { RequstAbstract } from ".";

export interface IAuthRequest{
  register:<T>(data:T) => AxiosPromise,
  login: <T>(data: T) => AxiosPromise,
  auth: <T>(data: T) => AxiosPromise,
}

export default class extends RequstAbstract implements IAuthRequest{
  register<T>(data:T) {
    return this.request({
      method: 'post',
      url: '/auth/reg',
      data: data
    })
  }
  login<T>(data:T) {
    return this.request({
      method: 'post',
      url: '/auth/login',
      headers: { 'authorization': 'Basic ' + data }
    })
  }
  auth<T>(token:T) {
    return this.request({
      method: 'post',
      url: '/auth/auth',
      headers: { 'Authorization': 'Bearer ' + token }
    })
  }
}