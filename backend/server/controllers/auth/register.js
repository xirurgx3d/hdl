import express from 'express'
const { body, validationResult } = require('express-validator');
import User from '../../models/md_users';
import bcrypt from 'bcrypt';
import "regenerator-runtime/runtime.js";
import { async } from 'regenerator-runtime';


export default async (req,res)=>{
    const {name,email,password,confim,role,rolepass} = req.body
    const candidate = await User.findOne({email})



    const errorse = validationResult(req)
    if(!errorse.isEmpty()){
       return res.status(422).send({error:true,msg:errorse.array()[0].msg}) 
    }

    if(candidate){
        res.status(403).send({error:true,msg:'такой пользователь уже есть'}) 
    }else if(password !== confim){
        res.status(403).send({error:true,msg:'пароли не совпадают'}) 
    }else if(role == 'admin' && rolepass !== 'qwerty'){
        res.status(403).send({error:true,msg:'не верный ключь'}) 
    }else{
        try {
            const hashes = await bcrypt.hash(password.toString(),10) 
            const newuser = await User.create({
                email:email,
                name:name,
                password:hashes,
                role:role
            })
            res.status(200).send({error:false}) 
        } catch (error) {
            console.log(error)
            res.status(403).send({error:true,msg:'что-то пошло не так'}) 
        }
         
    }
    
}