import mongoose from 'mongoose';

const CarouselSlidehema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    run:{
        type:Number,
    },
    car:{
        type:Number
    },
    img:{
        type:String,
        require:true
    },
    
    
})

export default mongoose.model('carousel_infra',CarouselSlidehema)