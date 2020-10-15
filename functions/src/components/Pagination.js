"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _paginationStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/paginationStyle.js"));

// nodejs library to set properties for components
// nodejs library that concatenates classes
// @material-ui/core components
var useStyles = (0, _styles.makeStyles)(_paginationStyle.default);

function Pagination(props) {
  var classes = useStyles();
  var pages = props.pages,
      color = props.color;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: classes.pagination
  }, pages.map(function (prop, key) {
    var _classNames;

    var paginationLink = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.paginationLink, true), (0, _defineProperty2.default)(_classNames, classes[color], prop.active), (0, _defineProperty2.default)(_classNames, classes.disabled, prop.disabled), _classNames));
    return /*#__PURE__*/_react.default.createElement("li", {
      className: classes.paginationItem,
      key: key
    }, prop.onClick !== undefined ? /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: prop.onClick,
      className: paginationLink
    }, prop.text) : /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: function onClick() {
        return alert("you've clicked " + prop.text);
      },
      className: paginationLink
    }, prop.text));
  }));
}

Pagination.defaultProps = {
  color: "primary"
};
Pagination.propTypes = {
  pages: _propTypes.default.arrayOf(_propTypes.default.shape({
    active: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    text: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["PREV", "NEXT", "..."])]).isRequired,
    onClick: _propTypes.default.func
  })).isRequired,
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger"])
};