var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type": "text/plain"});
	response.write("Hello");
	response.end();
	console.log("Receive a request");
	execute(say,"hi");
}).listen(8888);
console.log("Listen at localhost:8888");


function say(word){
	console.log(word);
}

function execute(someFunction, value){
	someFunction(value);
}