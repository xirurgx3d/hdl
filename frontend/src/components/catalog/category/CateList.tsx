import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICate } from '../../../@types/CatalogType';
import Api from '../../../api/Api';
import Loader from './../../loader';



const CateList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<ICate>>(null)
  const math = useRouteMatch()
  useEffect(() => {
    (async function anyNameFunction() {
      try {
        const {data} = await Api.categorylist()
        setstate(data)
      } catch (error) {
        if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              //console.log(error.response.headers);
        }
        setstate(null)
      }
    })();
    
  }, [])
  
  return (

    <ul className="list-group">
      {
        !state ? <Loader /> :
          state.map((val: ICate, index) => {
          return (<li key={index} className="list-group-item">{ val.name } <Link className="badge bg-secondary" to={math.path + 'edit/' + val._id}>ред</Link></li>)
        })
      }
      
      </ul>
    
  )
}

export default CateList