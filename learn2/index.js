var net = require('net');
var count = 0;
var user = {};
var server = net.createServer(function(conn) {
  conn.setEncoding('utf8');
  // handle connection
  console.log('\033[90m    new connection!\033[39m');

  // 代表当前连接的昵称
  var nickname;
  conn.on('data', function(data) {
    // 删除回车符
    data = data.replace('\r\n', '');

    // 接受到的第一份数据应当是用户输入的昵称
    if(!nickname) {
      if(user[data]) {
        conn.write('\033[93m > nickname already in use. Try again; \033[39m');
        return
      } else {
        nickname = data;
        user[nickname] = conn;

        for(var i in user) {
          // user[i].write('\n \033[90m > ' + nickname + ' joined the room\033[39m\n');
          broadcast('\n \033[90m > ' + nickname + ' joined the room\033[39m\n');
        }

      }
    } else {
      // 否则，视为聊天消息
      for( var i in user) {
        if(i !== nickname) {
          // user[i].write('\033[96m > ' + nickname + ':\033[39m ' + data + '\n');
          broadcast('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true)

        }
      }
    }
  });

  conn.write(
      '\n > Welcome to \033[92m node-chat \033[39m'
      + '\n > ' + count + ' other people are connected at this time.'
      + '\n > please write your name and press enter;'
  );

  count++;

  function broadcast(msg, exceptMyself) {
    for(var i in user) {
      if(!exceptMyself || i != nickname) {
        user[i].write(msg);
      }
    }
  }

  conn.on('data', function(data) {
    console.log(data);
    // broadcast('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true)

  });


  conn.on('close', function() {
    count--;
    delete user[nickname];
    broadcast('\033[90m > ' + nickname + ' left the room\033[39m\n');
  });
});

// 监听
server.listen(3000, function() {
  console.log('\033[96m    server listening on *:3000\033[39m');

})


