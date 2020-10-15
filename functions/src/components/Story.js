"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Story;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Pause = _interopRequireDefault(require("@material-ui/icons/Pause"));

var _PlayArrow = _interopRequireDefault(require("@material-ui/icons/PlayArrow"));

var _TouchApp = _interopRequireDefault(require("@material-ui/icons/TouchApp"));

var _core = require("@material-ui/core");

//import 'assets/css/story.css';
//import 'assets/scss/story.scss';
var timer = 3000; // 3 segundos

var timerLoad = 10;
var maxLoad = 3000;
var maxIndex = 5;

function Story() {
  var colors = ["green", "blue", "yellow", "grey", "blue", "green"];

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      load = _useState6[0],
      setLoad = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      next = _useState8[0],
      setNext = _useState8[1];

  var card = [{
    title: "Hipnoterapia",
    description: "Ferramenta terapêutica rápida e eficiente para sua mente."
  }, {
    title: "Problemas Psicológicos",
    description: "Ajuda em seus problemas psicológicos sempre visando o bem estar Pessoal."
  }, {
    title: "Inteligência Emocional",
    description: "Muito importante nos dias atuais para melhor trabalhar, viver e conviver."
  }, {
    title: "Coaching",
    description: "Metodologia moderna para te ajudar a conquistar seus objetivos pessoais e profissionais"
  }, {
    title: "Marketing",
    description: "Te ajudando a vender mais e a promover seu negócio."
  }, {
    title: "Treinamentos",
    description: "Ensinando voce a falar em público, perder aqueles kilinhos e conquistar aquela habilidade desejada."
  }];

  function changeHover(change) {
    console.log("hover: " + change);
    setHover(change);
  }

  function handleClick() {
    console.log("clicou: " + index + " load: " + load); //setLoad(3000);
    //changeHover(false);

    setNext(true);

    if (index < maxIndex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMouseEnter() {
    if (!isSmall) {
      changeHover(true);
    }
  }

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      if (!hover) {
        if (next) {
          /*if (index < maxIndex) {
            setIndex(index+1);
          } else {
            setIndex(0);
          }*/
          setLoad(0);
          setNext(false);
        } else {
          if (load < maxLoad) {
            setLoad(load + 15);
          } else {
            setLoad(0);

            if (index < maxIndex) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          }
        }
      }
    }, timerLoad);
  });
  var isSmall = (0, _core.useMediaQuery)('(max-width:450px)');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story",
    onMouseLeave: function onMouseLeave() {
      changeHover(false);
    },
    onMouseEnter: function onMouseEnter() {
      handleMouseEnter();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pause"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      animationDuration: "".concat(timer, "ms"),
      animationPlayState: "".concat(hover ? 'paused' : '')
    },
    className: "progress ".concat(index == 0 ? 'active' : '')
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      animationDuration: "".concat(timer, "ms"),
      animationPlayState: "".concat(hover ? 'paused' : '')
    },
    className: "progress ".concat(index == 1 ? 'active' : '')
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      animationDuration: "".concat(timer, "ms"),
      animationPlayState: "".concat(hover ? 'paused' : '')
    },
    className: "progress ".concat(index == 2 ? 'active' : '')
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      animationDuration: "".concat(timer, "ms"),
      animationPlayState: "".concat(hover ? 'paused' : '')
    },
    className: "progress ".concat(index == 3 ? 'active' : '')
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      animationDuration: "".concat(timer, "ms"),
      animationPlayState: "".concat(hover ? 'paused' : '')
    },
    className: "progress ".concat(index == 4 ? 'active' : '')
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      animationDuration: "".concat(timer, "ms"),
      animationPlayState: "".concat(hover ? 'paused' : '')
    },
    className: "progress ".concat(index == 5 ? 'active' : '')
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "status"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "not-hovered"
  }, /*#__PURE__*/_react.default.createElement(_TouchApp.default, null), " ", /*#__PURE__*/_react.default.createElement(_Pause.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "hovered"
  }, /*#__PURE__*/_react.default.createElement(_TouchApp.default, null), " ", /*#__PURE__*/_react.default.createElement(_PlayArrow.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, !isSmall ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, card.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      className: "card ".concat(colors[i], " ").concat(index == i ? 'hover' : ''),
      onClick: function onClick() {
        return handleClick(i);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("h1", null, e.title), /*#__PURE__*/_react.default.createElement("p", null, e.description));
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "card ".concat(colors[index], " hover"),
    onClick: function onClick() {
      return handleClick();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("h1", null, card[index].title), /*#__PURE__*/_react.default.createElement("p", null, card[index].description)))));
}