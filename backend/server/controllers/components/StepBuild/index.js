import express from 'express';
import {StepsModel} from '../../../models/md_StepBuild'
import {Controller,ControllerBridge} from '../../Controller'

const router = express.Router()
const StepContlol = new Controller(StepsModel)
const Stepmetods = new ControllerBridge(StepContlol)

router.get('/step/list',StepContlol.template(Stepmetods.getAll))
router.get('/step/list/:id',StepContlol.template(Stepmetods.getItem))
router.post('/step/add',StepContlol.template(Stepmetods.add))
router.put('/step/edit/:id',StepContlol.template(Stepmetods.edit))
router.delete('/step/delet/:id',StepContlol.template(Stepmetods.delete)) 

export default router;