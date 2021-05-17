"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var errors = {
  email: body('email').isEmail().withMessage('не коректый емайл'),
  pass: body('password').isLength({
    min: 5
  }).withMessage('короткий пароль')
};

var _default = function _default(valid) {
  var mass = [];

  switch (valid) {
    case 'login':
      mass.push(errors.email, errors.pass);

    default:
      mass;
  }

  return mass;
};

exports["default"] = _default;