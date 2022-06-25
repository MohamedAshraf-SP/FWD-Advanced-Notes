import express from 'express'
import {getMetaData, checkIfExists} from '../functionsOFsharp'




export const  resize = async(req: express.Request, res: express.Response, next) => {
  const height: number = parseInt(req.query.height as string);
  const width: number = parseInt(req.query.width as string);
  const path:string = req.query.path as string



  //  console.log('W&H TYPES:', typeof height, typeof width);
 // console.log('BeforeEditing W:', height, 'H:', width);

  

    const metadata=getMetaData(req,res,path)
    console.log('\n\n metadata:',metadata,'\n\n')
    
    checkIfExists(req,res,height,width,metadata,path)

  

  
//req.query.height  = 21 as unknown as string;
//console.log('AfterEditing W:', req.query.height , 'H:', width);
// console.log('\nMdlware finished...\n');


  next();
};
