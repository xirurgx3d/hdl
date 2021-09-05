import React, { useCallback, useEffect, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';
import { ICarousel, ISliders, ISpecific, Tfile } from '../../../@types/Interface';
import { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { useParams } from 'react-router-dom';
import useSlideForm from '../../../hooks/useSlideForm';
import Editor, { TeditorData } from '../../Editor';

type Inputs = {
  title: string
  descript:object
  img: Tfile
  sliders:[]
}



const SpecificForm: React.FC = (): JSX.Element => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const [editorData, setEditorData] = useState<TeditorData | null>(null);
  const [filee, setfile] = useState<any>(false)
  const [sliders, setSliders] = useState<any>(false)
  const { id } = useParams<{ id: string }>()
  
  const fomrdata = (formData:any,data:Inputs) => {
      formData.append('title', String(data.title))
     
      if (filee || slideState?.img) {
        formData.append('img', filee || slideState?.img)
    }
    if (sliders || slideState?.sliders) {
        console.log(sliders);
        formData.append('sliders', sliders || slideState?.sliders)
      }
      if (editorData || slideState?.descript) {
        formData.append('descript', JSON.stringify(editorData) || slideState?.descript)
      }
    
  }

  const { slideState, onSubmit } = useSlideForm<ISpecific, Inputs>(
    fomrdata,
    slidersRoute.specific,
    filee)
  
  console.log(slideState);
  
  
 
  
  
  return (
    <form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        <div className="popBox_item"> 
            <label className="form-label">Превью изображение</label>
            {
              !slideState && <DropzoneArea onChange={e => setfile(e[0])} />
            }
            {
              id && slideState && <DropzoneArea onChange={e => setfile(e[0])} initialFiles={[process.env.REACT_APP_API_URL + '/api/static/img/' + String(slideState?.img)]} />
            }
        </div>
        <div className="popBox_item"> 
            <label className="form-label">Заголовок</label>
            <input type="text" name="title" ref={register} defaultValue={slideState ? String(slideState.title) : ''} className="form-control" />
        </div>
        <div className="popBox_item">
            <label className="form-label">Текст</label>
            <Editor setEditorData={setEditorData} editorData={slideState ? slideState.descript : editorData} />
        </div>
        <div className="popBox_item">
            <label className="form-label">Изображения слайдера</label>
            {
              !slideState && <DropzoneArea onChange={e => setSliders(e)} />
            }
            {
              id && slideState && <DropzoneArea onChange={e => setfile(e[0])} initialFiles={[process.env.REACT_APP_API_URL + '/api/static/img/' + String(slideState?.img)]} />
            }
        </div>
        
            
      </div>
      
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
  )
}

export default SpecificForm