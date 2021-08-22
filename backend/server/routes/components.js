import express from 'express';
import headSlide from '../controllers/components/headSlide'

var router = express.Router();

router.use('/headeslide',headSlide)

export default router;
