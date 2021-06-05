export const debounse = () => {
  let timer:any
  return (fn:any,time:number): void => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    },time)
  }
}

export const stateMutait = <T, K extends keyof T,D extends T[K]>(state:T,key:K,data:D): T => {
  return { ...state, [key]: data }
}