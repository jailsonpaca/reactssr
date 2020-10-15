"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _materialKitReact = require("../../material-kit-react.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var headerStyle = function headerStyle(theme) {
  var _scrollDownBtn;

  return {
    appBar: {
      display: "flex",
      border: "0",
      borderRadius: "3px",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: "#555",
      width: "100%",
      backgroundColor: "#fff",
      boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
      transition: "all 150ms ease 0s",
      alignItems: "center",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      position: "relative",
      zIndex: "unset"
    },
    absolute: {
      position: "absolute",
      zIndex: "1100"
    },
    fixed: {
      position: "fixed",
      zIndex: "1100"
    },
    container: _objectSpread(_objectSpread({}, _materialKitReact.container), {}, {
      minHeight: "50px",
      flex: "1",
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      flexWrap: "nowrap"
    }),
    containerOnScroll: {
      marginLeft: "10px",
      marginRight: "10px",
      "& div:nth-child(2)": {
        marginLeft: "15%"
      },
      maxWidth: "100%" // maxWidth: "60% !important",

    },
    scrollDownBtn: (_scrollDownBtn = {
      position: "absolute",
      left: "47%"
    }, (0, _defineProperty2.default)(_scrollDownBtn, theme.breakpoints.down("sm"), {
      left: "40%"
    }), (0, _defineProperty2.default)(_scrollDownBtn, "top", "570px"), (0, _defineProperty2.default)(_scrollDownBtn, "zIndex", 100), (0, _defineProperty2.default)(_scrollDownBtn, "& svg ", {
      width: "50px",
      height: "50px",
      color: "#fff" // boxShadow: "0 2px 2px 0 rgba(0, 0, 0,0.5), 0 3px 1px -2px rgba(0, 0, 0,0.5), 0 1px 5px 0 rgba(0, 0, 0,0.5)",

    }), _scrollDownBtn),
    flex: {
      flex: 1
    },
    headerLogo: {
      padding: "0px 8px",
      justifyContent: "left"
    },
    openDrawer: {},
    title: _objectSpread(_objectSpread({}, _materialKitReact.defaultFont), {}, {
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      padding: "8px 16px",
      letterSpacing: "unset",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    }),
    appResponsive: {
      margin: "20px 10px"
    },
    primary: {
      backgroundColor: _materialKitReact.primaryColor,
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
    },
    info: {
      backgroundColor: _materialKitReact.infoColor,
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
    },
    success: {
      backgroundColor: _materialKitReact.successColor,
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
    },
    warning: {
      backgroundColor: _materialKitReact.warningColor,
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
    },
    danger: {
      backgroundColor: _materialKitReact.dangerColor,
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
    },
    rose: {
      backgroundColor: _materialKitReact.roseColor,
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
    },
    transparent: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      paddingTop: "10px",
      color: "#FFFFFF"
    },
    dark: {
      color: "#FFFFFF",
      backgroundColor: "#212121 !important",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
      border: "0",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: "#555",
      backgroundColor: "#fff !important",
      boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    },
    drawerPaper: _objectSpread(_objectSpread({
      border: "none",
      bottom: "0",
      transitionProperty: "top, bottom, width",
      transitionDuration: ".2s, .2s, .35s",
      transitionTimingFunction: "linear, linear, ease",
      width: _materialKitReact.drawerWidth
    }, _materialKitReact.boxShadow), {}, {
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0"
    }, _materialKitReact.transition)
  };
};

var _default = headerStyle;
exports.default = _default;