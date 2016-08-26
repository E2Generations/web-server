// use module export to expose middleware

var middleware = {
  requireAuthenticaton: function(request, response, next){
    console.log("private route hit");
    next();
  },
  logger: function(request,response,next){
    console.log(request.method + " " + request.url);
    next();
  }
};

module.exports = middleware;
