var express = require('express')
var fs = require("fs")
var app = express()

app.get('/books', function(req, res) {
    var str = fs.readFileSync(process.argv[3])
    var b = JSON.parse(str)
    res.send(b)
})

// with callback
/*

app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
*/

app.listen(process.argv[2])
