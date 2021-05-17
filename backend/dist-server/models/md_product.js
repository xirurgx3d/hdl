"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var ProdShema = new _mongoose["default"].Schema({
  title: {
    type: String,
    require: true
  },
  category: {
    type: _mongoose["default"].SchemaTypes.ObjectId,
    ref: 'cate'
  },
  users: {
    type: _mongoose["default"].SchemaTypes.ObjectId,
    ref: 'users'
  },
  price: {
    type: Number,
    "default": 0
  },
  priceOld: {
    type: Number,
    "default": 0
  },
  descript: String,
  recomend: Number,
  img: String,
  data: String,
  atributes: [{
    name: String,
    value: String
  }]
});

ProdShema.methods.addAttr = function (attr) {
  var atributs = _toConsumableArray(this.atributes);

  Array.isArray(attr) ? atributs = (_readOnlyError("atributs"), atributs.concat(attr)) // [...]
  : atributs.push(attr);
  this.atributes = atributs;
  this.save();
};

var _default = _mongoose["default"].model('product', ProdShema);

exports["default"] = _default;