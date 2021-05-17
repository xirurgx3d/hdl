"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./auth"));

var _catalog = _interopRequireDefault(require("./catalog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/auth', _auth["default"]);
router.use('/catalog', _catalog["default"]);
var _default = router;
exports["default"] = _default;