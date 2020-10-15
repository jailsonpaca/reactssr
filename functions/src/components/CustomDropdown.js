"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomDropdown;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _Button = _interopRequireDefault(require("./Button.js"));

var _customDropdownStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/customDropdownStyle.js"));

// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_customDropdownStyle.default);

function CustomDropdown(props) {
  var _classNames, _classNames2, _classNames3;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  var handleClose = function handleClose(param) {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  var handleCloseAway = function handleCloseAway(event) {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  var classes = useStyles();
  var buttonText = props.buttonText,
      buttonIcon = props.buttonIcon,
      dropdownList = props.dropdownList,
      buttonProps = props.buttonProps,
      dropup = props.dropup,
      dropdownHeader = props.dropdownHeader,
      caret = props.caret,
      hoverColor = props.hoverColor,
      left = props.left,
      rtlActive = props.rtlActive,
      noLiPadding = props.noLiPadding;
  var caretClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.caret, true), (0, _defineProperty2.default)(_classNames, classes.caretActive, Boolean(anchorEl)), (0, _defineProperty2.default)(_classNames, classes.caretRTL, rtlActive), _classNames));
  var dropdownItem = (0, _classnames.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.dropdownItem, true), (0, _defineProperty2.default)(_classNames2, classes[hoverColor + "Hover"], true), (0, _defineProperty2.default)(_classNames2, classes.noLiPadding, noLiPadding), (0, _defineProperty2.default)(_classNames2, classes.dropdownItemRTL, rtlActive), _classNames2));
  var icon = null;

  switch ((0, _typeof2.default)(buttonIcon)) {
    case "object":
      icon = /*#__PURE__*/_react.default.createElement(props.buttonIcon, {
        className: classes.buttonIcon
      });
      break;

    case "string":
      icon = /*#__PURE__*/_react.default.createElement(_Icon.default, {
        className: classes.buttonIcon
      }, props.buttonIcon);
      break;

    default:
      icon = null;
      break;
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.default, (0, _extends2.default)({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick
  }), icon, buttonText !== undefined ? buttonText : null, caret ? /*#__PURE__*/_react.default.createElement("b", {
    className: caretClasses
  }) : null)), /*#__PURE__*/_react.default.createElement(_Popper.default, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
    className: (0, _classnames.default)((_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, classes.popperClose, !anchorEl), (0, _defineProperty2.default)(_classNames3, classes.popperResponsive, true), _classNames3))
  }, function () {
    return /*#__PURE__*/_react.default.createElement(_Grow.default, {
      in: Boolean(anchorEl),
      id: "menu-list",
      style: dropup ? {
        transformOrigin: "0 100% 0"
      } : {
        transformOrigin: "0 0 0"
      }
    }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
      className: classes.dropdown
    }, /*#__PURE__*/_react.default.createElement(_ClickAwayListener.default, {
      onClickAway: handleCloseAway
    }, /*#__PURE__*/_react.default.createElement(_MenuList.default, {
      role: "menu",
      className: classes.menuList
    }, dropdownHeader !== undefined ? /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      onClick: function onClick() {
        return handleClose(dropdownHeader);
      },
      className: classes.dropdownHeader
    }, dropdownHeader) : null, dropdownList.map(function (prop, key) {
      if (prop.divider) {
        return /*#__PURE__*/_react.default.createElement(_Divider.default, {
          key: key,
          onClick: function onClick() {
            return handleClose("divider");
          },
          className: classes.dropdownDividerItem
        });
      }

      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: key,
        onClick: function onClick() {
          return handleClose(prop);
        },
        className: dropdownItem
      }, prop);
    })))));
  }));
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
CustomDropdown.propTypes = {
  hoverColor: _propTypes.default.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: _propTypes.default.node,
  buttonIcon: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  dropdownList: _propTypes.default.array,
  buttonProps: _propTypes.default.object,
  dropup: _propTypes.default.bool,
  dropdownHeader: _propTypes.default.node,
  rtlActive: _propTypes.default.bool,
  caret: _propTypes.default.bool,
  left: _propTypes.default.bool,
  noLiPadding: _propTypes.default.bool,
  // function that retuns the selected item
  onClick: _propTypes.default.func
};