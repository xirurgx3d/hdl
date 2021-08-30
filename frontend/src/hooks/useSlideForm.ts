import React, { useCallback, useEffect, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';

import { useParams } from 'react-router-dom';

interface Iapi{
  list: (route: string, id: string) => void,
  handler:(route: string, data:unknown,id: string) => void,
}

export default <T,I>(api:Iapi,rout:string,filee:any) => {
  const [slideState, setSlide] = useState<null | T>(null)
  const { id } = useParams<{ id: string }>()
  
  useEffect(() => {
    id && (async function() {
      try {
        const { data } =  await api.list(rout,id) //API.Sliders.slidelist(slidersRoute.headeslide, id)
        setSlide(data)
      } catch (error) {
        setSlide(null)
      }
      
    })();
    
  },[id])

  const onSubmit = useCallback(async (data:I) => {
    try {
      const formData = new FormData()
      formData.append('title', String(data.title))
      formData.append('descript', String(data.descript))
      console.log(filee);
      if (filee || slideState?.img) {
        formData.append('img', filee || slideState?.img)
      }
      await api.handler(rout,formData,id) //API.Sliders.slideHandle(slidersRoute.headeslide,formData,id)

    } catch (error) {
      return
    }
  }, [filee])

  return {
    slideState,
    onSubmit
  }

}