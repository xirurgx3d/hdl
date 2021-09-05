export namespace I {
  export interface Irote{
    history:{
      goBack:() => any
    },
    match: {
      params: {
        id:string
      }
    }
    
  }
}

export type Tfile = {
  lastModified: number
  name: string
  path: string
  size: number
  type: string
  webkitRelativePath: string
}

export interface ISliders {
  _id:string,
  title: string
  descript?: string
  img:Tfile
}
export interface ICarousel {
  _id: string,
  title: string
  run?: number
  car?: number
  img:Tfile
}
export interface ISpecific {
  _id: string,
  title: string
  run?: number
  car?: number
  img:Tfile
}