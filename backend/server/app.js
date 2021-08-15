require('dotenv').config()
import express, { Router } from 'express'
import helmet from 'helmet';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session  from 'express-session'
import uuid from 'uuid/v4'
import router from './routes/index';
import cors from 'cors';
import fileUpload from 'express-fileupload';

var app = express();

/*
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter); 
*/

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      cookie: { httpOnly: false },
      saveUninitialized: false,
      
    })
  );
//app.use(express.static(path.join(__dirname, '../public')));
app.use(fileUpload({}))

app.use('/api/static',express.static(path.join(__dirname, '../public'))); 
 
import './db'

app.use((req, res, next) => {
    // eslint-disable-next-line
    //console.log('auth -',req.session)
    req.pathurl = path.resolve(__dirname, '..', 'public')
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
});


app.use('/api',router)

export default app;
