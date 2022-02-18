const express = require("express")
const app = express()
const body = require("body-parser")
const {randomBytes} = require("crypto")

const cors = require('cors')
app.use(cors())

app.use(body.urlencoded({extended:true}))
app.use(body.json())

const commentsByPostId = {};

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments',(req,res) =>{
    console.log("in create comment");
    const id = randomBytes(4).toString('hex')
    const {comment} = req.body
 
    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id:id,comment:comment})
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments)
})


app.listen(5001,(req,res)=>{
    console.log("Server Comments Log on port 5001");
})