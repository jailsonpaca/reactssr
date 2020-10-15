"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _materialKitReact = require("../../material-kit-react.js");

var componentsStyle = function componentsStyle(theme) {
  var _title;

  return {
    backStage: {
      background: "radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)"
    },
    container: _materialKitReact.container,
    brand: {
      color: "#FFFFFF",
      textAlign: "left"
    },
    parallax: (0, _defineProperty2.default)({
      height: "670px",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionY: "50%",
      paddingBottom: "15%",
      background: "#015871",
      backgroundColor: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 10%, #015871 12%)"
    }, theme.breakpoints.down("sm"), {
      background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 8%, #015871 10%)"
    }),
    fabianoCircle: {
      position: "absolute",
      top: "20%",
      width: "40%"
    },
    headerLogo: (0, _defineProperty2.default)({
      width: "90%"
    }, theme.breakpoints.down("sm"), {
      width: "45%"
    }),
    title: (_title = {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "absolute",
      top: "72%"
    }, (0, _defineProperty2.default)(_title, theme.breakpoints.down("sm"), {
      top: "15%",
      fontSize: "2.5rem",
      textAlign: "center"
    }), (0, _defineProperty2.default)(_title, "textShadow", "4px 3px 5px rgba(0,0,0,0.8)"), _title),
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px 0 0"
    },
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      margin: "0px 30px 0px",
      borderRadius: "6px",
      boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    link: {
      textDecoration: "none"
    },
    textCenter: {
      textAlign: "center"
    },
    whatsAppBtn: {
      position: "fixed",
      bottom: "10px",
      right: "15px",
      zIndex: 100,
      "& svg ": {
        width: "30px",
        height: "30px"
      },
      padding: "30px",
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0,0.5), 0 3px 1px -2px rgba(0, 0, 0,0.5), 0 1px 5px 0 rgba(0, 0, 0,0.5)"
    }
  };
};

var _default = componentsStyle;
exports.default = _default;