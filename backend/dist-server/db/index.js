"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var alias = "mongodb+srv://pipin:540193@cluster0.la9be.mongodb.net/hdl"; //const { DB_URL } = process.env;

var DB_NAME = 'hdl';
var DB_URL = 'localhost:27017'; // 127.0.0.1:27017 //localhost:27017 // 192.168.99.100

var mongooseOptions = {
  promiseLibrary: global.Promise,
  poolSize: 10,
  keepAlive: 30000,
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
};
var mongooseOptions2 = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}; // mongodb://username:password@localhost:27017/users  //127.0.0.1:27017

var connection = _mongoose["default"].connect("mongodb://".concat(DB_URL, "/").concat(DB_NAME), mongooseOptions); //const connection = mongoose.connect(alias, mongooseOptions2);


setTimeout(function () {
  connection.then(function () {
    // eslint-disable-next-line
    console.log("DB '".concat(DB_NAME, "' connected"));
  })["catch"](function (_ref) {
    var message = _ref.message;
    // eslint-disable-next-line
    console.log("DB ".concat(DB_NAME, " connectionError: ").concat(message));
  });
}, 1000);