"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./auth"));

var _catalog = _interopRequireDefault(require("./catalog"));

var _components = _interopRequireDefault(require("./components"));

var _mail = _interopRequireDefault(require("./mail"));

var _crmRequest = _interopRequireDefault(require("./crm-request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/auth', _auth["default"]);
router.use('/catalog', _catalog["default"]);
router.use('/components', _components["default"]);
router.use('/mail', _mail["default"]);
router.use('/send-form', _crmRequest["default"]);
var _default = router;
exports["default"] = _default;