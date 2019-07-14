require('http')
.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });



  res.end({
    s: 'hello',
    a: ['chunk'],
    o: {},
    b: true,
    u: undefined,
    n: null,
    num: 1
  });


})
.listen(3000);
// cmd: telnet 127.0.0.1 3000
// telnet: GET / HTTP/1.1
