require('dotenv').config();

var express = require('express');
var app = express();
var path = require('path');
var publicPath = path.resolve(__dirname, "public");

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.use(express.static(publicPath));
app.set('view engine', 'hbs');

client.stream('statuses/filter', {track: 'election'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });


app.get('/', function(req,res){
  res.render('home', {});
});
app.post('/', function(req,res){
  search = req.body.search;

});


app.listen(3000);
