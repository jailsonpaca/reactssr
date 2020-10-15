"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomTabs;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Card = _interopRequireDefault(require("./Card/Card.js"));

var _CardBody = _interopRequireDefault(require("./Card/CardBody.js"));

var _CardHeader = _interopRequireDefault(require("./Card/CardHeader.js"));

var _customTabsStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/customTabsStyle.js"));

// nodejs library that concatenates classes
// nodejs library to set properties for components
// material-ui components
// core components
var useStyles = (0, _styles.makeStyles)(_customTabsStyle.default);

function CustomTabs(props) {
  var _classNames;

  var _React$useState = _react.default.useState(0),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, value) {
    setValue(value);
  };

  var classes = useStyles();
  var headerColor = props.headerColor,
      plainTabs = props.plainTabs,
      tabs = props.tabs,
      title = props.title,
      rtlActive = props.rtlActive;
  var cardTitle = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.cardTitle, true), (0, _defineProperty2.default)(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    plain: plainTabs
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    color: headerColor,
    plain: plainTabs
  }, title !== undefined ? /*#__PURE__*/_react.default.createElement("div", {
    className: cardTitle
  }, title) : null, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    value: value,
    onChange: handleChange,
    classes: {
      root: classes.tabsRoot,
      indicator: classes.displayNone
    }
  }, tabs.map(function (prop, key) {
    var icon = {};

    if (prop.tabIcon) {
      icon = {
        icon: typeof prop.tabIcon === "string" ? /*#__PURE__*/_react.default.createElement(_Icon.default, null, prop.tabIcon) : /*#__PURE__*/_react.default.createElement(prop.tabIcon, null)
      };
    }

    return /*#__PURE__*/_react.default.createElement(_Tab.default, (0, _extends2.default)({
      classes: {
        root: classes.tabRootButton,
        label: classes.tabLabel,
        selected: classes.tabSelected,
        wrapper: classes.tabWrapper
      },
      key: key,
      label: prop.tabName
    }, icon));
  }))), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, tabs.map(function (prop, key) {
    if (key === value) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: key
      }, prop.tabContent);
    }

    return null;
  })));
}

CustomTabs.propTypes = {
  headerColor: _propTypes.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: _propTypes.default.string,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    tabName: _propTypes.default.string.isRequired,
    tabIcon: _propTypes.default.object,
    tabContent: _propTypes.default.node.isRequired
  })),
  rtlActive: _propTypes.default.bool,
  plainTabs: _propTypes.default.bool
};