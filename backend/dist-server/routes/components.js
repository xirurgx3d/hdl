"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _headSlide = _interopRequireDefault(require("../controllers/components/headSlide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/headeslide', _headSlide["default"]);
var _default = router;
exports["default"] = _default;