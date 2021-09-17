import express from 'express';
import {StepsModel,BuildModel} from '../../../models/md_StepBuild'
import {Controller,ControllerBridge} from '../../Controller'

const router = express.Router()
const StepContlol = new Controller(StepsModel)
const Stepmetods = new ControllerBridge(StepContlol)

const BuldContlol = new Controller(BuildModel)
const Buldmetods = new ControllerBridge(BuldContlol)

router.get('/step/list',StepContlol.template(Stepmetods.getAll))
router.get('/step/list/:id',StepContlol.template(Stepmetods.getItem))
router.post('/step/add',StepContlol.template(Stepmetods.add))
router.put('/step/edit/:id',StepContlol.template(Stepmetods.edit))
router.delete('/step/delet/:id',StepContlol.template(Stepmetods.delete)) 

router.get('/build/list',BuldContlol.template(Buldmetods.getAll))
router.get('/build/list/:id',BuldContlol.template(Buldmetods.getItem))
router.post('/build/add',BuldContlol.template(Buldmetods.add))
router.put('/build/edit/:id',BuldContlol.template(Buldmetods.edit))
router.delete('/build/delet/:id',BuldContlol.template(Buldmetods.delete)) 

export default router;