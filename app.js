const express = require('express')


const app = express();

app.use((req,res,next)=>{
    console.log("in middleware")
    next()
})

app.use((req,res,next)=>{
    console.log("in another middleware")
    res.send('<h1>Hello to node js</h1>')
    // res.send({key : "value"})
})



app.listen(3000)