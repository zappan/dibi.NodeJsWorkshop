var http = require('http')
  , opts = {
        host    : "localhost"
      , port    : 8082
      , path    : "/"
      , method  : "POST"
    }
  , postData = JSON.stringify({
        "Server"    : "I am Server 1"
      , "Timestamp" : (new Date()).toString() 
    })
  , request;

request = http.request(opts, function(res) {
  res.setEncoding("utf8");
  res.on("data", function(d) {
    console.log(d);
  });
});

request.write(postData);
request.end();