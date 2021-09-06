import mongoose from 'mongoose';

const StepBuildShema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    }
    
})

export const StepsModel =  mongoose.model('stepbuild-steps',StepBuildShema)