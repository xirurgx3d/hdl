"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _headSlide = _interopRequireDefault(require("../controllers/components/headSlide"));

var _arousel = _interopRequireDefault(require("../controllers/components/\u0421arousel"));

var _Specific = _interopRequireDefault(require("../controllers/components/Specific"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/headeslide', _headSlide["default"]);
router.use('/carousel', _arousel["default"]);
router.use('/specific', _Specific["default"]);
var _default = router;
exports["default"] = _default;