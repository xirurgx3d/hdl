import React, { memo, useEffect, useReducer, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { IProd } from '../../../@types/CatalogType';
import Api from '../../../api/Api';
import { initialStateProd, reducerProd } from '../../../reducers/reducerProduct/reducer';
import SortProduct from '../toolsbar/SortProduct';
import Loader from './../../loader';
import Pagination from '../toolsbar/Pagination';
import { PaginationProdList } from '../../../reducers/reducerProduct/action';
import SerchProd from '../toolsbar/SerchProd';



const ProdList: React.FC = (): JSX.Element => {
  const [state, setstate] = useState<null | Array<IProd>>(null)
  const [stateProd, dispatch] = useReducer(reducerProd, initialStateProd)
  const math = useRouteMatch()
  const getProd = async function() {
    try {
      const {data:{data,pagination}} = await Api.productlist(null, stateProd)
      
      setstate(data)
      dispatch(PaginationProdList(pagination))
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
  }, [
    stateProd.sort,
    stateProd.pagination.page,
    stateProd.serch
  ])

  const delProd = (id:String) => {
    Api.producDelet(id)
      .then(e => {
        getProd()
      })
      .catch(err => {
        alert('ошибка'+ err)
      })
  }

  console.log(stateProd);
  
  
  return (
    <>
      <div className="dash-box">
            <div className="dispay_chang">dispaly</div>
              <SerchProd disph={dispatch} />
              <SortProduct disph={dispatch} />
            </div>
      <ul className="list-group">
       
      {
        !state ? <Loader /> :
          state.map((val: IProd, index: number) => {
            
            return (
            
              <li key={val._id} className="list-group-item">
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
      <Pagination disph={dispatch} state={stateProd} />
    </>
  )
}

export default memo(ProdList)