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
import { getProdListRequest } from '../../../redux/reducers/reducerProduct/action';
import { useDispatch, useSelector } from 'react-redux';
import { Iredusers } from '../../../redux/reducers/rootReducer';



const ProdList: React.FC = (): JSX.Element => {
  const math = useRouteMatch()
  const dispatch = useDispatch()
  const {products,errors} = useSelector((state:Iredusers) => state)

  useEffect(() => {
    //getProd()
    dispatch(getProdListRequest(products))
    
  }, [])

  const delProd = (id:String) => {
    Api.producDelet(id)
      .then(e => {
        //getProd()
      })
      .catch(err => {
        alert('ошибка'+ err)
      })
  }

  const loaders = (products.data.length === 0 && !errors.productlist.error)
  
  return (
    <>
      <div className="dash-box">
            <div className="dispay_chang">dispaly</div>
              <SerchProd  />
              <SortProduct />
            </div>
      <ul className="list-group">
       
      {
        loaders ? <Loader /> :
        products.data.map((val: IProd, index: number) => {
            
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
      <Pagination/>
    </>
  )
}

export default ProdList