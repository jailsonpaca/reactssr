"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/firestore");

//import "firebase/auth";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIRPDLxH1rNPmlx1v9sjE3fj_tgWr0wPg",
  authDomain: "fabianocorreasite.firebaseapp.com",
  databaseURL: "https://fabianocorreasite.firebaseio.com",
  projectId: "fabianocorreasite",
  storageBucket: "fabianocorreasite.appspot.com",
  messagingSenderId: "1071618794884",
  appId: "1:1071618794884:web:0613f01ff7dce6ffe769d1",
  measurementId: "G-R0356LDYXJ"
}); //export const auth = firebaseApp.auth();

var db = firebaseApp.firestore();
exports.db = db;