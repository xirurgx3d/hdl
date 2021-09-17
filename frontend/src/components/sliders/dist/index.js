"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GallerySlide_1 = require("./gallerySlide/GallerySlide");
var GalleryHeadForm_1 = require("./galleryHead/GalleryHeadForm");
var Specific_1 = require("./Specific/Specific");
var _arousel_1 = require("./\u0421arousel/\u0421arousel");
var SlidersDashboard = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(GallerySlide_1["default"], null),
        react_1["default"].createElement(GalleryHeadForm_1["default"], null),
        react_1["default"].createElement(_arousel_1["default"], null),
        react_1["default"].createElement(Specific_1["default"], null)));
};
exports["default"] = SlidersDashboard;
