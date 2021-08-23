export class Controller{
    constructor(shema){
        this.shema = shema
    }
    errorStatus(res,error){
        console.log(error)
        res.status(400).send({error:true})
    }
    template(component,clob){
       return function(req,res){
            try {
                if(clob){
                    clob(req,res)
                }else{
                    component(req,res)
                }
            } catch (error) {
                this.errorStatus(res,error)
            }
        }    
    }
}

export class ControllerBridge{
    constructor(implementation){
        this.impl = implementation
        this.Shema = implementation.shema

        this.add = this.add.bind(this)
    } 
    async getAll(req,res){
        const data = await this.Shema.find({}).select('-__v')
        res.status(200).send(data)
    }
    async add(req,res){
        const body = req.body
        /*
        if(req.files){
            const {img} = req.files
            let filename = img.name
            img.mv(path.join(req.pathurl, 'img',filename), err => console.log(err))
            //await this.Shema.create({...body,img:filename})
        }else{
            //await HeadSlidehema.create({...body})
        }
        */
        
        await this.Shema.create({...body})
        res.status(200).send({error:false})
    }  
}
