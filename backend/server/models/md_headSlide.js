import mongoose from 'mongoose';

const HeadSlidehema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    test:{
        type:String,
    },
    images:{
        type:String,
        require:true
    },
    
    
})

export default mongoose.model('headslide',HeadSlidehema)