"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _materialKitReact = require("../../../material-kit-react.js");

var _headerLinksStyle = _interopRequireDefault(require("../../components/headerLinksStyle.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var navbarsStyle = function navbarsStyle(theme) {
  return _objectSpread(_objectSpread({
    section: {
      padding: "70px 0",
      paddingTop: "0"
    },
    container: _materialKitReact.container,
    title: _objectSpread(_objectSpread({}, _materialKitReact.title), {}, {
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    }),
    navbar: {
      marginBottom: "-20px",
      zIndex: "100",
      position: "relative",
      overflow: "hidden",
      "& header": {
        borderRadius: "0"
      }
    },
    navigation: {
      backgroundPosition: "center center",
      backgroundSize: "cover",
      marginTop: "0",
      minHeight: "740px"
    },
    formControl: {
      margin: "0 !important",
      paddingTop: "0"
    },
    inputRootCustomClasses: {
      margin: "0!important"
    },
    searchIcon: {
      width: "20px",
      height: "20px",
      color: "inherit"
    }
  }, (0, _headerLinksStyle.default)(theme)), {}, {
    img: {
      width: "40px",
      height: "40px",
      borderRadius: "50%"
    },
    imageDropdownButton: {
      padding: "0px",
      top: "4px",
      borderRadius: "50%",
      marginLeft: "5px"
    }
  });
};

var _default = navbarsStyle;
exports.default = _default;