/*
 app .use(middleware)
 middleware:  list of functions 
            :array of functions


    
app.use(cors(), logger); // app level 
students.get('/', cors(), logger, (req, res) => { // do stuff }); // endpoint level


const myMiddleware = (err,req, res, next) => {
  // do stuff
  next();
*/