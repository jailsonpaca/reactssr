"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardBody;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _cardBodyStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/cardBodyStyle.js"));

// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_cardBodyStyle.default);

function CardBody(props) {
  var _classNames;

  var classes = useStyles();
  var className = props.className,
      children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["className", "children"]);
  var cardBodyClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.cardBody, true), (0, _defineProperty2.default)(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: cardBodyClasses
  }, rest), children);
}

CardBody.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};