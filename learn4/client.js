var qs = require('querystring'),
    http = require('http');

function send(theName) {
  http.request({
    host: '127.0.0.1',
    port: '3000',
    url: '/',
    method: 'POST'
  }, function(res) {
    // var body = '';
    res.setEncoding('utf8');

    // res.on('data', function(chunk) {
    //   body += chunk;
    // });

    res.on('end', function() {
      // console.log('\n We got: \033[96m' + body + '\033[39m\n');
      console.log('\n    \033[96m  request complete! \033[39m\n');
      process.stdout.write('\n your name: ');

    });
  }).end(qs.stringify({name: theName}));
}

process.stdout.write('\n   your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(name) {
  send(name.replace('\n', ''))
});

