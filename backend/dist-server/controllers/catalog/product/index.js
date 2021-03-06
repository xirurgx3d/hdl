"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _regeneratorRuntime = require("regenerator-runtime");

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _md_product = _interopRequireDefault(require("../../../models/md_product"));

var _ProductCreater = require("./ProductCreater");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

var create = new _ProductCreater.ProductCreater(_md_product["default"]);
router.post('/list',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var sort, _ref2, data, pagination;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sort = req.body.sort;
            _context.prev = 1;
            _context.next = 4;
            return create.init(req.body).populate('category', '-__v').populate('users', '-__v').sort(sort).paginate(req.body.pagination);

          case 4:
            _ref2 = _context.sent;
            data = _ref2.data;
            pagination = _ref2.pagination;
            //const q =  await Product.aggregate([{$match:{"category.name":"cate3"}}])
            res.status(200).send({
              data: data,
              pagination: pagination
            });
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(400).send({
              error: true
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/categoryList',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, sort, category, massCat, _ref4, data, pagination;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, sort = _req$body.sort, category = _req$body.category;
            _context2.prev = 1;
            _context2.next = 4;
            return _md_product["default"].getProdCats(category);

          case 4:
            massCat = _context2.sent;
            _context2.next = 7;
            return _md_product["default"].find({
              _id: {
                "$in": massCat
              }
            }).sort(sort).paginate(req.body.pagination);

          case 7:
            _ref4 = _context2.sent;
            data = _ref4.data;
            pagination = _ref4.pagination;
            res.status(200).send({
              data: data,
              pagination: pagination
            });
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(400).send({
              error: true
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 13]]);
  }));

  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());
router.get('/list/:id',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, cate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _md_product["default"].findById(id).populate('category', '-__v').populate('users', '-__v').lean();

          case 4:
            cate = _context3.sent;
            res.status(200).send(cate);
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(400).send({
              error: true
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}());
router.post('/add',
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var prodbody, img, filename;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            prodbody = req.body;
            _context4.prev = 1;

            if (!req.files) {
              _context4.next = 10;
              break;
            }

            img = req.files.img;
            filename = img.name;
            img.mv(_path["default"].join(req.pathurl, 'img', filename), function (err) {
              return console.log(err);
            });
            _context4.next = 8;
            return _md_product["default"].create(_objectSpread({}, prodbody, {
              img: filename
            }));

          case 8:
            _context4.next = 12;
            break;

          case 10:
            _context4.next = 12;
            return _md_product["default"].create(_objectSpread({}, prodbody));

          case 12:
            res.status(200).send({
              error: false
            });
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(400).send({
              error: true
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 15]]);
  }));

  return function (_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}());
router.put('/edit/:id',
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var prodbody, id, img, filename;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            prodbody = req.body;
            id = req.params.id;
            _context5.prev = 2;

            if (!req.files) {
              _context5.next = 11;
              break;
            }

            img = req.files.img;
            filename = img.name;
            img.mv(_path["default"].join(req.pathurl, 'img', filename), function (err) {
              return console.log(err);
            });
            _context5.next = 9;
            return _md_product["default"].findByIdAndUpdate(id, _objectSpread({}, prodbody, {
              img: filename
            }));

          case 9:
            _context5.next = 13;
            break;

          case 11:
            _context5.next = 13;
            return _md_product["default"].findByIdAndUpdate(id, _objectSpread({}, prodbody));

          case 13:
            res.status(200).send({
              error: false
            });
            _context5.next = 20;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(400).send({
              error: true
            });

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 16]]);
  }));

  return function (_x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}());
router["delete"]('/delet/:id',
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var prodbody, id, prod;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            prodbody = req.body;
            id = req.params.id;
            _context6.prev = 2;
            _context6.next = 5;
            return _md_product["default"].findById(id);

          case 5:
            prod = _context6.sent;

            if (prod.img) {
              _fs["default"].unlinkSync(_path["default"].join(req.pathurl, 'img', prod.img));
            }

            _context6.next = 9;
            return _md_product["default"].findOneAndDelete(id);

          case 9:
            res.status(200).send({
              error: false
            });
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(400).send({
              error: true
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 12]]);
  }));

  return function (_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}());
/*

{
    "title":"prod22",
    "category":"606aec44a7037323f8996aab",
    "users":"6048eb75bf7f791d8824fa53",
    "price":500,
    "priceOld":300,
    "photo":"http",
    "descript":"text",
    "feature":"fateress",
    "recomend":0,
    "atributes":[
        {
            "name":"color",
            "value":"green"
        }
    ]
}
*/

var _default = router;
exports["default"] = _default;