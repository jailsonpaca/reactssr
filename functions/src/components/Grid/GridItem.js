"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GridItem;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

// nodejs library to set properties for components
// @material-ui/core components
var styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};
var useStyles = (0, _styles.makeStyles)(styles);

function GridItem(props) {
  var classes = useStyles();
  var children = props.children,
      className = props.className,
      rest = (0, _objectWithoutProperties2.default)(props, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement(_Grid.default, (0, _extends2.default)({
    item: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}

GridItem.defaultProps = {
  className: ""
};
GridItem.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};