var express = require('express')
var app = express()

app.get("/", function(req, resp){
  const welcomeText= "WELCOME TO MY PAGE"
  resp.render('welcomeText')

})

module.exports = app
