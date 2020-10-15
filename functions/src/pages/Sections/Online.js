"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Online;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Dashboard = _interopRequireDefault(require("@material-ui/icons/Dashboard"));

var _Button = _interopRequireDefault(require("../../components/Button.js"));

var _TouchApp = _interopRequireDefault(require("@material-ui/icons/TouchApp"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _GridContainer = _interopRequireDefault(require("../../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../../components/Grid/GridItem.js"));

var _mapa = _interopRequireDefault("./static/media/mapa.png");

var _onlineStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/views/componentsSections/onlineStyle.js"));

// @material-ui/core components
// @material-ui/icons
// core components
var numPlans = ['UMA', 'DUAS', 'TRÊS', 'QUATRO'];
var useStyles = (0, _styles.makeStyles)(_onlineStyle.default);
/*const plans = [{
  title: "Sessão Inicial / Sessão Avulsa", description: "Sessão Inicial ou Avulsa de 80 minutos por chamada de vídeo via WhatsApp.", price: "300", totalPrice: "300,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "#dadada"
},
{
  title: "Pacote de 02 Sessões", description: "Pacote de 02 sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "260", totalPrice: "520,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "rgba(224, 194, 0, 1)"
},
{
  title: "Pacote de 03 Sessões", description: "Pacote de 03 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "250", totalPrice: "750,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "rgba(7, 181, 244, 1)"
},
{
  title: "Pacote de 4 Sessões", description: "Pacote de 04 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "240", totalPrice: "960,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "#07DAA5"
}];*/

function Online(_ref) {
  var plans = _ref.plans;
  //const plans=plans;
  console.log(plans);
  var classes = useStyles();
  var isSmall = (0, _core.useMediaQuery)('(max-width:450px)');
  var theme = (0, _styles.useTheme)();
  var isTablet = (0, _core.useMediaQuery)(theme.breakpoints.between('600', '800'));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section,
    id: "onlineID"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "navigation-pills"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Consulta Presencial e ", /*#__PURE__*/_react.default.createElement("strong", null, "Online"))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space70
  }), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center",
    style: {
      margin: "auto"
    }
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.textCenter
  }, "Meu consult\xF3rio f\xEDsico fica localizado na Rua Hort\xEAncia Dutra 397, Centro - Balne\xE1rio Arroio do Silva. clique no mapa ", isSmall ? 'abaixo' : 'ao lado', "  para ver a localiza\xE7\xE3o exata e venha fazer uma visita. Se voc\xEA preferir(em situa\xE7\xF5es como a pandemia do COVID-19, por exemplo), possuo a metodologia de consulta online, voce pode resolver seus problemas e dificuldades direto da sua casa!")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://goo.gl/maps/4aZ5c7fsXmRUsi6f9"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _mapa.default,
    className: classes.mapa,
    alt: "consult\xF3rio do fabiano correa"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space70
  }), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    className: classes.planContainer
  }, plans.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_GridItem.default, {
      key: i,
      xs: 12,
      sm: isTablet ? 6 : 3,
      className: classes.plan,
      style: {
        backgroundColor: "".concat(e.color)
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.card
    }, /*#__PURE__*/_react.default.createElement("h2", null, e.title), /*#__PURE__*/_react.default.createElement("p", null, e.description), /*#__PURE__*/_react.default.createElement(_Divider.default, null), e.price !== 'oculto' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h4", null, "Valor por sess\xE3o"), /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("strong", null, "R$", e.price)), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement("strong", null, parseFloat(e.price) !== parseFloat(e.totalPrice) ? "Total por pacote:" : "Total por sessão:", " R$", e.totalPrice)), /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: "success",
      className: classes.btnQuero,
      size: "lg",
      href: "https://api.whatsapp.com/send?phone=554899673317&text=Ol%C3%A1%20fabiano,%20quero%20fazer%20o%20Pacote%20de%20".concat(numPlans[i], "%20consulta%20de%20Hipnose")
    }, "Quero este pacote! ", /*#__PURE__*/_react.default.createElement(_TouchApp.default, {
      className: classes.icons
    }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      className: classes.btnQuero,
      size: "lg",
      href: "https://api.whatsapp.com/send?phone=554899673317&text=Ol%C3%A1%20fabiano,%20quero%20fazer%20o%20Pacote%20de%20".concat(numPlans[i], "%20consulta%20de%20Hipnose")
    }, "Quero este pacote! ", /*#__PURE__*/_react.default.createElement(_TouchApp.default, {
      className: classes.icons
    })), /*#__PURE__*/_react.default.createElement(_Divider.default, null)), /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.obsContainer
    }, e.obs.map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
        key: i,
        className: classes.obs
      }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Check.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
        primary: item
      }));
    }))));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space70
  }))));
}