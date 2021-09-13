import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useForm } from 'react-hook-form';
import { ICarousel, ISliders, Tfile } from '../../../@types/Interface'; 
import { API } from '../../../api/Api';
import { slidersRoute } from '../../../constants/constFetch';
import { useParams } from 'react-router-dom';
import useSlideForm from '../../../hooks/useSlideForm';
import { useStyles } from '../../../styled/material_styles';
import { Fab, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { initialStateBuild, reducerBuild } from '../../../reducers/reducerBuild';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';


type Inputs = {
  title: string
  run: number
  car:number
  img:Tfile
}

const BuildForm: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const { id } = useParams<{ id: string }>()
  const [filee, setfile] = useState<any>(false)
  const [YearValue, setYearValue] = useState('')
  const [state, dispatch] = useReducer(reducerBuild, initialStateBuild)
  
  
  const fomrdata = (formData:any,data:Inputs) => {
      formData.append('title', String(data.title))
      formData.append('run', String(data.run))
      formData.append('car', String(data.car))
      if (filee || slideState?.img) {
        formData.append('img', filee || slideState?.img)
    }
  }

    const { slideState, onSubmit } = useSlideForm<ICarousel, Inputs>(
      fomrdata,
      slidersRoute.carousel,
      filee)
  
    const YearChange = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const name = event.target.value as typeof YearValue;
      setYearValue(name);
    }, [setYearValue])
  
    const addUrl = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch({type:'addUrl',payload:state.urlVideo})
    }, [state.urlVideo])
  
    
    const DeleteUrl = useCallback((id:number) => {
        dispatch({type:'deletUrl',payload:id})
    }, [state.urlVideo])
  
  //console.log(state);

  
  
  
  return (
    <form className="popBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="popBox_item">
        
          
        
        <div className="popBox_item"> 
            <label className="form-label">Заголовок</label>
            <input type="text" name="title" ref={register} defaultValue={slideState ? String(slideState.title) : ''} className="form-control" />
        </div>
        <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Год</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={YearValue}
                    onChange={YearChange}
                  >
                    <MenuItem value={10}>2021</MenuItem>
                    <MenuItem value={20}>2022</MenuItem>
                    <MenuItem value={30}>2023</MenuItem>
                  </Select>
                </FormControl>
        
        
        <Grid container spacing={3}>
          <Grid item>
            <TextField value={state.urlVideo} onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type:'url',payload:e.target.value})} label="YouTube Url" />
          </Grid>
          <Grid item>
            <Fab color="primary" size="small" aria-label="add" onClick={addUrl} className={classes.add_video}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>

        {state.urlBox.length > 0 &&
          <List className={classes.youtubeList}>
            {state.urlBox.map((val: unknown, index: number) => {
              return (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <a href={val as string}>
                  <ListItemText
                    primary={val as string}
                
                  />
                  </a>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={e => DeleteUrl(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
          </List>
        }
        <br />
        <br/>
        
        {
          !slideState && <DropzoneArea onChange={e => setfile(e[0])} />
        }
        {
          id && slideState && <DropzoneArea onChange={e => setfile(e[0])}  initialFiles={[process.env.REACT_APP_API_URL + '/api/static/img/' + String(slideState?.img)]} />
        }
      </div>
          
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
  )
}

export default BuildForm