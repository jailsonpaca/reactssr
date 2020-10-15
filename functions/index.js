"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrappfabianocorrea = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./src/App"));

var _getData = _interopRequireDefault(require("./src/components/getData"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var indexAdmin = _fs.default.readFileSync(__dirname + '/admin/index.html', 'utf8');

var index = _fs.default.readFileSync(__dirname + '/index.html', 'utf8');

var app = (0, _express.default)();
app.get('/admin', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000');
  res.send(indexAdmin);
});
app.get('**', function (req, res) {
  var context = {};
  console.log("TESTE 1");
  (0, _getData.default)().then(function (data) {
    var html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
      location: req.url,
      context: context
    }, /*#__PURE__*/_react.default.createElement(_App.default, {
      props: data
    })));
    console.log("TESTE 1");
    var finalHtml = index.replace('<!-- ::APP:: -->', html);
    res.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000');
    res.send(finalHtml);
  });
});
var ssrappfabianocorrea = functions.https.onRequest(app);
exports.ssrappfabianocorrea = ssrappfabianocorrea;