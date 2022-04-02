"use strict";

const express = require('express');
const app = express();

//https://node1.tomkrok1.repl.co/posts1
app.get('/posts1', function (req, res) {
  res.type("text").send("Hello World");
  //res.type('html').send('<h1>Hello World</h1>');
  //res.type("application/json").json({user: 'user1'});
  //res.status(404).json('error404'); 
});

//https://node1.tomkrok1.repl.co/posts2
app.get('/posts2', function (req, res) {
  //res.set("Content-Type", "application/json");
  res.json({ "msg" : "Hello world!" });  
});


//Route path: /posts3
//Request URL: https://node1.tomkrok1.repl.co/posts3?state=wa&city=Seattle
//req.query: { "state": "wa", "city": "Seattle" }
app.get("/posts3", function (req, res) {
  let state = req.query.state; // wa
  let city = req.query.city; // Seattle
  // do something with variables in the response
  res.type("text");
  res.send("You sent a request for " + city + ", " + state);
});

app.listen(8080);