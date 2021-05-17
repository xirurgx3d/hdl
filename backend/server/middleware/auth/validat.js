const { body, validationResult } = require('express-validator');

let errors = {
    email:body('email').isEmail().withMessage('не коректый емайл'),
    pass: body('password').isLength({ min: 5 }).withMessage('короткий пароль')   
}


export default (valid) =>{
    let mass = []
    switch(valid){
        case 'login':
            mass.push(
                errors.email,
                errors.pass
            )
        default : mass   
    }
    return mass
}