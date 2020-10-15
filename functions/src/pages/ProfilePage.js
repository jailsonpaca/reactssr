"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfilePage;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Camera = _interopRequireDefault(require("@material-ui/icons/Camera"));

var _Palette = _interopRequireDefault(require("@material-ui/icons/Palette"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _Header = _interopRequireDefault(require("../components/Header/Header.js"));

var _Footer = _interopRequireDefault(require("../components/Footer.js"));

var _Button = _interopRequireDefault(require("../components/Button.js"));

var _GridContainer = _interopRequireDefault(require("../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../components/Grid/GridItem.js"));

var _HeaderLinks = _interopRequireDefault(require("../components/Header/HeaderLinks.js"));

var _NavPills = _interopRequireDefault(require("../components/NavPills.js"));

var _Parallax = _interopRequireDefault(require("../components/Parallax.js"));

var _christian = _interopRequireDefault("./static/media/christian.jpg");

var _studio = _interopRequireDefault("./static/media/studio-1.jpg");

var _studio2 = _interopRequireDefault("./static/media/studio-2.jpg");

var _studio3 = _interopRequireDefault("./static/media/studio-3.jpg");

var _studio4 = _interopRequireDefault("./static/media/studio-4.jpg");

var _studio5 = _interopRequireDefault("./static/media/studio-5.jpg");

var _oluEletu = _interopRequireDefault("./static/media/olu-eletu.jpg");

var _clemOnojeghuo = _interopRequireDefault("./static/media/clem-onojeghuo.jpg");

var _cynthiaDelRio = _interopRequireDefault("./static/media/cynthia-del-rio.jpg");

var _mariyaGeorgieva = _interopRequireDefault("./static/media/mariya-georgieva.jpg");

var _clemOnojegaw = _interopRequireDefault("./static/media/clem-onojegaw.jpg");

var _profilePage = _interopRequireDefault(require("../assets/jss/material-kit-react/views/profilePage.js"));

// nodejs library that concatenates classes
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_profilePage.default);

function ProfilePage(props) {
  var classes = useStyles();
  var rest = (0, _extends2.default)({}, props);
  var imageClasses = (0, _classnames.default)(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  var navImageClasses = (0, _classnames.default)(classes.imgRounded, classes.imgGallery);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, (0, _extends2.default)({
    color: "transparent",
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/_react.default.createElement(_HeaderLinks.default, null),
    fixed: true,
    changeColorOnScroll: {
      height: 200,
      color: "white"
    }
  }, rest)), /*#__PURE__*/_react.default.createElement(_Parallax.default, {
    small: true,
    filter: true,
    image: "./static/media/profile-bg.jpg"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.main, classes.mainRaised)
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.profile
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _christian.default,
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.name
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.title
  }, "Christian Louboutin"), /*#__PURE__*/_react.default.createElement("h6", null, "DESIGNER"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-twitter"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-instagram"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-facebook"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.description
  }, /*#__PURE__*/_react.default.createElement("p", null, "An artist of considerable range, Chet Faker \u2014 the name taken by Melbourne-raised, Brooklyn-based Nick Murphy \u2014 writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.", " ")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8,
    className: classes.navWrapper
  }, /*#__PURE__*/_react.default.createElement(_NavPills.default, {
    alignCenter: true,
    color: "primary",
    tabs: [{
      tabButton: "Studio",
      tabIcon: _Camera.default,
      tabContent: /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _studio.default,
        className: navImageClasses
      }), /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _studio2.default,
        className: navImageClasses
      })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _studio5.default,
        className: navImageClasses
      }), /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _studio4.default,
        className: navImageClasses
      })))
    }, {
      tabButton: "Work",
      tabIcon: _Palette.default,
      tabContent: /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _oluEletu.default,
        className: navImageClasses
      }), /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _clemOnojeghuo.default,
        className: navImageClasses
      }), /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _cynthiaDelRio.default,
        className: navImageClasses
      })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _mariyaGeorgieva.default,
        className: navImageClasses
      }), /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _clemOnojegaw.default,
        className: navImageClasses
      })))
    }, {
      tabButton: "Favorite",
      tabIcon: _Favorite.default,
      tabContent: /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _mariyaGeorgieva.default,
        className: navImageClasses
      }), /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _studio3.default,
        className: navImageClasses
      })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _clemOnojeghuo.default,
        className: navImageClasses
      }), /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _oluEletu.default,
        className: navImageClasses
      }), /*#__PURE__*/_react.default.createElement("img", {
        alt: "...",
        src: _studio.default,
        className: navImageClasses
      })))
    }]
  })))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}