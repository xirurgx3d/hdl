import React, { useCallback, useEffect, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';
import { ISliders, Tfile } from '../../../@types/Interface';
import { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { useParams } from 'react-router-dom';
import useSlideForm from '../../../hooks/useSlideForm';




type Inputs = {
  sliders:[]
}

const galleryHeadForm: React.FC = (): JSX.Element => {
  //const [slideState, setSlide] = useState<null | ISliders>(null)
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const [filee, setfile] = useState<any>(false)
  const { id } = useParams<{ id: string }>()
  
  const fomrdata = (formData: any, data: ISliders) => {
    if (filee) {
      console.log(filee);
      for (let i = 0; i < filee.length; i++) {
        formData.append('img', filee[i])
      }
        
    }
  }

  const { slideState, onSubmit } = useSlideForm<Inputs, Inputs>(
    fomrdata,
    slidersRoute.galleryslide,
    filee)
  

  
  const imagesArr = useCallback((mass:string[]) => {
    return mass.map((val:string) => {
      return process.env.REACT_APP_API_URL + '/api/static/img/' + val
      //[process.env.REACT_APP_API_URL + '/api/static/img/' + String(slideState?.img)]
    })
  },[id])
  
  
  return (
    <form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        {
          !slideState && <DropzoneArea onChange={e => setfile(e)} />
        }
        {
          id && slideState && <DropzoneArea onChange={e => setfile(e)} initialFiles={imagesArr(slideState?.img)} />
        }
          
        
        
            
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
  )
}

export default galleryHeadForm