const express = require('express');
const tweetBank = require('../tweetBank');


const router = express.Router();
// could use one line instead: const router = require('express').Router();


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;
