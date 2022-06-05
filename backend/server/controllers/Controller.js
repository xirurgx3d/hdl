import path from 'path';
import fs from 'fs'

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
        this.getAll = this.getAll.bind(this)
        this.getItem = this.getItem.bind(this)
        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
    } 
    async getAll(req,res){
        const data = await this.Shema.find({}).select('-__v')
        res.status(200).send(data)
    }
    async getItem(req,res){
        const {id} = req.params
        const data = await this.Shema.findById(id).select('-__v')
        res.status(200).send(data)
    }
    async add(req,res){
        const body = req.body
				console.log('w',req.body);
				console.log('q',req.files);

        if(req.files){
            const {img} = req.files

						if(Array.isArray(img)){
							
								const imagesMass = img.reduce((acc,images) => {
										images.mv(path.join(req.pathurl, 'img',images.name), err => console.log(err))
										acc.push(images.name)
										return acc
								},[]);
								await this.Shema.create({...body,img:imagesMass})
						}else{
							let filename = img.name
	            img.mv(path.join(req.pathurl, 'img',filename), err => console.log(err))
	            await this.Shema.create({...body,img:filename})
						}
            
            
        }else{
            await this.Shema.create({...body})
        }
        res.status(200).send({error:false})
    }  
    async edit(req,res){
        const prodbody = req.body
        const {id} = req.params 

				
        if(req.files){
					const {img} = req.files

					if(Array.isArray(img)){ 
						const imagesMass = img.reduce((acc,images) => {
								images.mv(path.join(req.pathurl, 'img',images.name), err => console.log(err))
								acc.push(images.name)
								return acc
						},[]);
						await this.Shema.findByIdAndUpdate(id,{...prodbody,img:imagesMass}) 
					}else{
						const {img} = req.files
            let filename = img.name
            img.mv(path.join(req.pathurl, 'img',filename), err => console.log(err))
            await this.Shema.findByIdAndUpdate(id,{...prodbody,img:filename})
					}
						/*
            const {img} = req.files
            let filename = img.name
            img.mv(path.join(req.pathurl, 'img',filename), err => console.log(err))
            await this.Shema.findByIdAndUpdate(id,{...prodbody,img:filename})
						*/
        }else{
            await this.Shema.findByIdAndUpdate(id,{...prodbody})
        }
        
        res.status(200).send({error:false})
    }
    async delete(req,res){
        const prodbody = req.body
        const {id} = req.params
        const prod = await this.Shema.findById(id)
        if(prod.img){
            //fs.unlinkSync(path.join(req.pathurl, 'img',prod.img))
        }
        const q = await this.Shema.findOneAndDelete({
					_id:id,
					title:prod.title
				})
        res.status(200).send({error:false})
    }
}
