import mongoose from 'mongoose';

const CarouselSlidehema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    run:{
        type:String,
				default: ''
    },
    car:{
        type:String,
				default: ''
    },
    img:{
        type:String,
        require:true
    },
    
    
})

export default mongoose.model('carousel_infra',CarouselSlidehema)