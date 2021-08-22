"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _md_headSlide = _interopRequireDefault(require("../../../models/md_headSlide"));

var _Controller = require("../../Controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var contlol = new _Controller.Controller(_md_headSlide["default"]);
var metods = new _Controller.ControllerBridge(contlol);
router.post('/add', contlol.template(metods.add));
var _default = router;
exports["default"] = _default;