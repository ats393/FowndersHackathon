var express = require('express');
var app = express();
var path = require('path');
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.set('view engine', 'hbs');

app.get('/', function(req,res){
  res.render('home', {});
});


app.listen(3000);
