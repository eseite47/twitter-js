const express = require('express');
const volley = require('volleyball');
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank');
const routes = require('./routes');

const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.use(volley);
app.use('/', routes);
app.use(express.static('public'))

app.listen('3000', function(){
  console.log('server is running');
})
