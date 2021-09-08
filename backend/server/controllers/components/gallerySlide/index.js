import express from 'express';
import GallerySlidehema from '../../../models/md_gallerySlide'
import {Controller,ControllerBridge} from '../../Controller'
import path from 'path';
import fs from 'fs'

const router = express.Router()
const contlol = new Controller(GallerySlidehema)
const metods = new ControllerBridge(contlol)

router.get('/list',contlol.template(metods.getAll))
router.get('/list/:id',contlol.template(metods.getItem))
router.post('/add',contlol.template(metods.add,async (req,res)=>{
    let {img} = req.files
    
    const imagesMass = img.reduce((acc,images) => {
        images.mv(path.join(req.pathurl, 'img',images.name), err => console.log(err))
        acc.push(images.name)
        return acc
    },[]);
    await GallerySlidehema.create({img:imagesMass})
    res.status(200).send({error:false})
}))
router.put('/edit/:id',contlol.template(metods.edit))
router.delete('/delet/:id',contlol.template(metods.delete))

export default router;