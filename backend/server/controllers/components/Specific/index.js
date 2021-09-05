import express from 'express';
import SpecificSlidehema from '../../../models/md_specific'
import {Controller,ControllerBridge} from '../../Controller'

const router = express.Router()
const contlol = new Controller(SpecificSlidehema)
const metods = new ControllerBridge(contlol)

router.get('/list',contlol.template(metods.getAll))
router.get('/list/:id',contlol.template(metods.getItem))
router.post('/add',contlol.template(metods.add))
router.put('/edit/:id',contlol.template(metods.edit))
router.delete('/delet/:id',contlol.template(metods.delete))

export default router;