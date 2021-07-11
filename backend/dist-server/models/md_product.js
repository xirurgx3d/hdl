"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

ProdShema.statics.getProdCats =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(catrgoryName) {
    var cates, ids;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.find({}).populate({
              path: 'category',
              match: {
                name: catrgoryName
              }
            }).exec();

          case 2:
            cates = _context.sent;
            ids = cates.reduce(function (acc, val) {
              if (val.category) {
                acc.push(val._id);
              }

              return acc;
            }, []);
            return _context.abrupt("return", this.find({
              _id: {
                "$in": ids
              }
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var PaginatePlugin = function PaginatePlugin(schema, options) {
  options = options || {};

  schema.query.paginate =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(params) {
      var pagination, page, offset, _ref3, _ref4, data, count;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pagination = {
                limit: options.limit || 10,
                page: 1,
                count: 0
              };
              pagination.limit = parseInt(params.limit) || pagination.limit;
              page = parseInt(params.page);
              pagination.page = page > 0 ? page : pagination.page;
              offset = (pagination.page - 1) * pagination.limit;
              _context2.next = 7;
              return Promise.all([this.limit(pagination.limit).skip(offset), this.model.countDocuments(this.getQuery())]);

            case 7:
              _ref3 = _context2.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              data = _ref4[0];
              count = _ref4[1];
              pagination.count = Math.ceil(count / pagination.limit);
              return _context2.abrupt("return", {
                data: data,
                pagination: pagination
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

ProdShema.plugin(PaginatePlugin, {
  limit: 10
});

var _default = _mongoose["default"].model('product', ProdShema);

exports["default"] = _default;