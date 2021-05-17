import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


type Inputs = {
    name:String,
    value:String
}
interface PropsAttr {
  attr: Inputs[] | any
}
const Attributes: React.FC<PropsAttr> = ({attr}): JSX.Element => {
  const [CountAttr, setCountAttr] = useState<number>(0)
  const [Attr, setAttr] = useState([])
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onAttr = () => {
    
  }

  return (
    <>
      <a onClick={() => setCountAttr((arr) => arr + 1)}>Добавить атрибут</a>
      
          <div className="mb-3">
            <label className="form-label">Название</label>
            <input
  name="test"
  ref={
    register({
      setValueAs: v => {
        console.log(v)
        return [
          {
            name:v
          }
        ]
      },
    })
  }
/>
                
             <label className="form-label">Название</label>
              <input type="text" name="value"
                ref={register({ required: true, minLength: 2, maxLength: 15 })}
                defaultValue=""
                className="form-control" /> 
          </div>
      </>
  )
}

export default Attributes