"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CateShema = new _mongoose["default"].Schema({
  name: {
    type: String,
    require: true
  },
  parent_cat: {
    type: _mongoose["default"].SchemaTypes.ObjectId
  },
  dethlvl: {
    type: Number,
    "default": 0
  }
});

var _default = _mongoose["default"].model('cate', CateShema);

exports["default"] = _default;