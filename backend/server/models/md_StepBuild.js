import mongoose from 'mongoose';

const StepBuildShema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    }
    
})

const StepBuildBildShema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    year: {
        type:String,
        require:true
    },
    url: {
        type:String,
        require:true
    },
    steps: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'stepbuild-steps'
    },
    img: {
        type:String,
        
    }
    
})

export const StepsModel =  mongoose.model('stepbuild-steps',StepBuildShema)
export const BuildModel =  mongoose.model('stepbuild-build',StepBuildBildShema)