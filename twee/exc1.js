var request = require('superagent');
request.post('http://example.com/')
    .send({q: 'justin bieber'})
    .set({'Content-Type': 'text/html'})
    .end(function(res) {
  console.log(res);
  console.log(res.body);

});
