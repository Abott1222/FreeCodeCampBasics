var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Yelp = require('node-yelp-api-v3');

var app = express();

'use strict';

const yelp = require('yelp-fusion');



// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var id = "...";
var sec = "...";



const searchRequest = {
  location: 'olympia, wa'
};
/*
yelp.accessToken(id, sec).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});
*/



app.get('/api', function(req,res,next){
  yelp.accessToken(id, sec).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
      res.json(response.jsonBody);
    });
  }).catch(e => {
    console.log(e);
  });
  //res.json({message:"This is a message from the api"});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  var error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500).send(error);

});

module.exports = app;
