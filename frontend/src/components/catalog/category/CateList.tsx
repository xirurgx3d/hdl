import React, { memo, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICate } from '../../../@types/CatalogType';
import Api from '../../../api/Api';
import { popRouteEnv } from '../../../constants/constRouter';
import usePrepareLink from '../../../hooks/usePrepareLink';
import Loader from './../../loader';


const CateList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICate>>(null)
  const [cat,setCat] = useState('')
  const {pathname} = usePrepareLink({
    to:popRouteEnv.ADD_CATE
  })



  useEffect(() => {
    (async function anyNameFunction() {
      try {
        const {data} = await Api.categorylist()
        setstate(data)
      } catch (error) {
        
        setstate(null)
      }
    })();
    
  }, [])

  

  
  return (

    <ul className="list-group">
      {
        !state ? <Loader /> :
          state.map((val: ICate, index) => {
            return (<li
              key={index}
              onClick={() => setCat(val._id)}
              className="list-group-item">{val.name}
              <Link className="badge bg-secondary" to={pathname + '?id=' + val._id}>ред</Link>
            </li>)
        })
      }
      </ul>
    
  )
}

export default memo(CateList)