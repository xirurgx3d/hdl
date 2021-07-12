export class ProductCreater{
    constructor(model){
        this.Model = model
        this.catsId = []
    }
    init(store){
      if(store.serch){
        return this.SerchProd(store.serch)
      }
      else{
       return this.defaultProd()
      }  
    }
    SerchProd(serch){
        return this.Model.find({title:new RegExp(serch, 'i')})
    }
    
    defaultProd(){
        return this.Model.find({})
    }
}