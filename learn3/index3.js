require('http')
.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  // res.writeHead(200, { 'Keep-Alive': 'Close' });
  // res.writeHead(200, { 'Connection': 'Close' });
  var stream = require('fs').createReadStream(__dirname + '/client/deepClone.jpg');
  console.log(__dirname + '/client/deepClone.jpg');
  console.log(req.connection);

  // stream.on('data', function(chunk) {
  //   res.write(chunk);
  // });
  // stream.on('end', function() {
  //   res.end();
  // })
  // 流注入
  stream.pipe(res);

})
.listen(3000);
// cmd: telnet 127.0.0.1 3000
// telnet: GET / HTTP/1.1
