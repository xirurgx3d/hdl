import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';
import { Tfile } from '../../../@types/Interface';




type Inputs = {
  title: string
  descript: string
  img:Tfile
}

const HeadSlideForm: React.FC = (): JSX.Element => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const [filee, setfile] = useState<any>(false)
  

  const onSubmit = (data:Inputs) => {
    try {
      const formData = new FormData()
      formData.append('title', String(data.title))
      formData.append('descript', String(data.descript))
      if (filee) {
        formData.append('img', filee)
      }
      

    } catch (error) {
      
    }
  }
  console.log(filee);
  
  
  return (
    <form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        <DropzoneArea onChange={e => setfile(e[0])} filesLimit={1} />
        <br/>
        <div className="popBox_item"> 
            <label className="form-label">Заголовок</label>
            <input type="text" name="title" ref={register} className="form-control" />
        </div>
        <div className="popBox_item">
            <label className="form-label">Текст</label>
            <textarea name="descript" ref={register}></textarea>
        </div>
            
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
  )
}

export default HeadSlideForm