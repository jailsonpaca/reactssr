"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _materialKitReact = require("../../../material-kit-react.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//import { useMediaQuery } from '@material-ui/core';
//const isTablet = useMediaQuery('(min-width:800px and max-width:1100px )');
var onlineStyle = function onlineStyle(theme) {
  var _btnQuero, _planContainer, _plan, _ref;

  return _ref = {
    section: {
      padding: "70px 0"
    },
    space70: {
      height: "70px",
      display: "block"
    },
    container: _materialKitReact.container,
    title: _objectSpread(_objectSpread({}, _materialKitReact.title), {}, (0, _defineProperty2.default)({
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
      textAlign: "center"
    }, theme.breakpoints.down("sm"), {
      paddingLeft: "20px",
      paddingRight: "20px"
    })),
    textCenter: {
      textAlign: "center"
    }
  }, (0, _defineProperty2.default)(_ref, "container", {
    marginLeft: "1.5%"
  }), (0, _defineProperty2.default)(_ref, "obsContainer", (0, _defineProperty2.default)({
    display: "flex",
    margin: "auto",
    flexWrap: "wrap"
  }, theme.breakpoints.down("sm"), {
    display: "inline"
  })), (0, _defineProperty2.default)(_ref, "obs", (0, _defineProperty2.default)({
    margin: "auto"
  }, theme.breakpoints.down("sm"), {
    width: "100%"
  })), (0, _defineProperty2.default)(_ref, "mapa", {
    maxWidth: "100%",
    transition: "transform .3s ease-in-out",
    boxShadow: "0 0 15px 2px #999",
    "&:hover": {
      boxShadow: "0 0 15px 5px #999",
      transform: "scale(1.02)"
    }
  }), (0, _defineProperty2.default)(_ref, "btnQuero", (_btnQuero = {
    display: "block",
    fontSize: "100%",
    backgroundColor: "#00d263 !important",
    border: "1px #0000005e solid"
  }, (0, _defineProperty2.default)(_btnQuero, theme.breakpoints.down("sm"), {
    marginLeft: "0%"
  }), (0, _defineProperty2.default)(_btnQuero, theme.breakpoints.between("800", "1100"), {
    padding: "10px 5px",
    fontSize: "90%"
  }), _btnQuero)), (0, _defineProperty2.default)(_ref, "icons", {
    width: "30px !important",
    height: "30px !important"
  }), (0, _defineProperty2.default)(_ref, "planContainer", (_planContainer = {
    maxWidth: "94%",
    flexWrap: 'nowrap'
  }, (0, _defineProperty2.default)(_planContainer, theme.breakpoints.down("sm"), {
    marginLeft: "1%",
    flexWrap: 'wrap'
  }), (0, _defineProperty2.default)(_planContainer, theme.breakpoints.between('600', '800'), {
    maxWidth: '100%',
    flexWrap: 'wrap'
  }), _planContainer)), (0, _defineProperty2.default)(_ref, "plan", (_plan = {
    borderRadius: "10px",
    margin: "10px"
  }, (0, _defineProperty2.default)(_plan, theme.breakpoints.between("800", "1100"), {
    margin: "9px"
  }), (0, _defineProperty2.default)(_plan, theme.breakpoints.between('600', '800'), {
    maxWidth: '45%'
  }), (0, _defineProperty2.default)(_plan, "&:hover", {
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)"
  }), (0, _defineProperty2.default)(_plan, "width", "100%"), (0, _defineProperty2.default)(_plan, "transition", "all .5s ease-in-out"), (0, _defineProperty2.default)(_plan, "cursor", "pointer"), (0, _defineProperty2.default)(_plan, "& h2", {
    fontSize: "2rem",
    textAlign: "center"
  }), (0, _defineProperty2.default)(_plan, "& h4", {
    textAlign: "center",
    marginBottom: 0
  }), (0, _defineProperty2.default)(_plan, "& h1", {
    marginTop: 0,
    textAlign: "center"
  }), (0, _defineProperty2.default)(_plan, "& p", {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "30px",
    "& strong": {
      fontSize: "30px",
      padding: "5px"
    }
  }), _plan)), _ref;
};

var _default = onlineStyle;
exports.default = _default;