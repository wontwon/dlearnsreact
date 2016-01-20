// These two lines are required to initialize Express in Cloud Code.
var bodyParser = require('body-parser')
var express = require('express');
var app = express();

app.set('views', 'views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//serve static files
app.use(express.static(__dirname + '/public'));

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/', function(req, res) {
	res.render('layout');
});

// // Example reading from the request query string of an HTTP get request.

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen(3000, function() {
	console.log("App listening on port 3000");
});


