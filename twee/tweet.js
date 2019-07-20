var http = require('http'),
    qs = require('querystring');

var search = process.argv.slice(2).join(' ').trim();

if(!search.length) {
  return console.log('\n  Usage: node tweets <search term>\n');

}
console.log('\n searching for: \033[96m' + search + '\033[39m\n');

http.get(
    { host: 'search.tweeter.com', path: '/search.json?' + qs.stringify({q: search}), },
    function(res) {
      var body = '';
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        require('fs').writeFileSync('a.txt', 'utf8', body);

        var obj = JSON.parse(body);
        obj.results.forEach(function(item, i) {
          console.log('\n   \033[90m' + item.text + '\033[39m\n');
          console.log('\n   \033[94m' + item.form_user + '\033[39m\n');
          console.log('--');

        })
      })
    });
