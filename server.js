var express = require('express');
var app = express();
var PORT = 3000;

//about

var middleware={
  requireAuthenticaton: function(request, response, next){
    console.log("private route hit");
    next();
  },
  logger: function(request,response,next){
    console.log(request.method + " " + request.url);
    next();
  }
}

app.use(middleware.logger);

app.get("/about", middleware.requireAuthenticaton, function(request, response){
  response.send("Hey Hey Hey!");
});

app.use(express.static(__dirname + "/public"));


app.listen(PORT, function(){
  console.log("server is started");
});
