const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended : false}))

app.get('/add-product',(req,res,next)=>{
    console.log("in another middleware")
    const fileName ='form.html'
    const options = {
        root: path.join(__dirname)
    };
 
    return res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } 

})
})

app.post('/product' , (req,res)=>{

    console.log(req.body.title)
    console.log(req.body.size)
    return res.redirect('/')
})


app.use('/',(req,res,next)=>{
    console.log("in another middleware")
    res.send('<h1>Hello to node js</h1>')

})



app.listen(4000)