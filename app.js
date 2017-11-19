var express = require('express')
var app = express()

app.get("/about", function(req, resp){
  const welcomeText= "WELCOME TO MY PAGE"
  resp.render('about')

})

module.exports = app
