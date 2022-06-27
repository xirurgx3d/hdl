import Axios, { AxiosInstance, AxiosPromise } from "axios";

class Api{
  static _instanse:null | object = null
  private URL:string = process.env.NEXT_PUBLIC_API_URL as string //'http://192.168.99.100/api'
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
    aboutslidelist() {
      return request({
        method: 'get',
        url: `/components/galleryslide/list`,
       })
    },
		headslidelist() {
      return request({
        method: 'get',
        url: `/components/galleryhead/list`,
       })
    },
		corusslidelist() {
      return request({
        method: 'get',
        url: `/components/carousel/list`,
       })
    },
		stepslidelist() {
      return request({
        method: 'get',
        url: `/components/stepbuild/build/list`,
       })
    },
		videolidelist() {
      return request({
        method: 'get',
        url: `/components/stepbuild/step/list`,
       })
    },
		contactlidelist() {
      return request({
        method: 'get',
        url: `/components/setingsadress/list`,
       })
    },
		tellidelist() {
      return request({
        method: 'get',
        url: `/components/setingphone/list`,
       })
    },
		crm(data:any){
			return request({
        method: 'post',
        url: `/send-form/send`,
				data
       })
		}
  }
}
 
export default getApi(Api.getInstance)