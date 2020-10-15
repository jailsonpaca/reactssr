"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Danger;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _typographyStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/typographyStyle.js"));

// nodejs library to set properties for components
// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_typographyStyle.default);

function Danger(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.dangerText
  }, children);
}

Danger.propTypes = {
  children: _propTypes.default.node
};