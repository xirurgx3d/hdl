import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { IProd } from '../../../@types/CatalogType';
import Api from '../../../api/Api';
import Loader from './../../loader';



const ProdList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<IProd>>(null)
  const math = useRouteMatch()
  const getProd = async function() {
    try {
      const { data } = await Api.productlist()
      setstate(data)
    } catch (error) {
      if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            //console.log(error.response.headers);
      }
      setstate(null)
    }
  }
  useEffect(() => {
    getProd()
  }, [])

  const delProd = (id:String) => {
    Api.producDelet(id)
      .then(e => {
        getProd()
      })
      .catch(err => {
        alert('ошибка'+ err)
      })
  }
  
  

  return (

    <ul className="list-group">
      {
        !state ? <Loader /> :
          state.map((val: IProd, index: number) => {
            
            return (
            
              <li key={index} className="list-group-item">
                {
                val.img !== "undefined"
                  ? <img src={process.env.REACT_APP_API_URL + 'static/img/' + val.img} width="24" />
                  : ""
                }
                <span>{val.title}</span>
              <Link className="badge bg-secondary" to={math.path + 'product/edit/' + val._id}>ред</Link>
              <a className="badge bg-secondary" onClick={() => delProd(val._id)}>Удалить</a>
            </li>)
        })
      }
      
      </ul>
    
  )
}

export default ProdList