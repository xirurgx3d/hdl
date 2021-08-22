import express from 'express';
import HeadSlidehema from '../../../models/md_headSlide'
import {Controller,ControllerBridge} from '../../Controller'

const router = express.Router()
const contlol = new Controller(HeadSlidehema)
const metods = new ControllerBridge(contlol)


router.post('/add',contlol.template(metods.add))


export default router;