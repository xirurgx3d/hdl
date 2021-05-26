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
const PaginatePlugin = (schema, options) => {
    options = options || {}
    schema.query.paginate = async function(params) {
      const pagination = {
        limit: options.limit || 10,
        page: 1,
        count: 0
      }
      pagination.limit = parseInt(params.limit) || pagination.limit
      const page = parseInt(params.page)
      pagination.page = page > 0 ? page : pagination.page
      const offset = (pagination.page - 1) * pagination.limit
      const [data, count] = await Promise.all([
        this.limit(pagination.limit).skip(offset),
        this.model.countDocuments(this.getQuery())
      ]);
      
      pagination.count = Math.ceil(count / pagination.limit)
      return { data, pagination }
    }
  }

ProdShema.plugin(PaginatePlugin, { limit: 10 })


export default mongoose.model('product',ProdShema)