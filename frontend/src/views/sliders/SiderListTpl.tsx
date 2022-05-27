import React, { ReactNode, useState } from 'react';

import styles from '../../components/sliders/style.module.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Tfile } from '../../@types/Interface';


interface IProps{
  images: Tfile | string
  delet: () => void
  route:string
  children?:ReactNode
}

const useStyles = makeStyles({
  root: {
    width:260,
    marginTop: 25,
    marginLeft: 10,
    marginRight:10
  },
  media: {
    height: 160,
  },
});

const SliderListTpl: React.FC<IProps> = ({images,delet,route, children }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} >
      <CardActionArea className={styles.cartbox}>
        <div className={styles.cartbox_icon}>
              <DeleteIcon onClick={delet} />
        </div>
        <Link className="badge bg-secondary" to={route}>
        <CardMedia
          className={classes.media}
          image={process.env.REACT_APP_API_URL + '/static/img/' + String(images)}
          title="Contemplative Reptile"
        />
        </Link>
        <CardContent>
          {
            children
          }
          
        </CardContent>
      </CardActionArea>
      
      
    </Card>  
  )
}
export default SliderListTpl