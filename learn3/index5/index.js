var qs = require('querystring');
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
              '<p>your name is <b>:'+ qs.parse(body).name +'</b></p>'
          );
        })
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('not found')
      }

    }).listen(3000, function() {
  console.log('Listening on port 3000;');
  console.log(qs.parse('name=XiaoGuiZi'));
  console.log(qs.parse('name=XiaoGuiZi+rush'));


});
