export class ProductCreater{
    constructor(model){
        this.Model = model
    }
    init(store){
      /*
      Object.keys(store).forEach((val)=>{
          
        if(store[val] && this[val]){
            console.log(this[val](store[val]))
            return this[val](store[val])
        }
      })
      */
      if(store.serch){
        console.log('serch')
        return this.SerchProd(store.serch)
      } else if(store.category){
        console.log(store.category)
        return this.Category(store.category)
      }
      else{
       return this.defaultProd()
      }  
    }
    SerchProd(serch){
        return this.Model.find({title:new RegExp(serch, 'i')})
    }
    Category(){
      console.log(object)
      return this.Model.find({})
    }
    defaultProd(){
        return this.Model.find({})
    }
}