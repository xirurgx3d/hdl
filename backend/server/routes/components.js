import express from 'express';
import headSlide from '../controllers/components/headSlide'
import Carousel from '../controllers/components/Сarousel'

var router = express.Router();

router.use('/headeslide',headSlide)
router.use('/carousel',Carousel)

export default router;
