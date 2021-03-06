import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Api from '../../api/Api';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import UserStore from './../../store/UserStore';
import { Grid, Paper } from '@material-ui/core';


type Inputs = {
  email: string,
  password: string,
};
type IRequestLogin = {
  token: string,
  user: object,
  error:boolean
}

const Login: React.FC = (): JSX.Element => {
  const [errorse, setErore] = useState<null | string>(null)  
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  
  const history = useHistory();
  const onSubmit = async ({email,password}: Inputs) => {
    let aut = window.btoa(email + ':' + password)
    
    Api.login(aut)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        UserStore.setIsAuth(true)
        history.push("/catalog")
        })
        .catch(({ response }) => 
            (response.status === 403 && response.data.error) && setErore(response.data.msg))
       
  }

  return (
    <Grid container spacing={3}>
      <Grid direction="row" item xs={2}>
              <Paper>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="form-group">
                              <input
                                  type="email"
                                  name="email"
                                  className="form-control input-sm"
                                  placeholder="Email Address"
                                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                              />
                            </div>
                          <div className="form-group">
                              <input
                                  type="password"
                                  name="password"
                                  className="form-control input-sm"
                                  placeholder="Password"
                                  ref={register({ required: true, minLength: 5, maxLength: 99 })}
                              />
                        </div>
                        
                              
                          <input
                              type="submit"
                              value="Login"
                              className="btn btn-info btn-block"
                              
                          />
                        </form>
                        {
                            errorse && <p>{ errorse }</p>
                        }
                  </Paper>
            </Grid>
        </Grid>
    
  );
}
export default Login