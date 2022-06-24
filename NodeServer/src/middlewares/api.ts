import express from 'express'



export let crmdlwr=(req:express.Request,res:express.Response,next:Function):void=>{
    console.log("this is country middleware")
    next()
}
export let TWmdlwr=(req:express.Request,res:express.Response,next:Function)=>{
    console.log("this is town middleware")
    next()
}


