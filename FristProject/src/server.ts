//libs
import express from 'express';
import morgan from 'morgan';
import route from './routes/imgResize';

//declaring app
const app = express();
const port = 3000;

//middlewares
app.use(morgan('dev'));
//app.use(morgan("common"))
app.use('/api/image/', route);

// server listening
app.listen(port, () => {
  console.log('this is my server running on PORT: ', port);
});

//
//app.use (bodyParser)
//app.use(express.urlencoded({extended:false}));
export default app