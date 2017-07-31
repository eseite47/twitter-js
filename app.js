const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("Ellie and Boyan are trying this out.");
})

app.listen('3000', function(){
  console.log('server is running');
})
