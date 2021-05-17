const { body, validationResult } = require('express-validator');
import jwt from 'jsonwebtoken';
import User from '../../models/md_users';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

import "regenerator-runtime/runtime.js";
import { async } from 'regenerator-runtime';

export default async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(403).send({error:true,msg:errors.array()[0].msg}) 
    }
    const {email,password} = req.body
    const candidate = await User.findOne({email})
    if(candidate){
        try {
            let ays = await bcrypt.compare(password,candidate.password)
            if(ays){
                const token = jwt.sign(req.body, process.env.SECRET_KEY);
                //res.setHeader('X-Token', token);
                /* */    
                
                req.session.user = candidate
                req.session.autif = true
                
                res.status(200).send({
                    token:token,
                    user:candidate,
                    error:false
                })
            }else{
                res.status(403).send({error:true,msg:'не верный логин или пароль'})
            } 

        } catch (error) {
            console.log(error)
            res.status(403).send({error:true,msg:'bead'})
        }
    }else{
        res.status(403).send({error:true,msg:'не верный логин или пароль'})
    }

}