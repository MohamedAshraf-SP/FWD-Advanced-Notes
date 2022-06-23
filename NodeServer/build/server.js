"use strict";
// const express = require('express')
// const api = require('./routes/api')
// const router= express.Router()
// const app = express()
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router.use('/api', api)
// app.listen(4000, () => {
//     console.log("server running")
// })
/*

app.get('/', (req, res) => {
   res.send("<h1>THIS IS THE HOME PAGE<h1>")
       res.sendFile('C://Users//Mahmoud//Desktop//udacity-advanced//nodeserver//index.html')
       res.sendFile('C:Users//Mahmoud//Desktop//a.PNG')
       res.status(400).send('bad request')
       console.log(req.query.mo)
       console.log(req.ip)
       console.log(req.cookies)
       console.log(req.path)
       console.log(req.subdomains)
       
     
    
//params() - a method to get the param values from a request URL.


*/
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./src/routes/api"));
var router = express_1.default.Router();
var app = (0, express_1.default)();
var port = 3000;
app.use('/', api_1.default);
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
