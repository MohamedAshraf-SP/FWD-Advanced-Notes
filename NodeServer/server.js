const express = require('express')


const app = express()


app.get('/', (req, res) => {
    // res.send("<h1>THIS IS THE HOME PAGE<h1>")
    //res.sendFile('C://Users//Mahmoud//Desktop//udacity-advanced//nodeserver//index.html')
    res.sendFile('C:Users//Mahmoud//Desktop//a.PNG')
    //res.status(400).send('bad request')
    
    //console.log(req.query.mo)
    console.log(req.ip)
    console.log(req.cookies)
    console.log(req.path)
    console.log(req.subdomains)
})
app.listen(4000, () => {
    console.log("server running")
})

//params() - a method to get the param values from a request URL.