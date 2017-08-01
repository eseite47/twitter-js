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

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
//var test = nunjucks.render('index.html', locals);
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen('3000', function(){
  console.log('server is running');
})
