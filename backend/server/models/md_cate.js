import mongoose from 'mongoose';

const CateShema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    parent_cat:{
        type:mongoose.SchemaTypes.ObjectId,
    },
    dethlvl:{
        type:Number,
        default:0
    }
    
})



export default mongoose.model('cate',CateShema)