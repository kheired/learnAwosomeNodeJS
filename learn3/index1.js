require('http')
.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello World')

})
.listen(3000);
// cmd: telnet 127.0.0.1 3000
// telnet: GET / HTTP/1.1
