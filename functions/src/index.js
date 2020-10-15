"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _history = require("history");

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./App"));

var _getData = _interopRequireDefault(require("./components/getData"));

(0, _getData.default)().then(function (data) {
  console.log(data);
});

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  console.log("Is in development!");
  (0, _getData.default)().then(function (data) {
    console.log(data);

    _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_App.default, {
      props: data
    })), document.getElementById("root"));
  });
} else {
  console.log("Is in production!");
  (0, _getData.default)().then(function (data) {
    _reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_App.default, {
      props: data
    })), document.getElementById("root"));
  });
}