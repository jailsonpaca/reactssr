"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("./Grid/GridContainer.js"));

var _Button = _interopRequireDefault(require("./Button.js"));

var _icons = require("@material-ui/icons");

var _footerStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/footerStyle.js"));

/*eslint-disable*/
// nodejs library to set properties for components
// nodejs library that concatenates classes
// material-ui core components
var useStyles = (0, _styles.makeStyles)(_footerStyle.default);

function Footer(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var whiteFont = props.whiteFont;
  var footerClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.footer, true), (0, _defineProperty2.default)(_classNames, classes.footerWhiteFont, whiteFont), _classNames));
  var aClasses = (0, _classnames.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.a, true), (0, _defineProperty2.default)(_classNames2, classes.footerWhiteFont, whiteFont), _classNames2));
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: footerClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.textCenter + " " + classes.sharingArea
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Me acompanhe nas redes sociais:")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "youtube"
  }, /*#__PURE__*/_react.default.createElement(_icons.YouTube, {
    className: classes.socials
  }), "Assista"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "facebook"
  }, /*#__PURE__*/_react.default.createElement(_icons.Facebook, {
    className: classes.socials
  }), "Curta"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "instagram"
  }, /*#__PURE__*/_react.default.createElement(_icons.Instagram, {
    className: classes.socials
  }), "Siga")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.left
  }, "Site Desenvolvido Por", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://japps.com",
    className: aClasses,
    target: "_blank"
  }, "Japps -  M\xEDdia e Tecnologia.")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.right
  }, "Copyright \xA9 ", 1900 + new Date().getYear(), ", Todos os Direitos Reservados.")));
}

Footer.propTypes = {
  whiteFont: _propTypes.default.bool
};