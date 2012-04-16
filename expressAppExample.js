var express = require('express')
  , port = 3000
  , app = express.createServer()
  ;

app.use(express.cookieParser());

app.get('/', function(req, res) {
  var qsQuery = req.param('page');
  res.writeHead(200, {"Content-Type": "text/html"});
  if (!qsQuery) {
    res.end("Express app here. You haven't requested the page to display");
  }
  else {
    res.end("Express app here. You requested to display page " + qsQuery);
  }
})

app.get('/old', function(req, res) {
  res.redirect('/new');
})

app.get('/new', function(req, res) {
  res.end('Redirected to "/new" ');
})

app.get('/cookie', function(req, res) {
  var prevCookieVal = req.cookies.rememberme
    , qsClearCookie = req.param('clear');

  if ("true" === qsClearCookie) {
    // "Remember me" for 15 minutes 
    res.clearCookie('rememberme');
    res.end("Your old cookie value was: " + prevCookieVal + "\nNew cookie is now cleared");
  }
  else {
    // "Remember me" for 15 minutes 
    res.cookie('rememberme', 'yes', { expires: new Date(Date.now() + 900000), httpOnly: true })  
    res.end("Your old cookie value was: " + prevCookieVal + "\nNew cookie is now set");
  }
})

app.listen(3000);