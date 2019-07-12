var net = require('net');
var client = net.connect(6667, 'irc.freenode.net');
client.setEncoding('utf-8');
client.on('connect', function() {
  client.wrire('NICK mynick\r\n');
  client.write('USER mynick 0 * :realname\r\n');
  client.write('JOIN #node.js\r\n');
});
// net.connect('300', 'localhost', function(){});
