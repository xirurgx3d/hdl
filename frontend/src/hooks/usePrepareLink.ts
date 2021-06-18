import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

type Props = {
  to?:string | undefined
}

export default ({to}:Props = {}) => {
  const location = useLocation();
  const match = useRouteMatch();
  const history:any = useHistory();
  
  
  let pathname
  if (to) {
    pathname = match.url.concat('/', to)
  } else {
    pathname = location.pathname
  }
  
  const back = history.goBack
  
  return {
    pathname,
    back
  };
};