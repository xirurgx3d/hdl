/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import CateList from './../../components/catalog/category/CateList';
import ProdList from '../../components/catalog/product/ProdList';

const CatMain: React.FC<RouteComponentProps> = ({match}) => {
  
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
            <br/>
            <ProdList />



          </div>
        </div>
        
      </div>
    </div>
    )
}  
export default CatMain