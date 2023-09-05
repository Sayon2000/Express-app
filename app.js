const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const rootDir = require('./util/path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const homeRoutes = require('./routes/home')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , 'public')))


app.use('/admin',adminRoutes)

app.use('/shop',shopRoutes)
app.use('/' , homeRoutes)

app.use((req,res)=>{
    const fileName =  path.join(rootDir, 'web_pages' ,'notFound.html')

    return res.status(404).sendFile(fileName,  function (err) {
        if (err) {
            next(err);
        } 

})
})

app.listen(4000)