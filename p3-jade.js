var express = require('express')
var app = express()

app.set('view engine', 'jade')
//app.set('views', path.join(__dirname, 'templates')) ---> normal app
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
   res.render('index', {date: new Date().toDateString()}) 
})
app.listen(process.argv[2])
