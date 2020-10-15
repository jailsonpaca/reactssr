"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoArea;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _infoStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/infoStyle.js"));

// nodejs library to set properties for components
// nodejs library that concatenates classes
// @material-ui/core components
var useStyles = (0, _styles.makeStyles)(_infoStyle.default);

function InfoArea(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var title = props.title,
      description = props.description,
      iconColor = props.iconColor,
      vertical = props.vertical;
  var iconWrapper = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.iconWrapper, true), (0, _defineProperty2.default)(_classNames, classes[iconColor], true), (0, _defineProperty2.default)(_classNames, classes.iconWrapperVertical, vertical), _classNames));
  var iconClasses = (0, _classnames.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.icon, true), (0, _defineProperty2.default)(_classNames2, classes.iconVertical, vertical), _classNames2));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.infoArea
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: iconWrapper
  }, /*#__PURE__*/_react.default.createElement(props.icon, {
    className: iconClasses
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.descriptionWrapper
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.title
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: classes.description
  }, description)));
}

InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  icon: _propTypes.default.object.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  iconColor: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: _propTypes.default.bool
};