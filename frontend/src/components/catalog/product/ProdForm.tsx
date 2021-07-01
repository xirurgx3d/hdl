import { Alert } from '@material-ui/lab';
import React, { memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ICate } from '../../../@types/CatalogType';
import { I } from '../../../@types/Interface';

import Api from '../../../api/Api';
import { debounse } from '../../../utils/utilite';
import Attributes from './Attributes';
import { useDispatch } from 'react-redux';
import { getProdListRequest } from '../../../redux/reducers/reducerProduct/action';



type Inputs<C> = {
  title: string,
  price: number,
  priceOld: number,
  descript: string
  recomend: Number,
  atributes: [],
  picture: any,
  img: any,
  category: C,
  data:number
}
type Tmassege = {
  msg: string,
  error:boolean
}


const ProdForm: React.FC<{id?:string}> = ({ id }): JSX.Element => {
  const [stateProd, setProd] = useState<null | Inputs<ICate>>(null)
  const [filee, setfile] = useState<any>(false)
  const [category, setCategory] = useState<null | ICate[]>(null)
  const [massege, setMassege] = useState<null | Tmassege>(null)
  const dispatch = useDispatch()

  const { register, handleSubmit} = useForm<Inputs<string> >();
  
  useEffect(() => {
    id && (async function anyNameFunction() {
      try {
        const { data } = await Api.Product(id)
        setProd(data)
      } catch (error) {
        
        setProd(null)
      }
      
    })();
    
  },[id]) 

  useEffect(() => {
    (async () => {
      try {
        const { data } = await Api.categorylist<ICate>()
        setCategory(data)
      } catch (error) {
        console.log(error);
        setCategory(null)
      }
    })()
    
  }, [])

  useEffect(() => {
    let timer: any
    if (massege) {
      timer = setTimeout(()=> setMassege(null),10000)
    }
    return () => clearTimeout(timer)
  },[massege])
  
  const onSubmit: (data: Inputs<string>) => void = async (data: Inputs<string>) => {
    setMassege(null)
    try {
      //const file = data.picture[0].name
      const formData = new FormData()
      formData.append('title', String(data.title))
      formData.append('price', String(data.price))
      formData.append('priceOld', String(data.priceOld))
      formData.append('descript', String(data.descript))
      formData.append('recomend', String(data.recomend))
      formData.append('category', String(data.category))
      formData.append('data', String(Date.now()))
      if (filee || stateProd?.img) {
        formData.append('img', filee || stateProd?.img)
      }
      
      await Api.ProdHandle(formData, id)
      dispatch(getProdListRequest())
      setMassege({
        msg: id ? 'Товар успешно изменен' : 'Товар успешно добавлен',
        error:false
      })
    } catch (error) {
      setMassege({
        msg: 'Возникла ошибка',
        error:true
      })
      console.log(error);
    }
  }

  


  return (
    <>
      {
        massege && (massege.error
          ? <Alert severity="error">{massege.msg}</Alert>
          : <Alert severity="success">{massege?.msg}</Alert>)
      }
        
        <form className="popBox prodpopBox" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            
              <div className="popBox_item">
                <label className="form-label">Название</label>
                <input type="text" name="title"
                  ref={register({ required: true, minLength: 2, maxLength: 15 })}
                  defaultValue={stateProd ? String(stateProd.title) : ''}
                  className="form-control" />
              </div>
              <div className="popBox_item"> 
                <label className="form-label">Цена</label>
                <input type="text" name="price"
                  ref={register}
                  defaultValue={stateProd ? String(stateProd.price) : " "}
                  className="form-control" />
              </div>
              <div className="popBox_item">
                <label className="form-label">Скидка</label>
                <input type="text" name="priceOld"
                  ref={register}
                  defaultValue={stateProd ? String(stateProd.priceOld) : " "}
                  className="form-control" />
              </div>
              <div className="popBox_item">
                <label className="form-label">рекомендации</label>
                <input type="text" name="recomend"
                  ref={register}
                  defaultValue={stateProd ? String(stateProd.recomend) : " "}
                  className="form-control" />
              </div>  
              <div className="popBox_item">
                <label className="form-label">Картинка</label>
                <input type="file" onChange={(e:any) => setfile(e.target.files[0])} />
              </div>
              
              <div className="popBox_item">
                <label className="form-label">Описание</label>
                <textarea name="descript" ref={register}></textarea>
              </div>
              <div className="popBox_item">
                <label className="form-label">Категории</label>
                <select name="category" ref={register}>
                  {
                    category && category.map((val:ICate,index) => {
                      return (
                        <option
                          selected={
                            stateProd && stateProd.category._id == val._id ? true : false
                          }
                          key={val._id}
                          defaultValue={'ww'}
                          value={val._id} >
                            {val.name}
                        </option>
                      )
                    })
                  }
                  
                </select>
              </div>
   
              
          
            <div className="popBox_item">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
       </>
  )
}

export default ProdForm