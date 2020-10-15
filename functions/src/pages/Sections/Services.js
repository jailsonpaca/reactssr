"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Services;

var _react = _interopRequireDefault(require("react"));

var _nouislider = _interopRequireDefault(require("nouislider"));

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _servicesStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/views/componentsSections/servicesStyle.js"));

// plugin that creates slider
// @material-ui/core components
var useStyles = (0, _styles.makeStyles)(_servicesStyle.default);
var treatments = ["Agressividade", "Ansiedade em geral", "Alcoolismo", "Baixa Autoestima", "Compulsão Alimentar", "Compulsão por Compras", "Depressão", "Desmotivação", "Dificuldade de Falar em Público", "Dificuldade de Concentração", "Estresse", "Imunologia", "Manias", "Medo de Dirigir", "Medo de Avião", "Medos em geral", "Obesidade", "Pânico", "Performance Profissional", "Somatização (problemas físicos gerados por fator psicológico)", "Traumas", "Tabagismo", "Timidez", "TOC", "Dentre outras muitas possibilidades."];

function Services() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.sections
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Servi\xE7os")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space70
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.cardContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.card,
    style: {
      background: "rgb(255, 0, 0)"
    }
  }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("h1", null, "Hipnose ", /*#__PURE__*/_react.default.createElement("strong", null, "N\xC3O"), " \xE9:"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "* Em hipnose voc\xEA confessa seus segredos", /*#__PURE__*/_react.default.createElement("br", null), "* O hipnoterapeuta pode manipular cliente", /*#__PURE__*/_react.default.createElement("br", null), "* O cliente n\xE3o esta consciente e dorme durante a hipnose", /*#__PURE__*/_react.default.createElement("br", null), "* Hipnose \xE9 m\xEDstico e espiritual", /*#__PURE__*/_react.default.createElement("br", null))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("h1", null, "Hipnose ", /*#__PURE__*/_react.default.createElement("strong", null, "\xC9"), ":"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "* O paciente s\xF3 compartilha o que deseja", /*#__PURE__*/_react.default.createElement("br", null), "* Cabe 100% ao paciente aceitar ou n\xE3o as sugest\xF5es", /*#__PURE__*/_react.default.createElement("br", null), "* O cliente est\xE1 em alerta e consciente durante todo processo", /*#__PURE__*/_react.default.createElement("br", null), "* A hipnose \xE9 um estado de alta concentra\xE7\xE3o e relaxamento, \xE9 um estado da mente", /*#__PURE__*/_react.default.createElement("br", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space70
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Possibilidades de Tratamentos:")), /*#__PURE__*/_react.default.createElement(_List.default, {
    className: classes.treatmentsContainer
  }, treatments.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      key: i,
      button: true,
      className: classes.treatment
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Check.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
      primary: e
    }));
  }))));
}