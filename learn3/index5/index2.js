require('http').createServer(function main(req, res) {

      if('/' === req.url) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end([
          '<form method="post" action="/url">',
          '<h1>My form</h1>',
          '<fieldset>',
          '<label>Personal information</label>',
          '<p>What is your name?</p>',
          '<input type="text" name="name"/>',
          '<p><button>Submit</button></p>',
          '</fieldset>',
          '</form>',
        ].join(''));
      } else if('/url' === req.url && 'POST' === req.method) {
        var body = '';
        req.on('data', function(chunk) {
          body += chunk;
        });
        req.on('end', function() {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(
              '<p>Content-Type:'+ req.headers['content-type'] +' </p>'
              + '<p>Data:</p><pre>' + body + '</pre>'
          );
        })
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`ooo:${req.headers['content-type']}`)
      }

    }).listen(3000, function() {
  console.log('Listening on port 3000;');
  console.log(require('querystring').parse('name=XiaoGuiZi'));
  console.log(require('querystring').parse('name=XiaoGuiZi+rush'));


});
