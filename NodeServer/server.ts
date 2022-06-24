// const express = require('express')
// const api = require('./routes/api')
// const router= express.Router()
// const app = express()

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
 
import express from 'express'
import api from './src/routes/api'
const router= express.Router()
const app = express();
const port = 3000;

app.use('/',api)

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});



  
