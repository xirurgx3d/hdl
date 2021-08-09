import express from 'express';
import authes from './auth';
import catalog from './catalog';
import components from './components'

var router = express.Router();

router.use('/auth', authes)
router.use('/catalog',catalog)
router.use('/components',components)

export default router;
