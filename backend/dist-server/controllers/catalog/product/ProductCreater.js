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
  }

  _createClass(ProductCreater, [{
    key: "init",
    value: function init(store) {
      /*
      Object.keys(store).forEach((val)=>{
          
        if(store[val] && this[val]){
            console.log(this[val](store[val]))
            return this[val](store[val])
        }
      })
      */
      if (store.serch) {
        console.log('serch');
        return this.SerchProd(store.serch);
      } else if (store.category) {
        console.log(store.category);
        return this.Category(store.category);
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
    key: "Category",
    value: function Category() {
      console.log(object);
      return this.Model.find({});
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