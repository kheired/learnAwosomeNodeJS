var request = require('superagent');
request.get('http://tweetrt.com/search.json')
    .send({q: 'justin bieber'})
    .set('Date', new Date())
    .end(function(res) {
  console.log(res);
  console.log(res.body);

});
