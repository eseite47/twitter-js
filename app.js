const express = require('express');
const volley = require('volleyball')
const app = express();

// app.use(function(req, res, next){
//   console.log("Request: "+ req.method +" "+ req.url +"\n" + res.statusCode);
//   next();
// })
app.use(volley);

app.get("/", function(req, res){
  res.send("Ellie and Boyan are trying this out.");
})

app.listen('3000', function(){
  console.log('server is running');
})
