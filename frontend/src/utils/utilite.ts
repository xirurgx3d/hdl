export const debounse = () => {
  let timer:any
  return (fn:any,time:number): void => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    },time)
  }
}