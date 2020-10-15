"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Depoiments;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("../../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../../components/Grid/GridItem.js"));

var _core = require("@material-ui/core");

var _avatar = _interopRequireDefault("./static/media/avatar.jpg");

var _Button = _interopRequireDefault(require("../../components/Button.js"));

var _Schedule = _interopRequireDefault(require("@material-ui/icons/Schedule"));

var _depoimentsStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/views/componentsSections/depoimentsStyle.js"));

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_depoimentsStyle.default);

function Depoiments() {
  var classes = useStyles();
  var isSmall = (0, _core.useMediaQuery)('(max-width:450px)');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space50
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "images"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Depoimentos")), /*#__PURE__*/_react.default.createElement("h2", {
    className: classes.subTitle
  }, "A palavra de quem j\xE1 fez:"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    style: {
      flexWrap: "".concat(isSmall ? 'wrap' : 'nowrap')
    }
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 3,
    md: 4,
    className: classes.itemGrid
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Maria joana de souza"), /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement("i", null, "Professora")), /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "\""), "Conhe asd asd  c  fdjknf kdf gdk f dkd fg k ksdfsdfsdf sdfsdfsdf sdfsdf oipoipipzxc iap pias i pzixcp z ais ca s zxc zxi pa ic ia si werwrzxc.", /*#__PURE__*/_react.default.createElement("strong", null, "\"")))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 3,
    md: 4,
    className: classes.itemGrid
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Jos\xE9 ant\xF4nio da silva"), /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement("i", null, "Funcion\xE1rio P\xFAblico")), /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "\""), "Conhe asd asd  c  fdjknf kdf gdk f dkd fg k ksdfsdfsdf sdfsdfsdf sdfsdf oipoipipzxc iap pias i pzixcp z ais ca s zxc zxi pa ic ia si zxertertc.", /*#__PURE__*/_react.default.createElement("strong", null, "\"")))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 3,
    md: 4,
    className: classes.itemGrid
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Mario ferreira dos santos"), /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement("i", null, "Vendedor")), /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "\""), "Conhe asd asd  c  fdjknf kdf gdk f dkd fg k ksdfsdfsdf sdfsdfsdf sdfsdf oipoipipzxc iap pias i pzixcp z ais ca s zxc zxi pa ic ia si zxcasdasd.", /*#__PURE__*/_react.default.createElement("strong", null, "\"")))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 3,
    md: 4,
    className: classes.itemGrid
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Mariana de souza"), /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement("i", null, "Enfermeira")), /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "\""), "Conhe asd asd  c  fdjknf kdf gdk f dkd fg k ksdfsdfsdf sdfsdfsdf sdfsdf oipoipipzxc iap pias i pzixcp z ais ca s zxc zxi pa ic ia si zxhhghghghc.", /*#__PURE__*/_react.default.createElement("strong", null, "\"")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space50
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "success",
    className: classes.btnAgendar,
    size: "lg"
  }, /*#__PURE__*/_react.default.createElement(_Schedule.default, {
    className: classes.icons
  }), " Agende J\xE1!")));
}