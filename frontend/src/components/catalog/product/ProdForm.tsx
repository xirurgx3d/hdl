import React, { memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ICate } from '../../../@types/CatalogType';
import { I } from '../../../@types/Interface';

import Api from '../../../api/Api';
import Attributes from './Attributes';



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
const ProdForm: React.FC<I.Irote> = ({ history, match }): JSX.Element => {
  const [stateProd, setProd] = useState<null | Inputs<ICate>>(null)
  const [filee, setfile] = useState<any>(false)
  const [category,setCategory] = useState<null | ICate[]>(null)

  const { register, handleSubmit} = useForm<Inputs<string> >();
  const { id } = match.params
  
  useEffect(() => {
    id && (async function anyNameFunction() {
      try {
        const {data} = await Api.productlist<typeof id>(id)
        setProd(data)
      } catch (error) {
        if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              //console.log(error.response.headers);
        }
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
  
  const onSubmit: (data: Inputs<string>) => void = async (data: Inputs<string>) => {
    
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
      
      await Api.ProdHandle(formData,id)
    } catch (error) {
      console.log(error);
    }
  }

  


  return (
    <div className="container">
      <div className="row g-2">
        <div className="col-sm-6">
          
      <button onClick={() => history.goBack()}>Назад</button>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="mb-3">
              <label className="form-label">Название</label>
              <input type="text" name="title"
                ref={register({ required: true, minLength: 2, maxLength: 15 })}
                defaultValue={stateProd ? String(stateProd.title) : ''}
                className="form-control" />
              <label className="form-label">Цена</label>
              <input type="text" name="price"
                ref={register}
                defaultValue={stateProd ? String(stateProd.price) : " "}
                className="form-control" />
              <label className="form-label">Скидка</label>
              <input type="text" name="priceOld"
                ref={register}
                defaultValue={stateProd ? String(stateProd.priceOld) : " "}
                className="form-control" />
              <label className="form-label">рекомендации</label>
              <input type="text" name="recomend"
                ref={register}
                defaultValue={stateProd ? String(stateProd.recomend) : " "}
                className="form-control" />
              <div className="mb-3">
                <label className="form-label">Картинка</label>
                <input type="file" onChange={(e:any) => setfile(e.target.files[0])} />
              </div>
              <label className="form-label">Описание</label>
              <textarea name="descript" ref={register}></textarea>
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
          
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
     </div> 
  )
}

export default ProdForm