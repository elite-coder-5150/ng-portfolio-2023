const { check, validationResult } = require('express-validator');

export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
        return res.status(422).json({errors: errors.array()});
    }

    next();
}

export const validateUser = [
    check('name')
        .isLength({min: 3, max: 15})
        .withMessage('name must be between 3 and 15 characters'),

    check('email')
        .isEmail()
        .withMessage('invalid email address'),

    check('password')
        .isLength({min: 3, max: 12})
        .withMessage('password must be between 3 and 12 characters'),

    check('confirmPassword')
        .custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error('password do not match');
            }

            return true;
        }),
    
    validate()
];

 export const validateRelation = [
    check('sender')
        .isLength({min: 3, max: 12})
        .withMessage('sender must be between 3 and 12 characters'),
    
    check('from')
        .isLength({min: 3, max: 12})
        .withMessage('from must be between 3 and 12 characters'),

    validate()
 ];

 export const validateContact = [
    
 ];