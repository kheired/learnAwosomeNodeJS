require('http')
.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('hi');
  setTimeout(function() {
    res.end('<h1>Hello MR5</h1>')

  }, 500);
  res.write(' ');
  res.write(' hii ');

})
.listen(3000);
// cmd: telnet 127.0.0.1 3000
// telnet: GET / HTTP/1.1
