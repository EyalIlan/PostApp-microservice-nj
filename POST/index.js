const express = require("express")
const {randomBytes} = require('crypto')
const app = express()
const body = require('body-parser')

app.use(body.urlencoded({extended:true}))
app.use(body.json())

const posts = {};

app.get('/posts',(req,res) =>{

    res.send(posts)

})

app.post('/posts',(req,res) =>{

    const id = randomBytes(4).toString('hex')
    const {title} = req.body

    posts[id] = {
        id,title
    }
    res.status(201).send(posts[id])

})



app.listen(5000,(req,res) =>{
  
    console.log("Connected to server on port 5000");

})