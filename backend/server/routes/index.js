import express from 'express';
import authes from './auth';
import catalog from './catalog';
import components from './components'
import mails from './mail'
import crm from './crm-request'

var router = express.Router();

router.use('/auth', authes)
router.use('/catalog',catalog)
router.use('/components',components)
router.use('/mail',mails)
router.use('/send-form',crm)

export default router;
