import express from 'express';
import authes from './auth';
import catalog from './catalog';
import mail from './mail'

var router = express.Router();

router.use('/auth', authes)
router.use('/catalog',catalog)
router.use('/components',components)
router.use('/mail',mail)

export default router;
