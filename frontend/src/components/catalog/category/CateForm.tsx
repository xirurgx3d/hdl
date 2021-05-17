import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ICate } from '../../../@types/CatalogType';
import { I } from '../../../@types/Interface';

import Api from '../../../api/Api';

interface Inputs{
  name:String
}

const CateForm: React.FC<I.Irote> = ({ history, match }): JSX.Element => {
  const [stateCate, setCate] = useState<null | ICate>(null)
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const id = match.params.id
  useEffect(() => {
    (async function anyNameFunction() {
      try {
        const { data } = await Api.categorylist<typeof id>(match.params.id)
        setCate(data)
      } catch (error) {
        if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              //console.log(error.response.headers);
        }
        setCate(null)
      }
    })();
  }, [match.params.id])

  const onSubmit = async (data: Inputs) => {
    try {
      await Api.categoryHandle<Inputs,typeof id>(data,id)
    } catch (error) {
      
    }
  }
  

  return (
    <div className="container">
      <div className="row g-2">
      <div className="col-sm-6">
      <button onClick={() => history.goBack()}>Назад</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
              <input type="text" name="name"
                ref={register({ required: true, minLength: 2, maxLength: 15 })}
                placeholder={stateCate?.name as string}
                className="form-control" />
            
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
     </div> 
  )
}

export default CateForm