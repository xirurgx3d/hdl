import mongoose from 'mongoose';

const ProdShema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    category:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'cate'
    },
    users:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'users'
    },
    price:{
        type:Number,
        default:0
    },
    priceOld:{
        type:Number,
        default:0
    },
    descript:String,
    recomend:Number,
    img:String,
    data:String,
    atributes:[
        {
            name:String,
            value:String
        }
    ]
    
})
ProdShema.methods.addAttr = function (attr) {
    const atributs = [...this.atributes]
    Array.isArray(attr) 
        ? atributs = atributs.concat(attr) // [...]
        : atributs.push(attr)   
    
    this.atributes = atributs
    this.save()
}


export default mongoose.model('product',ProdShema)