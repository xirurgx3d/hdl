import express from 'express';
import { async } from 'regenerator-runtime';
import Cate from '../../../models/md_cate';

const router = express.Router()

router.get('/list', async (req,res)=>{
    try {
        const cateall = await Cate.find({}).select('-__v')
        res.status(200).send(cateall) 
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
})
router.get('/list/:id', async (req,res)=>{
    const {id} = req.params
    try {
        const cate = await Cate.findById(id).select('-__v')
        res.status(200).send(cate) 
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
})
router.post('/add', async (req,res)=>{
    const catbody = req.body
    try {
        const cate = await Cate.create({...catbody})
        res.status(200).send({error:false}) 
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
    
})
router.post('/edit/:id', async (req,res)=>{
    const catbody = req.body
    const {id} = req.params
    try {
        await Cate.findOneAndUpdate(id,{...catbody})
        res.status(200).send({error:false}) 
    } catch (error) {
        res.status(400).send({error:true})
    }
})
router.delete('/delet/:id', async (req,res)=>{
    const {id} = req.params
    try {
        const del = await Cate.findOneAndDelete(id)
        console.log(del)
        res.status(200).send({error:false})
          
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
})

export default router;
