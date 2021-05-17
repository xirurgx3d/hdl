import React from 'react';
import { Link } from 'react-router-dom';
import Router from './Router';
import Header from '../components/header';
import UserStore from '../store/UserStore';


const Main: React.FC = (): JSX.Element => (
    <>
        {
            
            UserStore._isAuth &&  <Header />
        }
        <Router />
    </>
       
)
export default Main