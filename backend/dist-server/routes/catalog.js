"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("../controllers/catalog/cate/index"));

var _index2 = _interopRequireDefault(require("../controllers/catalog/product/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/category', _index["default"]);
router.use('/product', _index2["default"]);
var _default = router;
exports["default"] = _default;