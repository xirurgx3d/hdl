/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect,useState } from 'react';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import UserStore from './../store/UserStore';

type Iuser = {
  email:string
}

const Header: React.FC = () => {
  const [user, setUser] = useState<string>('')
  const history = useHistory();
  

  useEffect(() => {
    if (UserStore._isAuth) {
      let token: string | null = localStorage.getItem('token');
      if (token) {
        const user: Iuser = jwt_decode(token)
        setUser(user.email)
      }
    }
    
  }, [UserStore._isAuth])
  
  const logOut = () => {
    localStorage.removeItem('token')
    UserStore.setIsAuth(false)
    history.push("/auth/login")
    
  }

  return (
    <div className="container">
        <div className="row g-2">
          <span>добро пожаловать</span>
          <span>{user}</span>
          <a onClick={logOut}>выйти</a>
        </div>
        </div>
    
    )
}  
export default Header