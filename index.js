import express from 'express'
import dotenv  from 'dotenv'
import { config } from 'dotenv'

const  app = express()
// dotenv.config({path:'./.env'})
config({path:'./.env'})
const PORT = process.env.PORT
console.log(PORT)

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/alone3000',(req,res)=>{
    res.send('welcome sanjeev')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})