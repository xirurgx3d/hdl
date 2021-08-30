import React, { useCallback, useEffect, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';
import { ISliders, Tfile } from '../../../@types/Interface';
import { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { useParams } from 'react-router-dom';
import useSlideForm from '../../../hooks/useSlideForm';




type Inputs = {
  title: string
  descript: string
  img:Tfile
}

const HeadSlideForm: React.FC = (): JSX.Element => {
  //const [slideState, setSlide] = useState<null | ISliders>(null)
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const [filee, setfile] = useState<any>(false)
  const { id } = useParams<{ id: string }>()
  
  const {slideState,onSubmit} = useSlideForm<ISliders,Inputs>({
    list: API.Sliders.slidelist,
    handler:API.Sliders.slideHandle
  },
    slidersRoute.headeslide,
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
        {process.env.REACT_APP_API_URL + '/api/static/img/' + slideState?.img}
        <div className="popBox_item"> 
            <label className="form-label">Заголовок</label>
            <input type="text" name="title" ref={register} defaultValue={slideState ? String(slideState.title) : ''} className="form-control" />
        </div>
        <div className="popBox_item">
            <label className="form-label">Текст</label>
            <textarea name="descript" defaultValue={slideState ? String(slideState.descript) : ''} ref={register}></textarea>
        </div>
            
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
  )
}

export default HeadSlideForm