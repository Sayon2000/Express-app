const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended : false}))


app.use('/admin',adminRoutes)

app.use('/shop',shopRoutes)

app.use((req,res)=>{
    const fileName = 'notFound.html'
    const options = {
        root: path.join(__dirname , '/web_pages/')
    };
    return res.status(404).sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } 

})
})

app.listen(4000)