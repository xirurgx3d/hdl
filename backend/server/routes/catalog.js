import express from 'express';
import cate from '../controllers/catalog/cate/index'
import prod from '../controllers/catalog/product/index'

var router = express.Router();

router.use('/category',cate)
router.use('/product',prod)

export default router;
