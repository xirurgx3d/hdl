import mongoose from 'mongoose';

const HeadSlidehema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    descript:{
        type:String,
    },
    img:{
        type:String,
        require:true
    },
    
    
})

export default mongoose.model('headslide',HeadSlidehema)