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
router.get('/list', contlol.template(metods.getAll));
router.get('/list/:id', contlol.template(metods.getItem));
router.post('/add', contlol.template(metods.add));
router.put('/edit/:id', contlol.template(metods.edit));
router["delete"]('/delet/:id', contlol.template(metods["delete"]));
var _default = router;
exports["default"] = _default;