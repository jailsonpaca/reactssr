"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Components;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Header = _interopRequireDefault(require("../components/Header/Header.js"));

var _logo = _interopRequireDefault("./static/media/logo.png");

var _HeaderLinks = _interopRequireDefault(require("../components/Header/HeaderLinks.js"));

var _Story = _interopRequireDefault(require("../components/Story"));

var _Footer = _interopRequireDefault(require("../components/Footer.js"));

var _GridContainer = _interopRequireDefault(require("../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("../components/Button.js"));

var _Parallax = _interopRequireDefault(require("../components/Parallax.js"));

var _WhatsApp = _interopRequireDefault(require("@material-ui/icons/WhatsApp"));

var _fabianoCircle = _interopRequireDefault("./static/media/fabianoCircle.png");

var _Services = _interopRequireDefault(require("./Sections/Services.js"));

var _Courses = _interopRequireDefault(require("./Sections/Courses.js"));

var _Online = _interopRequireDefault(require("./Sections/Online.js"));

var _Depoiments = _interopRequireDefault(require("./Sections/Depoiments.js"));

var _components = _interopRequireDefault(require("../assets/jss/material-kit-react/views/components.js"));

// nodejs library that concatenates classes
// react components for routing our app without refresh   
// sections for this page
var defaultplans = [{
  title: "Sessão Inicial / Sessão Avulsa",
  description: "Sessão Inicial ou Avulsa de 80 minutos por chamada de vídeo via WhatsApp.",
  price: "300",
  totalPrice: "300,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.', 'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.', 'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'],
  color: "#dadada"
}, {
  title: "Pacote de 02 Sessões",
  description: "Pacote de 02 sessões de 80 minutos que podem ser usadas de acordo com a necessidade.",
  price: "260",
  totalPrice: "520,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.', 'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.', 'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'],
  color: "rgba(224, 194, 0, 1)"
}, {
  title: "Pacote de 03 Sessões",
  description: "Pacote de 03 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.",
  price: "250",
  totalPrice: "750,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.', 'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.', 'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'],
  color: "rgba(7, 181, 244, 1)"
}, {
  title: "Pacote de 4 Sessões",
  description: "Pacote de 03 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.",
  price: "240",
  totalPrice: "960,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.', 'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.', 'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'],
  color: "#07DAA5"
}];
var useStyles = (0, _styles.makeStyles)(_components.default);

function Components(props) {
  var plans;

  if ((0, _typeof2.default)(props.data.plans) != undefined) {
    plans = props.data.plans;
  } else {
    plans = defaultplans;
  } //const posts = props.data.posts;


  var classes = useStyles();
  var rest = (0, _extends2.default)({}, props);
  var isSmall = (0, _core.useMediaQuery)('(max-width:450px)');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.backStage
  }, /*#__PURE__*/_react.default.createElement(_Header.default, (0, _extends2.default)({
    brand: /*#__PURE__*/_react.default.createElement("img", {
      src: _logo.default,
      alt: "Fabiano Correa hipnose e psicanalistalogia",
      className: classes.headerLogo
    }),
    rightLinks: /*#__PURE__*/_react.default.createElement(_HeaderLinks.default, null),
    fixed: true,
    color: "white",
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest)), /*#__PURE__*/_react.default.createElement(_Parallax.default
  /*image={require("assets/img/storyImage.png")}*/
  , {
    isImage: false,
    className: classes.parallax
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _fabianoCircle.default,
    className: classes.fabianoCircle,
    alt: "hipnoterapeuta fabiano correa"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "waveEffect"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wave"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "wave"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, null, /*#__PURE__*/_react.default.createElement(_Story.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.brand
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: classes.title
  }, "Seja quem voc\xEA gostaria de ter por perto")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.main, classes.mainRaised)
  }, /*#__PURE__*/_react.default.createElement(_Services.default, null), /*#__PURE__*/_react.default.createElement(_Depoiments.default, null), /*#__PURE__*/_react.default.createElement(_Online.default, {
    plans: plans
  }), /*#__PURE__*/_react.default.createElement(_Courses.default, null)), isSmall && /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "success",
    justIcon: true,
    round: true,
    className: classes.whatsAppBtn
  }, /*#__PURE__*/_react.default.createElement(_WhatsApp.default, null)), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}