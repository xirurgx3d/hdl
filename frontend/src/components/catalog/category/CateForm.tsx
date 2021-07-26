import './style.css'
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ICate } from '../../../@types/CatalogType';
import { I } from '../../../@types/Interface';

import Api from '../../../api/Api';

interface Inputs{
  name:String
}
interface IProps{
  id?: string,
  setRend:any
}

const CateForm: React.FC<IProps> = ({id,setRend}): JSX.Element => {
  const [stateCate, setCate] = useState<null | ICate>(null)
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  
  
  useEffect(() => {
    id && (async function anyNameFunction() {
      try {
        const { data } = await Api.categorylist<typeof id>(id)
        setCate(data)
      } catch (error) {
        
        setCate(null)
      }
    })();
  }, [id])

  const onSubmit = useCallback(async (data: Inputs) => {
    try {
      await Api.categoryHandle<Inputs, typeof id>(data, id)
      setRend(true)
    } catch (error) {
      setCate(null)
    }
  },[])

  return (
    
    <form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        <label className="form-label">Название</label>
        <input type="text" name="name"
          ref={register({ required: true, minLength: 2, maxLength: 15 })}
          placeholder={stateCate?.name as string}
          className="form-control" />
            
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
       
  )
}

export default CateForm