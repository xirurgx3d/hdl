import mongoose from 'mongoose';

const GallerySlidehema = new mongoose.Schema({
    img:{
        type:Array,
        require:true
    },
    
    
})

export default mongoose.model('galleryslide',GallerySlidehema)