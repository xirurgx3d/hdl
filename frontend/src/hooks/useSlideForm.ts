import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory, RouteComponentProps } from 'react-router-dom';

import { API } from '../api/Api';
import { Tfile,I } from '../@types/Interface';
import { SlidersRequest } from '../api/requests/ReqSliders';

type Tfomrdata = (fomrdata:any,data:any) => void

export default <T,I>(fomrdata:Tfomrdata,rout:string,filee?:Tfile) => {
  const [slideState, setSlide] = useState<null | any>(null)
  const { id } = useParams<{ id: string }>()
  const history:any = useHistory<RouteComponentProps>()
  
	
  
  useEffect(() => {
    id && (async function() {
      try {
        const { data } =  await SlidersRequest.slidelist(rout, id)
        setSlide(data)
      } catch (error) {
        setSlide(null)
      }
      
    })();
    
  },[id])

  const onSubmit = async (data:any) => {
    try {
      const formData = new FormData()
      fomrdata(formData,data)
      
			console.log(formData);
      const q = await SlidersRequest.slideHandle(rout, formData, id)
      history.goBack()
    } catch (error) {
      return
    }
  }

  return {
    slideState,
    onSubmit
  }

}