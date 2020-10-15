"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavPills;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSwipeableViews = _interopRequireDefault(require("react-swipeable-views"));

var _styles = require("@material-ui/core/styles");

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _GridContainer = _interopRequireDefault(require("./Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("./Grid/GridItem.js"));

var _navPillsStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/navPillsStyle.js"));

// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_navPillsStyle.default);

function NavPills(props) {
  var _classNames;

  var _React$useState = _react.default.useState(props.active),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var handleChange = function handleChange(event, active) {
    setActive(active);
  };

  var handleChangeIndex = function handleChangeIndex(index) {
    setActive(index);
  };

  var classes = useStyles();
  var tabs = props.tabs,
      direction = props.direction,
      color = props.color,
      horizontal = props.horizontal,
      alignCenter = props.alignCenter;
  var flexContainerClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.flexContainer, true), (0, _defineProperty2.default)(_classNames, classes.horizontalDisplay, horizontal !== undefined), _classNames));

  var tabButtons = /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    classes: {
      root: classes.root,
      fixed: classes.fixed,
      flexContainer: flexContainerClasses,
      indicator: classes.displayNone
    },
    value: active,
    onChange: handleChange,
    centered: alignCenter
  }, tabs.map(function (prop, key) {
    var _classNames2;

    var icon = {};

    if (prop.tabIcon !== undefined) {
      icon["icon"] = /*#__PURE__*/_react.default.createElement(prop.tabIcon, {
        className: classes.tabIcon
      });
    }

    var pillsClasses = (0, _classnames.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.pills, true), (0, _defineProperty2.default)(_classNames2, classes.horizontalPills, horizontal !== undefined), (0, _defineProperty2.default)(_classNames2, classes.pillsWithIcons, prop.tabIcon !== undefined), _classNames2));
    return /*#__PURE__*/_react.default.createElement(_Tab.default, (0, _extends2.default)({
      label: prop.tabButton,
      key: key
    }, icon, {
      classes: {
        root: pillsClasses,
        selected: classes[color],
        wrapper: classes.tabWrapper
      }
    }));
  }));

  var tabContent = /*#__PURE__*/_react.default.createElement("div", {
    className: classes.contentWrapper
  }, /*#__PURE__*/_react.default.createElement(_reactSwipeableViews.default, {
    axis: direction === "rtl" ? "x-reverse" : "x",
    index: active,
    onChangeIndex: handleChangeIndex
  }, tabs.map(function (prop, key) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.tabContent,
      key: key
    }, prop.tabContent);
  })));

  return horizontal !== undefined ? /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, horizontal.tabsGrid, tabButtons), /*#__PURE__*/_react.default.createElement(_GridItem.default, horizontal.contentGrid, tabContent)) : /*#__PURE__*/_react.default.createElement("div", null, tabButtons, tabContent);
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};
NavPills.propTypes = {
  // index of the default active pill
  active: _propTypes.default.number,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    tabButton: _propTypes.default.string,
    tabIcon: _propTypes.default.object,
    tabContent: _propTypes.default.node
  })).isRequired,
  color: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose"]),
  direction: _propTypes.default.string,
  horizontal: _propTypes.default.shape({
    tabsGrid: _propTypes.default.object,
    contentGrid: _propTypes.default.object
  }),
  alignCenter: _propTypes.default.bool
};