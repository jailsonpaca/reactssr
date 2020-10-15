"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SnackbarContent;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _snackbarContentStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/snackbarContentStyle.js"));

// nodejs library to set properties for components
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_snackbarContentStyle.default);

function SnackbarContent(props) {
  var message = props.message,
      color = props.color,
      close = props.close,
      icon = props.icon;
  var classes = useStyles();
  var action = [];

  var closeAlert = function closeAlert() {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [/*#__PURE__*/_react.default.createElement(_IconButton.default, {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert
    }, /*#__PURE__*/_react.default.createElement(_Close.default, {
      className: classes.close
    }))];
  }

  var snackIcon = null;

  switch ((0, _typeof2.default)(icon)) {
    case "object":
      snackIcon = /*#__PURE__*/_react.default.createElement(props.icon, {
        className: classes.icon
      });
      break;

    case "string":
      snackIcon = /*#__PURE__*/_react.default.createElement(_Icon.default, {
        className: classes.icon
      }, props.icon);
      break;

    default:
      snackIcon = null;
      break;
  }

  var _React$useState = _react.default.useState( /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("div", null, snackIcon, message, close !== undefined ? action : null),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    }
  })),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      alert = _React$useState2[0],
      setAlert = _React$useState2[1];

  return alert;
}

SnackbarContent.propTypes = {
  message: _propTypes.default.node.isRequired,
  color: _propTypes.default.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string])
};