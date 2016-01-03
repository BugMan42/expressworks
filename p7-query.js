var express = require("express")
var app = express()

app.get('/search', function(req, res) {
    var s = req.query;
    res.send(s)
})
app.listen(process.argv[2])
