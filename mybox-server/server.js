var http = require("http");
var url = require("url");

var PORT = 8888; 

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(PORT);
  console.log("Server has started on port " + PORT + ".");
}

exports.start = start;