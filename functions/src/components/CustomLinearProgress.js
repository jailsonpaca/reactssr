"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomLinearProgress;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _customLinearProgressStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/customLinearProgressStyle.js"));

// nodejs library to set properties for components
// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_customLinearProgressStyle.default);

function CustomLinearProgress(props) {
  var classes = useStyles();
  var color = props.color,
      rest = (0, _objectWithoutProperties2.default)(props, ["color"]);
  return /*#__PURE__*/_react.default.createElement(_LinearProgress.default, (0, _extends2.default)({}, rest, {
    classes: {
      root: classes.root + " " + classes[color + "Background"],
      bar: classes.bar + " " + classes[color]
    }
  }));
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};
CustomLinearProgress.propTypes = {
  color: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};