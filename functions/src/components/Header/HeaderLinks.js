"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderLinks;

var _react = _interopRequireDefault(require("react"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _CustomDropdown = _interopRequireDefault(require("../CustomDropdown.js"));

var _Button = _interopRequireDefault(require("../Button.js"));

var _headerLinksStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/headerLinksStyle.js"));

/*eslint-disable*/
// react components for routing our app without refresh
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_headerLinksStyle.default);

function HeaderLinks(props) {
  var classes = useStyles();
  var isSmall = (0, _core.useMediaQuery)('(max-width:450px)');
  return /*#__PURE__*/_react.default.createElement(_List.default, {
    className: classes.list
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      return document.getElementById('onlineID').scrollIntoView();
    } //href="https://fabianocorrea.com/meu-consultorio"
    ,
    color: "transparent",
    target: "_blank",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.PersonPinCircle, {
    className: classes.icons,
    fontSize: "large"
  }), " Meu Consult\xF3rio")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      return document.getElementById('onlineID').scrollIntoView();
    } //href="#onlineID"
    ,
    color: "transparent",
    target: "_blank",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.WhatsApp, {
    className: classes.icons,
    fontSize: "large"
  }), " Consulta por WhatsApp")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    href: "https://fabianocorrea.com/lives",
    color: "transparent",
    target: "_blank",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.LiveTv, {
    className: classes.icons,
    fontSize: "large"
  }), " LIVES")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    href: "https://fabianocorrea.com/blog",
    color: "transparent",
    target: "_blank",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.Mms, {
    className: classes.icons,
    fontSize: "large"
  }), " BLOG")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_CustomDropdown.default, {
    noLiPadding: true,
    buttonText: "O que fa\xE7o?",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _icons.Help,
    dropdownList: [/*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/hipnose",
      className: classes.dropdownLink
    }, "HIPNOSE"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/marketing",
      className: classes.dropdownLink
    }, "MARKETING"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/treinamentos",
      className: classes.dropdownLink
    }, "TREINAMENTOS"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/coaching",
      className: classes.dropdownLink
    }, "COACHING")]
  })), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "instagram-facebook",
    title: "Me acompanhe no Facebook",
    placement: typeof window != 'undefined' && window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "transparent",
    href: "https://www.facebook.com/fabiano.machadocorrea",
    target: "_blank",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.Facebook, {
    className: classes.icons
  }), isSmall && ' Facebook'))), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "instagram-tooltip",
    title: "Me siga no instagram",
    placement: typeof window != 'undefined' && window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "transparent",
    href: "https://www.instagram.com/fabianocorrea26/",
    target: "_blank",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.Instagram, {
    className: classes.icons
  }), isSmall && ' Instagram'))));
}