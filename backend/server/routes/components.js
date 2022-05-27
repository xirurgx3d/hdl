import express from 'express';
import galleryslide from '../controllers/components/gallerySlide'
import galleryhead from '../controllers/components/galleryHead'
import headSlide from '../controllers/components/headSlide'
import Carousel from '../controllers/components/Сarousel'
import Specific from '../controllers/components/Specific'
import StepBuild from '../controllers/components/StepBuild'
import SetingAdress from '../controllers/setings/SetingAdress'
import SetingPhone from '../controllers/setings/SetingPhone'

var router = express.Router();

router.use('/galleryslide',galleryslide)
router.use('/galleryhead',galleryhead)
router.use('/headeslide',headSlide)
router.use('/carousel',Carousel)
router.use('/specific',Specific)
router.use('/stepbuild',StepBuild)
router.use('/setingsadress',SetingAdress)
router.use('/setingphone',SetingPhone)

export default router;
