"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var authenticate = function authenticate(req, res, next) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      msg: "no headers"
    });
  }

  var _authorization$split = authorization.split(' '),
      _authorization$split2 = _slicedToArray(_authorization$split, 2),
      type = _authorization$split2[0],
      credentials = _authorization$split2[1];

  var _Buffer$from$toString = Buffer.from(credentials, 'base64').toString().split(':'),
      _Buffer$from$toString2 = _slicedToArray(_Buffer$from$toString, 2),
      email = _Buffer$from$toString2[0],
      password = _Buffer$from$toString2[1];

  req.body = {
    email: email,
    password: password
  };
  next();
};

exports.authenticate = authenticate;