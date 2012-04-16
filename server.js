var http = require("http")
  , s = http.createServer()
  , fnResponseHandler;

fnResponseHandler = function(response) {
  response.setEncoding('utf8');

  response.on('data', function (chunk) {
    console.log(chunk);
  });
}


s.on("request", function(req, res) {
  var userAgentString = req.headers["user-agent"]
    , responseHTML
    //, nyt = http.createClient(80, "www.nytimes.com")
    //, nytGetRequest = nyt.request("GET", "/")
    , localPost = http.createClient(8082, "localhost")
    , localPostRequest = localPost.request("POST", "/")
    , postData = JSON.stringify({
        "Server" : "I am Server 1"
      });
    ;
  
  //nytGetRequest.on("response", fnResponseHandler);
  //nytGetRequest.end();

  localPostRequest.write(postData);
  localPostRequest.end();

  responseHTML = "<html>\n"
      + "<head>\n"
      + "<title>Node.js workshop</title>\n"
      + "</head>\n"
      + "<body>\n"
      + "<h3>I'm learning Node</h3>\n"
      + "<p>Page visited using: " + userAgentString + "</p>\n"
      + "</body>\n"
      + "</html>\n"
    ;

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(responseHTML);
}).listen(8081, "127.0.0.1");

console.log("Server running at http://127.0.0.1:8081/");
