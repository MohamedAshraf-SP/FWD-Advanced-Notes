import express from 'express';
import { resize } from '../middlewares/imgMdlwr';

const route = express.Router();

route.get('/', resize, (req, res) => {
  const height: number = parseInt(req.query.height as string);
  const width: number = parseInt(req.query.width as string);

  //console.log('W&H TYPES:', typeof height, typeof width);
  //console.log('End point W&H:', height, width);
  console.log('\nEnd point finished...\n');

  const obj = {
    height: height,
    width: width,
    path: req.query.path,
    metadata:res.locals.metadata
  };

  res.status(200);
  res.json(Object.assign(obj));
});

export default route;
