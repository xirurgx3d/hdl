"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _md_users = _interopRequireDefault(require("../../models/md_users"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

require("regenerator-runtime/runtime.js");

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, password, confim, role, rolepass, candidate, errorse, hashes, newuser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, confim = _req$body.confim, role = _req$body.role, rolepass = _req$body.rolepass;
            _context.next = 3;
            return _md_users["default"].findOne({
              email: email
            });

          case 3:
            candidate = _context.sent;
            errorse = validationResult(req);

            if (errorse.isEmpty()) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(422).send({
              error: true,
              msg: errorse.array()[0].msg
            }));

          case 7:
            if (!candidate) {
              _context.next = 11;
              break;
            }

            res.status(403).send({
              error: true,
              msg: 'такой пользователь уже есть'
            });
            _context.next = 33;
            break;

          case 11:
            if (!(password !== confim)) {
              _context.next = 15;
              break;
            }

            res.status(403).send({
              error: true,
              msg: 'пароли не совпадают'
            });
            _context.next = 33;
            break;

          case 15:
            if (!(role == 'admin' && rolepass !== 'qwerty')) {
              _context.next = 19;
              break;
            }

            res.status(403).send({
              error: true,
              msg: 'не верный ключь'
            });
            _context.next = 33;
            break;

          case 19:
            _context.prev = 19;
            _context.next = 22;
            return _bcrypt["default"].hash(password.toString(), 10);

          case 22:
            hashes = _context.sent;
            _context.next = 25;
            return _md_users["default"].create({
              email: email,
              name: name,
              password: hashes,
              role: role
            });

          case 25:
            newuser = _context.sent;
            res.status(200).send({
              error: false
            });
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](19);
            console.log(_context.t0);
            res.status(403).send({
              error: true,
              msg: 'что-то пошло не так'
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[19, 29]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;