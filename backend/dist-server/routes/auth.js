"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authenticate = require("../middleware/auth/authenticate");

var _register = _interopRequireDefault(require("../controllers/auth/register"));

var _validat = _interopRequireDefault(require("../middleware/auth/validat"));

require("regenerator-runtime/runtime.js");

var _login = _interopRequireDefault(require("../controllers/auth/login"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var router = _express["default"].Router();

router.post('/reg', (0, _validat["default"])('login'), _register["default"]);
router.post('/login', [_authenticate.authenticate], (0, _validat["default"])('login'), _login["default"]);
router.post('/auth', function (req, res) {
  var tok = req.headers.authorization.split(' ')[1];

  _jsonwebtoken["default"].verify(tok, process.env.SECRET_KEY, function (err, payload) {
    if (err) {
      res.status(403).send({
        error: true
      });
    }

    res.status(200).send({
      error: false
    });
  });
});
var _default = router;
exports["default"] = _default;