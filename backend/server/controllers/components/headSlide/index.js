import express from 'express';

const router = express.Router()


router.get('/add', async (req,res)=>{
    res.status(200).send('ok') 
})

export default router;