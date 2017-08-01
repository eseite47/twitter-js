const express = require('express');
const tweetBank = require('../tweetBank');


const router = express.Router();

module.exports = function(io){
  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get( '/users/:name', function(req, res){
    var user = req.params.name;
    let tweet = tweetBank.find({'name': user});
    res.render( 'index', { tweets: tweet, showForm:true, name: user } );
  } );

  router.get( '/user/:id', function(req, res){
    var id = parseInt(req.params.id);
    let tweet = tweetBank.find({'id': id});
    res.render( 'index', { tweets: tweet } );
  } );

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    var id = req.body.id;
    tweetBank.add(name, text);
    io.sockets.emit('tweet', {'name' : name, 'text': text, 'id': id});
    res.redirect('/');
  });

  return router;
}
