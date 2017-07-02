
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello world!");
console.log(process.env["MESSAGE"]);
/** 2) A first working Express Server */
process.env["MESSAGE"] = "Hello from env";

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use(function(req,res, next) {
	console.log(req.method+" " +  req.path +" " + req.ip);	
	next();
});


/** 3) Serve an HTML file */
//absolutePath = __dirname + relativePath/file.ext
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

/** 4) Serve static assets  */
app.use(express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route */
app.get("/json", function(req,res) {
	res.json(process.env.MESSAGE);
})

/** 6) Use the .env file to configure the app */
 



/** 8) Chaining middleware. A Time server */
app.get("/now", function(req,res,next) {
	req.time = new Date().toString(); //simulate async call
	next();
}, function(req,res) {
	res.json({time: req.time});
});



/** 9)  Get input from client - Route parameters */
app.get("/:word/echo", function(req,res) {
	console.log(req.params.word);
	res.send(req.params);
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

//AND
 
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
//chaining GET AND POST Based on SAME Path
var bpEncoder = bodyParser.urlencoded({extended: false});

app.route("/name").get(function(req,res,next) {
	console.log(req.query.first + " " + req.query.last);
	next();
}).post(bpEncoder, function(req,res) {
	//console.log("got to post!");
	console.log(req.body.first + " " + req.body.last);
});

/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
