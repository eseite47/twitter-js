const express = require('express');
const tweetBank = require('../tweetBank');


const router = express.Router();
// could use one line instead: const router = require('express').Router();

module.exports = function(io){
  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get( '/users/:name', function(req, res){
    var user = req.params.name;
    //let tweets = tweetBank.list();
    //let tweet = tweets.find(function(usr){ usr.name === user })
    let tweet = tweetBank.find({'name': user});
    //console.log(tweet)
    //console.log(req.params.name);
    res.render( 'index', { tweets: tweet, showForm:true, name: user } );
  } );

  router.get( '/user/:id', function(req, res){
    var id = parseInt(req.params.id);
    //let tweets = tweetBank.list();
    //let tweet = tweets.find(function(usr){ usr.name === user })
    let tweet = tweetBank.find({'id': id});
    //console.log(tweet)
    //console.log(req.params.name);
    res.render( 'index', { tweets: tweet } );
  } );

  router.post('/tweets', function(req, res) {
    console.log(req.body);
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  return router;
}
