import React, { useCallback, useEffect, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';
import { ICarousel, ISliders, Tfile } from '../../../@types/Interface'; 
import { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { useParams } from 'react-router-dom';
import useSlideForm from '../../../hooks/useSlideForm';




type Inputs = {
  title: string
  run: number
  car:number
  img:Tfile
}

const StepsForm: React.FC = (): JSX.Element => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const [filee, setfile] = useState<any>(false)
  const { id } = useParams<{ id: string }>()
  
  const fomrdata = (formData:any,data:Inputs) => {
      formData.append('title', String(data.title))
      formData.append('run', String(data.run))
      formData.append('car', String(data.car))
      if (filee || slideState?.img) {
        formData.append('img', filee || slideState?.img)
    }
  }

  const { slideState, onSubmit } = useSlideForm<ICarousel, Inputs>(
    fomrdata,
    slidersRoute.carousel,
    filee)
  
  

  
 
  
  
  return (
    <form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        {
          !slideState && <DropzoneArea onChange={e => setfile(e[0])} filesLimit={1} />
        }
        {
          id && slideState && <DropzoneArea onChange={e => setfile(e[0])} filesLimit={1} initialFiles={[process.env.REACT_APP_API_URL + '/api/static/img/' + String(slideState?.img)]} />
        }
          
        
        <br />
        
        <div className="popBox_item"> 
            <label className="form-label">Заголовок</label>
            <input type="text" name="title" ref={register} defaultValue={slideState ? String(slideState.title) : ''} className="form-control" />
        </div>
        <div className="popBox_item">
            <label className="form-label">Пешком</label>
            <input type="text" name="run" ref={register} defaultValue={slideState ? String(slideState.run) : ''} className="form-control" />
        </div>
        <div className="popBox_item">
            <label className="form-label">Транспорт</label>
            <input type="text" name="car" ref={register} defaultValue={slideState ? String(slideState.car) : ''} className="form-control" />
        </div>
            
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
  )
}

export default StepsForm