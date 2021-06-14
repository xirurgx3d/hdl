import React, { ReactNode, useMemo} from "react"
import { useLocation } from "react-router-dom"

export default (children:ReactNode) => {
  const location: any = useLocation()
  
  return useMemo(() => {
    return React.Children.map(children, (child: any) => {
      const query = new URLSearchParams(location.search)
      let queryProp: object = {}
      
      query.forEach((val,key) => {
        Object.assign(queryProp, {[key]:val})
      })
      

      if (React.isValidElement(child)) {
        return React.cloneElement<any>(child, queryProp);
      }
      
      
      return child;
    })
  }, [location.search])
  
  
}