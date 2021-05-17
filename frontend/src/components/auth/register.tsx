import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Api from '../../api/Api';

type Inputs = {
  name: string,
  email: string,
  password: string,
  confim:string,
  role: string,
  rolepass: string
};


const Register: React.FC = (): JSX.Element => {
  const [errorse, setErore] = useState<null | string>(null)  
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  //const watchName = watch('name');
  const watchRole = watch('role');
  

  const onSubmit = (data: Inputs) => {
    
    Api.register<Inputs>(data)
        .then(res => console.log(res.data))
        .catch(({ response }) => 
            (response.status === 403 && response.data.error) && setErore(response.data.msg))
        
  }
  //console.log('state',errorse);


  return (
    <div className="container">
        <div className="row centered-form">
            <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Please sign up! <small>It's free!</small>
                        </h3>
                    </div>
                    <div className="panel-body" />
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control input-sm"
                                placeholder="Full Name"
                                ref={register({ required: true, minLength: 3, maxLength: 15 })}
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
                      <div className="form-group">
                            <input
                                type="password"
                                name="confim"
                                className="form-control input-sm"
                                placeholder="Password"
                                ref={register({ required: true, minLength: 5, maxLength: 99 })}
                            />
                        </div>
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
                              <select name="role" ref={register()}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                              </select>
                          </div>
                            {
                              watchRole === 'admin' &&
                                      <div className="form-group">
                                          <input
                                              type="text"
                                              name="rolepass"
                                              className="form-control input-sm"
                                              placeholder="key"
                                              ref={register({ required: true })}
                                          />
                                        </div>
                
                          }
                          
              

                        <input
                            type="submit"
                            value="Register"
                            className="btn btn-info btn-block"
                            
                        />
                      </form>
                      {
                          errorse && <p>{ errorse }</p>
                      }
                    
                </div>
            </div>
        </div>
        
    </div>
  );
}
export default Register