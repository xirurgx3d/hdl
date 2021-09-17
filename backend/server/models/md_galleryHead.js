import mongoose from 'mongoose';

const GalleryHeadShema = new mongoose.Schema({
    img:{
        type:Array,
        require:true
    },
    
    
})

export default mongoose.model('galleryHead',GalleryHeadShema)