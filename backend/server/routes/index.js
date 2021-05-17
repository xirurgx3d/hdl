import express from 'express';
import authes from './auth';
import catalog from './catalog';

var router = express.Router();

router.use('/auth', authes)
router.use('/catalog',catalog)

export default router;
