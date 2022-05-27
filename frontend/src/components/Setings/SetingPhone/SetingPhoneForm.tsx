import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps, useHistory, useParams } from "react-router-dom";
import { ICarousel } from "../../../@types/Interface";
import API from "../../../api/Api";
import { setingBuildRoute, slidersRoute } from "../../../constants/constFetch";
import useSlideForm from "../../../hooks/useSlideForm";
import Editor, { TeditorData } from "../../Editor";


type Inputs = {
  title: string
  descript: string
  mailsale:string
	mailinfo:string
  
}
const SetingPhoneFrom = () => {
	const { register, handleSubmit, watch, errors } = useForm<Inputs>();
	
	
	const [editorData, setEditorData] = useState<TeditorData | null>(null);

	const fomrdata = (formData:any,data:Inputs) => {
		formData.append('title', String(data.title))
		formData.append('descript', String(data.descript))
	}
	
	

	const { slideState, onSubmit } = useSlideForm<any, Inputs>(
    fomrdata,
    setingBuildRoute.phone)


	return(
		<form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        
          
        
        <br />
        
        <div className="popBox_item"> 
            <label className="form-label">Телефон</label>
            <input type="text" name="title" ref={register} defaultValue={slideState ? String(slideState.title) : ''} className="form-control" />
        </div>
				<div className="popBox_item">
            <label className="form-label">Адресс</label>
            <textarea name="descript" ref={register} defaultValue={slideState ? String(slideState.descript) : ''}  className="form-control"></textarea>
        </div>
        
            
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
	)
}
export default SetingPhoneFrom