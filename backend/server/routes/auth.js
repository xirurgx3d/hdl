import express from 'express'
import { authenticate } from '../middleware/auth/authenticate'
import register from '../controllers/auth/register'
const { body, validationResult } = require('express-validator');
import validlogin from '../middleware/auth/validat';
import "regenerator-runtime/runtime.js";
import login from '../controllers/auth/login';
import jwt from 'jsonwebtoken';

const router = express.Router()


router.post('/reg', 
    validlogin('login'),
    register)

router.post('/login',
    [authenticate],
    validlogin('login'), 
    login) 

router.post('/auth',(req,res)=>{
    const tok = req.headers.authorization.split(' ')[1]
    jwt.verify(tok, process.env.SECRET_KEY,(err, payload)=>{
        if(err) { 
            res.status(403).send({error:true})
        }
        res.status(200).send({error:false})
    });
  
}) 

    
export default router