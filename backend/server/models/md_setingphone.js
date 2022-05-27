import mongoose from 'mongoose';

const SetingadressSlidehema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    descript:{
        type:Object,
    },
    
})

export default mongoose.model('setingphone',SetingadressSlidehema)