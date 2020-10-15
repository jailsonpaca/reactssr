"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _materialKitReact = require("../../../material-kit-react.js");

var _customCheckboxRadioSwitch = _interopRequireDefault(require("../../customCheckboxRadioSwitch.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var basicsStyle = function basicsStyle(theme) {
  var _card, _treatmentsContainer, _treatment;

  return _objectSpread({
    sections: {
      padding: "70px 0",
      "&:first-of-type": {
        padding: "30px 0"
      }
    },
    container: _materialKitReact.container,
    title: _objectSpread(_objectSpread({}, _materialKitReact.title), {}, {
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
      textAlign: "center"
    }),
    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
      gridGap: "5%"
    },
    card: (_card = {
      background: "rgb(7, 218, 165)",
      "&:hover": {
        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)"
      },
      padding: "1em",
      borderRadius: "10px",
      width: "100%",
      display: "inline-block",
      clipPath: "circle(100% at 50% 20%)"
    }, (0, _defineProperty2.default)(_card, theme.breakpoints.down("sm"), {
      clipPath: "circle(110% at 50% 20%)"
    }), (0, _defineProperty2.default)(_card, "transition", "all .5s ease-in-out"), (0, _defineProperty2.default)(_card, "cursor", "pointer"), (0, _defineProperty2.default)(_card, "color", "#fff"), (0, _defineProperty2.default)(_card, "& span", {
      float: "right",
      fontWeight: "bold",
      transition: "color .5s",
      position: "relative",
      marginRight: "4%"
    }), (0, _defineProperty2.default)(_card, "& h1", {
      margin: 0,
      fontSize: "40px",
      textAlign: "center"
    }), (0, _defineProperty2.default)(_card, "& p", {
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "40px"
    }), _card),
    treatmentsContainer: (_treatmentsContainer = {
      display: "flex",
      marginLeft: "5%",
      flexWrap: "wrap"
    }, (0, _defineProperty2.default)(_treatmentsContainer, theme.breakpoints.down("sm"), {
      display: "inline"
    }), (0, _defineProperty2.default)(_treatmentsContainer, theme.breakpoints.between('600', '800'), {
      display: "flex"
    }), _treatmentsContainer),
    treatment: (_treatment = {
      width: "30%",
      margin: "auto"
    }, (0, _defineProperty2.default)(_treatment, theme.breakpoints.down("sm"), {
      width: "100%"
    }), (0, _defineProperty2.default)(_treatment, theme.breakpoints.between('600', '800'), {
      width: "50%"
    }), _treatment),
    space50: {
      height: "50px",
      display: "block"
    },
    space70: {
      height: "70px",
      display: "block"
    },
    icons: {
      width: "17px",
      height: "17px",
      color: "#FFFFFF"
    }
  }, _customCheckboxRadioSwitch.default);
};

var _default = basicsStyle;
exports.default = _default;