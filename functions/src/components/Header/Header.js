"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _headerStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/headerStyle.js"));

// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_headerStyle.default);

function Header(props) {
  var _classNames;

  var classes = useStyles();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  _react.default.useEffect(function () {
    if (props.changeColorOnScroll) {
      if (typeof window != 'undefined') {
        window.addEventListener("scroll", headerColorChange);
      }
    }

    return function cleanup() {
      if (props.changeColorOnScroll && typeof window != 'undefined') {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var headerColorChange = function headerColorChange() {
    var color = props.color,
        changeColorOnScroll = props.changeColorOnScroll;

    if (typeof window != 'undefined') {
      var windowsScrollTop = window.pageYOffset;

      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
        document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);

        if ((0, _typeof2.default)(document.body.getElementsByClassName(classes.container)[0]) != undefined) {
          document.body.getElementsByClassName(classes.container)[0].classList.add(classes.containerOnScroll);
        }

        if ((0, _typeof2.default)(document.body.getElementsByClassName(classes.scrollDownBtn)[0]) != undefined) {
          document.body.getElementsByClassName(classes.scrollDownBtn)[0].style.display = "none";
        }
      } else {
        document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
        document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);

        if ((0, _typeof2.default)(document.body.getElementsByClassName(classes.container)[0]) != undefined) {
          document.body.getElementsByClassName(classes.container)[0].classList.remove(classes.containerOnScroll);
        }

        if ((0, _typeof2.default)(document.body.getElementsByClassName(classes.scrollDownBtn)[0]) != undefined) {
          document.body.getElementsByClassName(classes.scrollDownBtn)[0].style.display = "block";
        }
      }
    }
  };

  var handleScrollDown = function handleScrollDown() {
    if (typeof window != 'undefined') {
      window.scrollTo(0, 600);
    }
  };

  var color = props.color,
      rightLinks = props.rightLinks,
      leftLinks = props.leftLinks,
      brand = props.brand,
      fixed = props.fixed,
      absolute = props.absolute;
  var appBarClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.appBar, true), (0, _defineProperty2.default)(_classNames, classes[color], color), (0, _defineProperty2.default)(_classNames, classes.absolute, absolute), (0, _defineProperty2.default)(_classNames, classes.fixed, fixed), _classNames));

  var brandComponent = /*#__PURE__*/_react.default.createElement(_Button.default, {
    href: "https://fabianocorrea.com/",
    className: classes.headerLogo
  }, brand);

  return /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    className: appBarClasses
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: classes.container
  }, leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.flex
  }, leftLinks !== undefined ? /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    smDown: true,
    implementation: "css"
  }, leftLinks) : brandComponent), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    smDown: true,
    implementation: "css"
  }, rightLinks), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    mdUp: true
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle,
    className: classes.openDrawer
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, null)))), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    mdUp: true,
    implementation: "js"
  }, /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appResponsive
  }, leftLinks, rightLinks))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      handleScrollDown();
    },
    justicon: "true",
    round: "true",
    className: classes.scrollDownBtn
  }, /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)));
}

Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  rightLinks: _propTypes.default.node,
  leftLinks: _propTypes.default.node,
  brand: _propTypes.default.object,
  fixed: _propTypes.default.bool,
  absolute: _propTypes.default.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: _propTypes.default.shape({
    height: _propTypes.default.number.isRequired,
    color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};