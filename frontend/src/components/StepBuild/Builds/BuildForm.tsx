import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';
import { ICarousel, ISliders, ISteps, Tfile } from '../../../@types/Interface'; 
import { API } from '../../../api/Api';
import { slidersRoute,stepBuildRoute as stepBuildRoutes } from '../../../constants/constFetch';
import { useParams } from 'react-router-dom';
import useSlideForm from '../../../hooks/useSlideForm';
import { useStyles } from '../../../styled/material_styles';
import { Fab, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { initialStateBuild, reducerBuild } from '../../../reducers/reducerBuild';



type Inputs = {
  title: string
  year: string
  url: string
  steps:string
  img:Tfile
}

const BuildForm: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const { id } = useParams<{ id: string }>()
  const [filee, setfile] = useState<any>(false)
  const [YearValue, setYearValue] = useState('')

  const [steps, setSteps] = useState<ISteps[] | null>()
  const [StepsValue, setStepsValue] = useState('')
  
  
  
  const fomrdata = (formData:any,data:Inputs) => {
      formData.append('title', String(data.title))
      
      //formData.append('url', String(data.url))
    formData.append('year', String(data.year)) 
      
      if (StepsValue) {
        formData.append('steps', String(StepsValue)) 
      }
      if (filee) {
        for (let i = 0; i < filee.length; i++) {
          formData.append('img', filee[i])
        }
          
      }
  }
  

  useEffect(() => {
   (async() => {
    try {
      const {data} = await API.Sliders.slidelist(stepBuildRoutes.step)
      setSteps(data)
    } catch (error) {
      setSteps(null)
    }
  })()
  },[])

    const { slideState, onSubmit } = useSlideForm<Inputs, Inputs>(
      fomrdata,
      stepBuildRoutes.build,
      filee)
  
      
  
    const YearChange = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const name = event.target.value as typeof YearValue;
      setYearValue(name);
    }, [setYearValue])
  
    const StepsChange = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const name = event.target.value as typeof StepsValue;
      setStepsValue(name);
    }, [setStepsValue])
    
  
    /*
    const addUrl = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch({type:'addUrl',payload:state.urlVideo})
    }, [state.urlVideo])
  
    
    const DeleteUrl = useCallback((id:number) => {
        dispatch({type:'deletUrl',payload:id})
    }, [state.urlVideo])
  */
    const imagesArr = useCallback((mass:string[]) => {
      return mass.map((val:string) => {
        return process.env.REACT_APP_API_URL + '/api/static/img/' + val
        //[process.env.REACT_APP_API_URL + '/api/static/img/' + String(slideState?.img)]
      })
    },[id])

  
  
  
  return (
    <form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        
        <div className="popBox_item"> 
            <label className="form-label">Заголовок</label>
            <input type="text" name="title" ref={register} defaultValue={slideState ? String(slideState.title) : ''} className="form-control" />
        </div>
        <div className="popBox_item"> 
            <label className="form-label">год меяц</label>
            <input type="text" name="year" ref={register} defaultValue={slideState ? String(slideState.year) : ''} className="form-control" />
        </div>
        
        {/*
        <FormControl className={classes.formControl}>
                <InputLabel id="year">Год</InputLabel>
                  <Select
                    labelId="year"
                    id="year-select"
                    value={slideState ? slideState.year : YearValue}
                    onChange={YearChange}
                  >
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                  </Select>
                </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="step">Очередь</InputLabel>
                  <Select
                    labelId="step"
                    id="step-select"
                    value={slideState ? slideState.steps : StepsValue}
                    onChange={StepsChange}
                    >
                    {
                        steps && steps.map((val: ISteps) => {
                          return <MenuItem value={val._id}>{val.title}</MenuItem>
                        })
                    }
                    
                    
                  </Select>
                </FormControl>
        
        
        <br />
        <br />
        <label className="form-label">Превью видео</label>
        <br />
                  */ }
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

export default BuildForm