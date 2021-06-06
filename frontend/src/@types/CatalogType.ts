export interface ICate {
  _id:string,
  dethlvl: number
  name: string
}
export type IProd = {
  _id:string,
  title: string,
  price: number,
  priceOld: number,
  descript: string
  recomend: Number,
  atributes: [],
  picture: any,
  img:any
}

export type typeSelector<T extends (...args: any) => any>  = ReturnType<T>