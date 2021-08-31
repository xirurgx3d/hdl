import React, { useCallback, useEffect, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';

import { useParams } from 'react-router-dom';
import { AxiosPromise } from 'axios';
import { API } from '../api/Api';
import { Tfile } from '../@types/Interface';

type Tfomrdata = <T>(fomrdata:any,data:any) => void

export default <T,I>(fomrdata:Tfomrdata,rout:string,filee:Tfile) => {
  const [slideState, setSlide] = useState<null | any>(null)
  const { id } = useParams<{ id: string }>()
  
  
  useEffect(() => {
    id && (async function() {
      try {
        const { data } =  await API.Sliders.slidelist(rout, id)
        setSlide(data)
      } catch (error) {
        setSlide(null)
      }
      
    })();
    
  },[id])

  const onSubmit = useCallback(async (data:any) => {
    try {
      const formData = new FormData()
      fomrdata(formData,data)
      
      await API.Sliders.slideHandle(rout, formData, id)

    } catch (error) {
      return
    }
  }, [filee])

  return {
    slideState,
    onSubmit
  }

}