const express = require("express")
const app = express()
const body = require("body-parser")
const {randomBytes} = require("crypto")


app.use(body.json())

const commentsByPostId = {};

app.get('/posts/:id/comments',(req,res)=>{

    console.log("get comment");
    console.log(commentsByPostId[req.params.id]);
    res.send(commentsByPostId[req.params.id] || [])

})

app.post('/posts/:id/comments',(req,res) =>{

    const id = randomBytes(4).toString('hex')
    const {content} = req.body

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id:id,content})
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments)
})


app.listen(5001,(req,res)=>{
    console.log("Server Comments Log on port 5001");
})