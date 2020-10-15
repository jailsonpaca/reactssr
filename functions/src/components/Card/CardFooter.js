"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardFooter;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _cardFooterStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/cardFooterStyle.js"));

// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_cardFooterStyle.default);

function CardFooter(props) {
  var _classNames;

  var classes = useStyles();
  var className = props.className,
      children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["className", "children"]);
  var cardFooterClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.cardFooter, true), (0, _defineProperty2.default)(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: cardFooterClasses
  }, rest), children);
}

CardFooter.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};