import express from 'express';
import GalleryHeadShema from '../../../models/md_galleryHead'
import {Controller,ControllerBridge} from '../../Controller'
import path from 'path';
import fs from 'fs'

const router = express.Router()
const contlol = new Controller(GalleryHeadShema)
const metods = new ControllerBridge(contlol)

router.get('/list',contlol.template(metods.getAll))
router.get('/list/:id',contlol.template(metods.getItem))
router.post('/add',contlol.template(metods.add))
router.put('/edit/:id',contlol.template(metods.edit))
router.delete('/delet/:id',contlol.template(metods.delete)) 

export default router;