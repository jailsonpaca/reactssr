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

var depoimentsStyle = function depoimentsStyle(theme) {
  var _itemGrid;

  return _objectSpread({
    section: {
      padding: "70px 0"
    },
    container: _materialKitReact.container,
    space50: {
      height: "50px",
      display: "block"
    },
    card: {
      background: "#00B6FF",
      "&:hover": {
        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)"
      },
      padding: "1em",
      borderRadius: "10px",
      width: "100%",
      margin: "auto",
      display: "inline-block",
      clipPath: "circle(110% at 50% 20%)",
      transition: "all .5s ease-in-out",
      cursor: "pointer",
      color: "#fff",
      textAlign: "center",
      "& span": {
        float: "right",
        fontWeight: "bold",
        transition: "color .5s",
        position: "relative",
        marginRight: "4%"
      },
      "& h1": {
        margin: 0,
        fontSize: "25px",
        minHeight: "56px"
      },
      "& h2": {
        color: "#eee",
        fontSize: "20px",
        marginTop: "2px"
      },
      "& p": {
        marginTop: "10px",
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "30px",
        "& strong": {
          fontSize: "30px",
          padding: "5px"
        }
      }
    },
    title: _objectSpread(_objectSpread({}, _materialKitReact.title), {}, {
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
      textAlign: "center"
    }),
    subTitle: {
      textAlign: "center"
    },
    btnAgendar: {
      display: "block",
      margin: "auto",
      fontSize: "100%"
    },
    icons: {
      width: "30px !important",
      height: "30px !important"
    },
    typo: {
      paddingLeft: "25%",
      marginBottom: "40px",
      position: "relative",
      width: "100%"
    },
    note: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      bottom: "10px",
      color: "#c0c1c2",
      display: "block",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "13px",
      left: "0",
      marginLeft: "20px",
      position: "absolute",
      width: "260px"
    },
    itemGrid: (_itemGrid = {}, (0, _defineProperty2.default)(_itemGrid, theme.breakpoints.down("sm"), {
      margin: "10px"
    }), (0, _defineProperty2.default)(_itemGrid, theme.breakpoints.up("sm"), {
      margin: "auto"
    }), _itemGrid)
  }, _imagesStyles.default);
};

var _default = depoimentsStyle;
exports.default = _default;