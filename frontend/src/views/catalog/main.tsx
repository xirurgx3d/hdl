/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import CateList from './../../components/catalog/category/CateList';
import ProdList from '../../components/catalog/product/ProdList';
import ProductStore from '../../store/ProductStore';
import SerchProd from '../../components/catalog/toolsbar/SerchProd';
import SortProduct from '../../components/catalog/toolsbar/SortProduct';
;

const CatMain: React.FC<RouteComponentProps> = ({ match }) => {
  
  

  return(
    <div className="container">
      <div className="row g-2">
        <div className="col-sm-3">
          <div className="p-3 border bg-light">
            <Link className="btn g-2 btn-success" to={match.path + 'add'}>Добавить категорию</Link>
            <CateList />
            
          </div>
        </div>
        <div className="col-sm-9">
          <div className="p-3 border bg-light">
          <Link className="btn g-2 btn-success" to={match.path + 'product/add'}>Добавить товар</Link>
            <br />
            <div className="dash-box">
            <div className="dispay_chang">dispaly</div>
              <SerchProd  />
              <SortProduct />
            </div>
            
            <ProdList />



          </div>
        </div>
        
      </div>
    </div>
    )
}  
export default CatMain