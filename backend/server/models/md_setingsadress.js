import mongoose from 'mongoose';

const SetingadressSlidehema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    descript:{
        type:Object,
    },
    mailsale:{
        type:String,
        require:true
    },
    mailinfo:{
			type:String,
			require:true
        
    }
    
    
})

export default mongoose.model('setingadress',SetingadressSlidehema)