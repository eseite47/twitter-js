const express = require('express');
const volley = require('volleyball');
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank');
const routes = require('./routes');
const bodyParser = require('body-parser');
const socket = require('socket.io');

const app = express();
let server = app.listen('3000', function(){
  console.log('server is running');
})
let io = socket.listen(server);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(volley);
app.use('/', routes(io));
app.use(express.static('public'))
