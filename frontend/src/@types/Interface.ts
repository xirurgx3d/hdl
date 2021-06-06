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