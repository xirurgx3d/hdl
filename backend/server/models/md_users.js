import mongoose from 'mongoose';

const UserShema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:String,
    
})

export default mongoose.model('users',UserShema)