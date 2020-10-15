"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _buttonStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/buttonStyle.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var makeComponentStyles = (0, _makeStyles.default)(function () {
  return _objectSpread({}, _buttonStyle.default);
});

var RegularButton = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;

  var color = props.color,
      round = props.round,
      children = props.children,
      fullWidth = props.fullWidth,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      className = props.className,
      rest = (0, _objectWithoutProperties2.default)(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className"]);
  var classes = makeComponentStyles();
  var btnClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.button, true), (0, _defineProperty2.default)(_classNames, classes[size], size), (0, _defineProperty2.default)(_classNames, classes[color], color), (0, _defineProperty2.default)(_classNames, classes.round, round), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.simple, simple), (0, _defineProperty2.default)(_classNames, classes.block, block), (0, _defineProperty2.default)(_classNames, classes.link, link), (0, _defineProperty2.default)(_classNames, classes.justIcon, justIcon), (0, _defineProperty2.default)(_classNames, className, className), _classNames));
  return /*#__PURE__*/_react.default.createElement(_Button.default, (0, _extends2.default)({}, rest, {
    ref: ref,
    className: btnClasses
  }), children);
});

RegularButton.propTypes = {
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "instagram", "twitter", "youtube", "github", "transparent"]),
  size: _propTypes.default.oneOf(["sm", "lg"]),
  simple: _propTypes.default.bool,
  round: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  block: _propTypes.default.bool,
  link: _propTypes.default.bool,
  justIcon: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = RegularButton;
exports.default = _default;