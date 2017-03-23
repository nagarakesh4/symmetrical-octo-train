//load express module
var express = require('express');
var app = express()

//HTTP Requests
app.get('/', function(req, res){
	console.log("running in docker")
	res.send('Hello World Venkata')
})

//launch listenening on port 8191
app.listen(8191, function(){
	console.log('listening on port 8191')
})