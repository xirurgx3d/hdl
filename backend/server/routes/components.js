import express from 'express';
import headSlide from '../controllers/components/headSlide'
import Carousel from '../controllers/components/Сarousel'
import Specific from '../controllers/components/Specific'

var router = express.Router();

router.use('/headeslide',headSlide)
router.use('/carousel',Carousel)
router.use('/specific',Specific)

export default router;
