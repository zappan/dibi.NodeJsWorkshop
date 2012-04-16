var http = require('http')
  , opts = {
      host : "www.nytimes.com"
    , port : 80
    , path : "/"
  };

http.get(opts, function(res) {
  res.setEncoding("utf8");
  res.on("data", function(d) {
    console.log(d);
  });
});