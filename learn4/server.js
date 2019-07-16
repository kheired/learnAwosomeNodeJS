require('http').createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello World');
}).listen(3000, function() {
  console.log('server ok');

});
