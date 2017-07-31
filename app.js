const express = require('express');
const volley = require('volleyball');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.use(volley);

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

app.get("/", function(req, res){
  //res.send(test);
  res.render( 'index', {title: 'Hall of Fame', people: people} )
})

app.get("/locals", function(req, res){
  //res.send(test);
  //res.render( 'index', {title: 'Hall of Fame', people: people} )
  res.render('index', locals);
})

app.listen('3000', function(){
  console.log('server is running');
})
