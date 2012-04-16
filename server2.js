var http = require("http")
  , s = http.createServer()
  , fnPostDataHandler
  ;

fnPostDataHandler = function(chunk) {
  console.log(chunk);
};

s.on("request", function(req, res) {
  req.setEncoding("utf8");
  req.on("data", fnPostDataHandler)
}).listen(8082, "127.0.0.1");

s.on("end", function(req, res) {
  res.end();
})

console.log("Server running at http://127.0.0.1:8082/");
