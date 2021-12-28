import Axios, { AxiosInstance, AxiosPromise } from "axios";

class Api{
  static _instanse:null | object = null
  private URL:string = 'http://localhost:4000/api' //'http://192.168.99.100/api'
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

function getApi({ api }: any) {
  const request: AxiosInstance = api
  return {
    slidelist() {
      return request({
        method: 'get',
        url: `/components/galleryslide/list`,
       })
    }
  }
}
 
export default getApi(Api.getInstance)