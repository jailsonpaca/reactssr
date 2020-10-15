"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _materialKitReact = require("../../../material-kit-react.js");

var _imagesStyles = _interopRequireDefault(require("../../imagesStyles.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var courseStyle = function courseStyle(theme) {
  return _objectSpread(_objectSpread({
    section: {
      background: "#EEEEEE",
      padding: "70px 0",
      paddingLeft: '20px'
    },
    textCenter: (0, _defineProperty2.default)({
      textAlign: "center"
    }, theme.breakpoints.down("sm"), {
      marginRight: "20px"
    }),
    container: (0, _defineProperty2.default)({
      textAlign: "center"
    }, theme.breakpoints.down("sm"), {
      "& h2, & h4": {
        textAlign: "center"
      },
      "& button": {
        marginLeft: "15%"
      }
    }),
    quadro: {
      maxWidth: "50%"
    },
    fabiano: (0, _defineProperty2.default)({
      maxWidth: "100%",
      width: "90%",
      marginLeft: "5%"
    }, theme.breakpoints.down("sm"), {
      marginRight: "20px",
      marginLeft: "0"
    }),
    space70: {
      height: "70px",
      display: "block"
    },
    space20: {
      height: "20px",
      display: "block"
    }
  }, _imagesStyles.default), {}, {
    link: {
      textDecoration: "none"
    }
  });
};

var _default = courseStyle;
exports.default = _default;