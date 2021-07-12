"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductCreater = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductCreater =
/*#__PURE__*/
function () {
  function ProductCreater(model) {
    _classCallCheck(this, ProductCreater);

    this.Model = model;
    this.catsId = [];
  }

  _createClass(ProductCreater, [{
    key: "init",
    value: function init(store) {
      if (store.serch) {
        return this.SerchProd(store.serch);
      } else {
        return this.defaultProd();
      }
    }
  }, {
    key: "SerchProd",
    value: function SerchProd(serch) {
      return this.Model.find({
        title: new RegExp(serch, 'i')
      });
    }
  }, {
    key: "defaultProd",
    value: function defaultProd() {
      return this.Model.find({});
    }
  }]);

  return ProductCreater;
}();

exports.ProductCreater = ProductCreater;