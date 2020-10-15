"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _cardStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/cardStyle.js"));

// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_cardStyle.default);

function Card(props) {
  var _classNames;

  var classes = useStyles();
  var className = props.className,
      children = props.children,
      plain = props.plain,
      carousel = props.carousel,
      rest = (0, _objectWithoutProperties2.default)(props, ["className", "children", "plain", "carousel"]);
  var cardClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.card, true), (0, _defineProperty2.default)(_classNames, classes.cardPlain, plain), (0, _defineProperty2.default)(_classNames, classes.cardCarousel, carousel), (0, _defineProperty2.default)(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: cardClasses
  }, rest), children);
}

Card.propTypes = {
  className: _propTypes.default.string,
  plain: _propTypes.default.bool,
  carousel: _propTypes.default.bool,
  children: _propTypes.default.node
};