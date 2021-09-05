import mongoose from 'mongoose';

const SpecificSlidehema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    descript:{
        type:Object,
    },
    img:{
        type:String,
        require:true
    },
    sliders:{
        type:Array,
        
    }
    
    
})

export default mongoose.model('specific',SpecificSlidehema)