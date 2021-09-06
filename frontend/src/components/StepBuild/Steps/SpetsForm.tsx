import React, { useCallback, useEffect, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';
import { ICarousel, ISliders, Tfile } from '../../../@types/Interface'; 
import { API } from '../../../api/Api';
import { slidersRoute, stepBuildRoute } from '../../../constants/constFetch';
import { useParams } from 'react-router-dom';
import useSlideForm from '../../../hooks/useSlideForm';




type Inputs = {
  title: string
}

const StepsForm: React.FC = (): JSX.Element => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const { id } = useParams<{ id: string }>()
  
  const fomrdata = (formData:any,data:Inputs) => {
      formData.append('title', String(data.title))
      
  }

  const { slideState, onSubmit } = useSlideForm<Inputs, Inputs>(
    fomrdata,
    stepBuildRoute.step,
    )
  
  

  
 
  
  
  return (
    <form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        
        <div className="popBox_item"> 
            <label className="form-label">Заголовок</label>
            <input type="text" name="title" ref={register} defaultValue={slideState ? String(slideState.title) : ''} className="form-control" />
        </div>
        
            
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
  )
}

export default StepsForm