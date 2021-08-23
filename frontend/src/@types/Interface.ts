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