"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _md_users = _interopRequireDefault(require("../../models/md_users"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _crypto = _interopRequireDefault(require("crypto"));

require("regenerator-runtime/runtime.js");

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var errors, _req$body, email, password, candidate, ays, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(403).send({
              error: true,
              msg: errors.array()[0].msg
            }));

          case 3:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 6;
            return _md_users["default"].findOne({
              email: email
            });

          case 6:
            candidate = _context.sent;

            if (!candidate) {
              _context.next = 21;
              break;
            }

            _context.prev = 8;
            _context.next = 11;
            return _bcrypt["default"].compare(password, candidate.password);

          case 11:
            ays = _context.sent;

            if (ays) {
              token = _jsonwebtoken["default"].sign(req.body, process.env.SECRET_KEY); //res.setHeader('X-Token', token);

              /* */

              req.session.user = candidate;
              req.session.autif = true;
              res.status(200).send({
                token: token,
                user: candidate,
                error: false
              });
            } else {
              res.status(403).send({
                error: true,
                msg: 'не верный логин или пароль'
              });
            }

            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](8);
            console.log(_context.t0);
            res.status(403).send({
              error: true,
              msg: 'bead'
            });

          case 19:
            _context.next = 22;
            break;

          case 21:
            res.status(403).send({
              error: true,
              msg: 'не верный логин или пароль'
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 15]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;