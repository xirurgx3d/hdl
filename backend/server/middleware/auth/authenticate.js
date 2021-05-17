import jwt from 'jsonwebtoken';

export const authenticate = (req,res,next) =>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({msg:"no headers"})
    }

    
    
    const [type, credentials] = authorization.split(' ');
    const [email, password] = Buffer.from(credentials, 'base64')
        .toString()
        .split(':');

    req.body = {
        email,
        password
    }
    
    next()
}