"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Courses;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("../../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../../components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("../../components/Button.js"));

var _treinamentos = _interopRequireDefault("./static/media/treinamentos.png");

var _fabiano = _interopRequireDefault("./static/media/fabiano.png");

var _core = require("@material-ui/core");

var _landing = _interopRequireDefault("./static/media/landing.jpg");

var _profile = _interopRequireDefault("./static/media/profile.jpg");

var _courseStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/views/componentsSections/courseStyle.js"));

// react components for routing our app without refresh
// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_courseStyle.default);

function Courses() {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var isTablet = (0, _core.useMediaQuery)(theme.breakpoints.between('600', '800'));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center",
    alignContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: isTablet ? 12 : 6,
    md: 8,
    className: classes.textCenter
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Cursos e Treinamentos"), /*#__PURE__*/_react.default.createElement("h4", null, "Em minha jornada como hipn\xF3logo e psicanalista adquiri experi\xEAncia em marketing e coaching, promovendo cursos na \xE1rea de hipnose voltada n\xE3o s\xF3 para a ar\xE9a de sa\xFAde mental mas tamb\xE9m em intelig\xEAncia emocional na hora da entrevista de emprego, na administra\xE7\xE3o de funcion\xE1rios, no emagrecimento e na gest\xE3o de finan\xE7as."), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space20
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: isTablet ? 12 : 6,
    md: 4
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: classes.fabiano,
    src: _fabiano.default,
    alt: "treinamentos - fabiano correa hipnocoach"
  })))));
}