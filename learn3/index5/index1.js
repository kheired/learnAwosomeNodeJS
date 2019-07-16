var http = require('http');
var server = http.createServer(main);
var port = 3000;
var cb = function cb() {
  console.log('Server listening on port 3000!');
};
function main(req, res) {
  if('/' === req.url) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // 为了让HTML结构更加清楚，将响应文本内容写在一个数组中，再用join方法将其转换为字符串
    res.end([
      `<form method="post" action="/url">
            <h1>My form</h1>
            <label>Personal information:</label>
            <p>What is your name?</p>
            <input type="text" name="name" />
            <p><button type="submit">提交</button><button type="reset">重置</button></p>
       </form>`
    ].join(''))
  } else if('/url' === req.url) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`You sent <em>${req.method}</em> request!`)
  }

};



server.listen(port, cb);
