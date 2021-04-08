// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var http = require("http")

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//var myHeaders = new Headers();
app.get('/api/whoami', function(req, res){
  var headers=req.headers;
  var software= headers["user-agent"];
  var language= headers["accept-language"];
  var ip=headers["x-forwarded-for"];
  ip= ip.slice(0, ip.indexOf(","));
  
  
 res.json({ipaddress: ip, language: language, software: software});
  //res.json(headers);
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
