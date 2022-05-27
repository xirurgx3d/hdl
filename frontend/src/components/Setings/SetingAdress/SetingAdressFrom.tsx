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
const SetingAdressFrom = () => {
	const { register, handleSubmit, watch, errors } = useForm<Inputs>();
	
	
	const [editorData, setEditorData] = useState<TeditorData | null>(null);

	const fomrdata = (formData:any,data:Inputs) => {
		formData.append('title', String(data.title))
		formData.append('descript', String(data.descript))
		formData.append('mailsale', String(data.mailsale))
		formData.append('mailinfo', String(data.mailinfo))
	}
	
	

	const { slideState, onSubmit } = useSlideForm<any, Inputs>(
    fomrdata,
    setingBuildRoute.adress)


	return(
		<form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        
          
        
        <br />
        
        <div className="popBox_item"> 
            <label className="form-label">Город</label>
            <input type="text" name="title" ref={register} defaultValue={slideState ? String(slideState.title) : ''} className="form-control" />
        </div>
				<div className="popBox_item">
            <label className="form-label">Адресс</label>
            <textarea name="descript" ref={register} defaultValue={slideState ? String(slideState.descript) : ''}  className="form-control"></textarea>
        </div>
        <div className="popBox_item">
            <label className="form-label">Почта продаж</label>
            <input type="text" name="mailsale" ref={register} defaultValue={slideState ? String(slideState.mailsale) : ''} className="form-control" />
        </div>
				<div className="popBox_item">
            <label className="form-label">Почта предложений</label>
            <input type="text" name="mailinfo" ref={register} defaultValue={slideState ? String(slideState.mailinfo) : ''} className="form-control" />
        </div>
            
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
	)
}
export default SetingAdressFrom