import { crmdlwr,TWmdlwr} from '../middlewares/api'
import express  from 'express'

const router= express.Router()

 router.get('/countries',crmdlwr,(req,res)=>{
     res.send("hello from countries ")
 })
  
 router.get('/cities',(req,res)=>{
     res.send("hello from cities")
 })
 
 router.get('/towns',TWmdlwr,(req,res)=>{
     res.send("hello from towns ")
 })
 
  
 
 export default router
