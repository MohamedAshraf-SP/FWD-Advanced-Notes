"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../middlewares/api");
var express = require('express');
var router = express.Router();
// api.get('/', (req, res) => {
//      res.send("<h1>THIS IS THE HOME PAGE<h1>")
// })
router.get('/countries', api_1.crmdlwr, function (req, res) {
    res.send("hello from countries ");
});
router.get('/cities', function (req, res) {
    res.send("hello from cities");
});
router.get('/towns', api_1.TWmdlwr, function (req, res) {
    res.send("hello from towns ");
});
exports.default = router;
