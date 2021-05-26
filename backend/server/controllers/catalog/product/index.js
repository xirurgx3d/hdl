import express from 'express';
import { async } from 'regenerator-runtime';
import path from 'path';
import fs from 'fs'
import Product from '../../../models/md_product';

const router = express.Router()

router.post('/list', async (req,res)=>{
    //console.log(req.body)
    const {sort} = req.body 
    try {
        /**/
        const { data, pagination } = await Product.find({})
            .populate('category','-__v')
            .populate('users','-__v')
            .sort(sort)
            .paginate(req.body.pagination)
            
        
        res.status(200).send({data,pagination}) 
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
})
router.get('/list/:id', async (req,res)=>{
    const {id} = req.params
    try {
        const cate = await Product.findById(id)
        .populate('category','-__v')
        .populate('users','-__v')
        .lean()
        res.status(200).send(cate) 
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
})
router.post('/add', async (req,res)=>{
    const prodbody = req.body
    console.log(req.body)
    
    try {
        if(req.files){
            const {img} = req.files
            let filename = img.name
            img.mv(path.join(req.pathurl, 'img',filename), err => console.log(err))
            await Product.create({...prodbody,img:filename})
        }else{
            await Product.create({...prodbody})
        }
        res.status(200).send({error:false})
          
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
})
router.put('/edit/:id', async (req,res)=>{
    const prodbody = req.body
    const {id} = req.params
    try {
        if(req.files){
            const {img} = req.files
            let filename = img.name
            img.mv(path.join(req.pathurl, 'img',filename), err => console.log(err))
            await Product.findByIdAndUpdate(id,{...prodbody,img:filename})
        }else{
            await Product.findByIdAndUpdate(id,{...prodbody})
        }
        
        res.status(200).send({error:false})
          
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
})
router.delete('/delet/:id', async (req,res)=>{
    const prodbody = req.body
    const {id} = req.params
    try {
        
        const prod = await Product.findById(id)
        
        if(prod.img){
            fs.unlinkSync(path.join(req.pathurl, 'img',prod.img))
        }
        
        await Product.findOneAndDelete(id)
        res.status(200).send({error:false})
          
    } catch (error) {
        console.log(error)
        res.status(400).send({error:true}) 
    }
})

/*

{
    "title":"prod22",
    "category":"606aec44a7037323f8996aab",
    "users":"6048eb75bf7f791d8824fa53",
    "price":500,
    "priceOld":300,
    "photo":"http",
    "descript":"text",
    "feature":"fateress",
    "recomend":0,
    "atributes":[
        {
            "name":"color",
            "value":"green"
        }
    ]
}
*/

export default router;