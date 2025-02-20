import express from 'express'
// import dotenv  from 'dotenv'
import { config } from 'dotenv'
import path from 'path'

const  app = express()

// dotenv.config({path:'./.env'})
config({path:'./.env'})
const PORT = process.env.PORT
console.log(path)


// __dirname setting
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


app.get('/',(req,res)=>{
    res.send('hello world')
})


app.get('/add',(req,res)=>{
    console.log(__dirname,path.join(__dirname,'./public/welcome'))
    res.sendFile(path.join(__dirname,'./public/home.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'../home.html'))
})

app.get('/alone3000',(req,res)=>{
    res.send('welcome sanjeev')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
