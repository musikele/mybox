var http = require("http");
var url = require("url");

var PORT = 8888; 

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);

  }

  http.createServer(onRequest).listen(PORT);
  console.log("Server has started on port " + PORT + ".");
}

exports.start = start;