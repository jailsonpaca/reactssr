"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Parallax;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _parallaxStyle = _interopRequireDefault(require("../assets/jss/material-kit-react/components/parallaxStyle.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useStyles = (0, _styles.makeStyles)(_parallaxStyle.default);

function Parallax(props) {
  var _classNames;

  var windowScrollTop;

  if (typeof window != 'undefined') {
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 3;
    } else {
      windowScrollTop = 0;
    }
  }

  var _React$useState = _react.default.useState("translate3d(0," + windowScrollTop + "px,0)"),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      transform = _React$useState2[0],
      setTransform = _React$useState2[1];

  _react.default.useEffect(function () {
    if (typeof window != 'undefined' && window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (typeof window != 'undefined' && window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  var resetTransform = function resetTransform() {
    var windowScrollTop = typeof window != 'undefined' ? window.pageYOffset / 3 : 300;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  var filter = props.filter,
      className = props.className,
      children = props.children,
      style = props.style,
      image = props.image,
      small = props.small,
      isImage = props.isImage;
  var classes = useStyles();
  var parallaxClasses = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.parallax, true), (0, _defineProperty2.default)(_classNames, classes.filter, filter), (0, _defineProperty2.default)(_classNames, classes.small, small), (0, _defineProperty2.default)(_classNames, className, className !== undefined), _classNames));

  if (isImage) {
    var parallaxStyle = _objectSpread(_objectSpread({}, style), {}, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    });
  } else {
    var parallaxStyle = _objectSpread(_objectSpread({}, style), {}, {
      transform: transform
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: parallaxClasses,
    style: parallaxStyle
  }, children);
}

Parallax.propTypes = {
  className: _propTypes.default.string,
  filter: _propTypes.default.bool,
  children: _propTypes.default.node,
  style: _propTypes.default.string,
  isImage: _propTypes.default.bool,
  image: _propTypes.default.string,
  small: _propTypes.default.bool
};