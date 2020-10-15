"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Homepage = _interopRequireDefault(require("./pages/Homepage.js"));

var _LandingPage = _interopRequireDefault(require("./pages/LandingPage.js"));

var _ProfilePage = _interopRequireDefault(require("./pages/ProfilePage.js"));

var _LoginPage = _interopRequireDefault(require("./pages/LoginPage.js"));

// pages for this product
//var hist = createBrowserHistory();
function App(_ref) {
  var props = _ref.props;
  console.log(props);
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/landing-page",
    component: _LandingPage.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/profile-page",
    component: _ProfilePage.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/login-page",
    component: _LoginPage.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: function component() {
      return /*#__PURE__*/_react.default.createElement(_Homepage.default, {
        data: props
      });
    }
  }));
}