import express from 'express'
import sharp from 'sharp'
import fs from 'fs'

export const getMetaData=async(req: express.Request, res: express.Response,path:string)=>{
    try{
        const metadata = await sharp(`C:\\Users\\Mahmoud\\Desktop\\udacity-advanced\\FristProject\\assets\\thumb\\${path}`).metadata()
        //console.log(metadata)
        res.locals.metadata=metadata
       // res.send(metadata)
      } catch (error) {
        console.log(`\n\n\n An error occurred during getting meta data: ${error}\n\n\n`);
        }
        
}

export const resizeImg=async( req: express.Request, res: express.Response,height:number,width:number,path:string)=>{
    try {
        const imgSRC=`C:\\Users\\Mahmoud\\Desktop\\udacity-advanced\\FristProject\\assets\\full\\${path}`
        const imgDIST=`C:\\Users\\Mahmoud\\Desktop\\udacity-advanced\\FristProject\\assets\\thumb\\${path}    `

        

        await sharp(imgSRC)
          .resize({
            height: height,
            width: width
          })
          .toFile(imgDIST);
        
      } catch (error) {
        console.log(`\n\n\n${error}\n\n\n`);

        
      }
  
}


export const checkIfExists=(req,res,height,width,x,path)=>{
    const imgDIST=`C:\\Users\\Mahmoud\\Desktop\\udacity-advanced\\FristProject\\assets\\thumb\\${path}    `
    if (x.width== width && x.height== height && fs.existsSync(imgDIST)){
        fs.open(imgDIST,()=>{console.log("found")})
        console.log("true exist")
    }else{
        resizeImg(req,res,height,width,path)
        console.log("false exist")
    }
}