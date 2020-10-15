"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomInput;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _customInputStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/customInputStyle.js"));

// nodejs library to set properties for components
// nodejs library that concatenates classes
// @material-ui/core components
var useStyles = (0, _styles.makeStyles)(_customInputStyle.default);

function CustomInput(props) {
  var _classNames, _classNames2, _classNames4;

  var classes = useStyles();
  var formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      white = props.white,
      inputRootCustomClasses = props.inputRootCustomClasses,
      success = props.success;
  var labelClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, " " + classes.labelRootError, error), (0, _defineProperty2.default)(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = (0, _classnames.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.underlineError, error), (0, _defineProperty2.default)(_classNames2, classes.underlineSuccess, success && !error), (0, _defineProperty2.default)(_classNames2, classes.underline, true), (0, _defineProperty2.default)(_classNames2, classes.whiteUnderline, white), _classNames2));
  var marginTop = (0, _classnames.default)((0, _defineProperty2.default)({}, inputRootCustomClasses, inputRootCustomClasses !== undefined));
  var inputClasses = (0, _classnames.default)((_classNames4 = {}, (0, _defineProperty2.default)(_classNames4, classes.input, true), (0, _defineProperty2.default)(_classNames4, classes.whiteInput, white), _classNames4));
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = (0, _classnames.default)(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return /*#__PURE__*/_react.default.createElement(_FormControl.default, (0, _extends2.default)({}, formControlProps, {
    className: formControlClasses
  }), labelText !== undefined ? /*#__PURE__*/_react.default.createElement(_InputLabel.default, (0, _extends2.default)({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps)));
}

CustomInput.propTypes = {
  labelText: _propTypes.default.node,
  labelProps: _propTypes.default.object,
  id: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  formControlProps: _propTypes.default.object,
  inputRootCustomClasses: _propTypes.default.string,
  error: _propTypes.default.bool,
  success: _propTypes.default.bool,
  white: _propTypes.default.bool
};