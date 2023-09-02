import { body } from "express-validator";

export const userRegistrationInputValidator = ()=> {
    return [
    body('firstName')
      .isLength({ min: 2 })
      .withMessage('First name must be at least 2 char long')
      .isLength({ max: 20 })
      .withMessage('First name can be maximum 20 char long')
      .exists()
      .withMessage('First name is required')
      .trim()
      .escape(),
    body('lastName')
      .isLength({ min: 2 })
      .withMessage('Last name must be at least 2 char long')
      .isLength({ max: 20 })
      .withMessage('Last name can be maximum 20 char long')
      .exists()
      .withMessage('Last name is required')
      .trim()
      .escape(),
    body('email')
      .isEmail()
      .withMessage('Please provide a valid emai')
      .exists()
      .withMessage('Email name is required')
      .trim()
      .escape(),
    body('password')
      .exists()
      .withMessage('Password is required')
      .trim()
      .escape(),
  ];
};