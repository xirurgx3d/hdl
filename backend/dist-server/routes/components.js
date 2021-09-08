"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _gallerySlide = _interopRequireDefault(require("../controllers/components/gallerySlide"));

var _headSlide = _interopRequireDefault(require("../controllers/components/headSlide"));

var _arousel = _interopRequireDefault(require("../controllers/components/\u0421arousel"));

var _Specific = _interopRequireDefault(require("../controllers/components/Specific"));

var _StepBuild = _interopRequireDefault(require("../controllers/components/StepBuild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/galleryslide', _gallerySlide["default"]);
router.use('/headeslide', _headSlide["default"]);
router.use('/carousel', _arousel["default"]);
router.use('/specific', _Specific["default"]);
router.use('/stepbuild', _StepBuild["default"]);
var _default = router;
exports["default"] = _default;